import { useEffect, useMemo, useState } from "react";
import "../styles/admin.css";

import {
  Users,
  MapPin,
  Star,
  Compass,
  Languages,
} from "lucide-react";

import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import AdminSidebar from "../components/admin/AdminSidebar";
import AdminHeader from "../components/admin/AdminHeader";
import StatCard from "../components/admin/StatCard";
import ChartCard from "../components/admin/ChartCard";

import {
  calculatePercentage,
  getDistribution,
  getMultipleChoiceDistribution,
  getScaleAnalytics,
  getGridScoreAnalytics,
  getTextResponses,
  getQuestionResponseRate,
  getLanguageDistribution,
  sortDistribution,
} from "../utils/analytics";

import questionMetadata from "../utils/questionMetadata";


function Admin() {
  const [activeSection, setActiveSection] =
    useState("overview");

  const [responses, setResponses] = useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState(null);


  /*
   * =====================================================
   * LOAD RESPONSES FROM FASTAPI
   * =====================================================
   */

  useEffect(() => {
    async function loadResponses() {
      try {
        setLoading(true);
        setError(null);

        const apiUrl =
          import.meta.env.VITE_API_URL;

        if (!apiUrl) {
          throw new Error(
            "VITE_API_URL is not configured."
          );
        }

        const response = await fetch(
          `${apiUrl}/api/admin/responses`
        );

        if (!response.ok) {
          throw new Error(
            `Failed to load responses (${response.status}).`
          );
        }

        const data =
          await response.json();

        setResponses(
          data.responses || []
        );

      } catch (error) {
        console.error(
          "Failed to load admin responses:",
          error
        );

        setError(
          error.message ||
            "Failed to load survey responses."
        );

      } finally {
        setLoading(false);
      }
    }

    loadResponses();
  }, []);


  /*
   * =====================================================
   * BASIC STATISTICS
   * =====================================================
   */

  const totalResponses =
    responses.length;


  /*
   * =====================================================
   * QUESTION DISTRIBUTIONS
   * =====================================================
   */

  const ageDistribution =
    useMemo(() => {
      return sortDistribution(
        getDistribution(
          responses,
          "q2"
        ),
        questionMetadata.q2.order
      );
    }, [responses]);


  const genderDistribution =
    useMemo(() => {
      return sortDistribution(
        getDistribution(
          responses,
          "q3"
        ),
        questionMetadata.q3.order
      );
    }, [responses]);


  const livingInIzmirDistribution =
    useMemo(() => {
      return sortDistribution(
        getDistribution(
          responses,
          "q4"
        ),
        questionMetadata.q4.order
      );
    }, [responses]);


  const employmentDistribution =
    useMemo(() => {
      return sortDistribution(
        getDistribution(
          responses,
          "q9"
        ),
        questionMetadata.q9.order
      );
    }, [responses]);


  const futurePlansDistribution =
    useMemo(() => {
      return sortDistribution(
        getDistribution(
          responses,
          "q16"
        ),
        questionMetadata.q16.order
      );
    }, [responses]);


  /*
   * q19 = multiple choice
   */

  const challengesDistribution =
    useMemo(() => {
      return sortDistribution(
        getMultipleChoiceDistribution(
          responses,
          "q19"
        ),
        questionMetadata.q19.order
      );
    }, [responses]);


  /*
   * =====================================================
   * LANGUAGE ANALYTICS
   * =====================================================
   */

  const languageDistribution =
    useMemo(() => {
      return getLanguageDistribution(
        responses
      );
    }, [responses]);


  /*
   * =====================================================
   * SCALE ANALYTICS
   * =====================================================
   */

  const experienceAnalytics =
    useMemo(() => {
      return getScaleAnalytics(
        responses,
        "q14"
      );
    }, [responses]);


  /*
   * =====================================================
   * GRID ANALYTICS
   * =====================================================
   *
   * q15 uses:
   *
   * very_dissatisfied = 1
   * dissatisfied      = 2
   * neutral           = 3
   * satisfied         = 4
   * very_satisfied    = 5
   *
   */

  const satisfactionAnalytics =
    useMemo(() => {
      return getGridScoreAnalytics(
        responses,
        "q15",
        questionMetadata.q15.columns
      );
    }, [responses]);


  /*
   * =====================================================
   * TEXT RESPONSES
   * =====================================================
   */

  const recommendationResponses =
    useMemo(() => {
      return getTextResponses(
        responses,
        "q23"
      );
    }, [responses]);


  const isocResponses =
    useMemo(() => {
      return getTextResponses(
        responses,
        "q21"
      );
    }, [responses]);


  /*
   * =====================================================
   * RESPONSE RATES
   * =====================================================
   */

  const experienceResponseRate =
    useMemo(() => {
      return getQuestionResponseRate(
        responses,
        "q14"
      );
    }, [responses]);


  const futurePlanResponseRate =
    useMemo(() => {
      return getQuestionResponseRate(
        responses,
        "q16"
      );
    }, [responses]);


  /*
   * =====================================================
   * HELPER FUNCTIONS
   * =====================================================
   */

  const getYesPercentage = (
    distribution
  ) => {
    const yesAnswer =
      distribution.find(
        (item) =>
          String(item.value).toLowerCase() ===
          "yes"
      );

    if (!yesAnswer) {
      return 0;
    }

    return calculatePercentage(
      yesAnswer.count,
      responses.length
    );
  };


  /*
   * =====================================================
   * STAT CARD VALUES
   * =====================================================
   */

  const livingInIzmir =
    getYesPercentage(
      livingInIzmirDistribution
    );


  const stayingInTurkey =
    getYesPercentage(
      futurePlansDistribution
    );


  /*
   * =====================================================
   * LABEL HELPERS
   * =====================================================
   *
   * Converts database values such as:
   *
   * "18_24"
   *
   * into:
   *
   * "18–24"
   *
   */

  const getQuestionLabel = (
    questionId,
    value
  ) => {
    const metadata =
      questionMetadata[questionId];

    if (!metadata) {
      return value;
    }

    if (metadata.options) {
      const option =
        metadata.options.find(
          (item) =>
            item.value === value
        );

      if (option) {
        return option.label;
      }
    }

    if (
      metadata.rows
    ) {
      const row =
        metadata.rows.find(
          (item) =>
            item.value === value
        );

      if (row) {
        return row.label;
      }
    }

    if (
      metadata.columns
    ) {
      const column =
        metadata.columns.find(
          (item) =>
            item.value === value
        );

      if (column) {
        return column.label;
      }
    }

    const fallbackLabels = {
      yes: "Yes",
      no: "No",
      undecided: "Undecided",

      male: "Male",
      female: "Female",
      prefer_not_to_say:
        "Prefer not to say",
      other: "Other",

      under_18: "Under 18",
      "18_24": "18–24",
      "25_34": "25–34",
      "35_44": "35–44",
      "45_54": "45–54",
      "55_plus":
        "55 years and above",

      employed_full_time:
        "Employed full-time",
      employed_part_time:
        "Employed part-time",
      self_employed:
        "Self-employed",
      student_only:
        "Student only",
      unemployed:
        "Unemployed",
      intern: "Intern",

      very_dissatisfied:
        "Very Dissatisfied",
      dissatisfied:
        "Dissatisfied",
      neutral: "Neutral",
      satisfied: "Satisfied",
      very_satisfied:
        "Very Satisfied",
    };

    return (
      fallbackLabels[value] ||
      value
    );
  };


  /*
   * =====================================================
   * CHART DATA TRANSFORMATIONS
   * =====================================================
   */

  const ageData =
    useMemo(() => {
      return ageDistribution.map(
        (item) => ({
          name: getQuestionLabel(
            "q2",
            item.value
          ),
          value: item.count,
        })
      );
    }, [ageDistribution]);


  const genderData =
    useMemo(() => {
      return genderDistribution.map(
        (item) => ({
          name: getQuestionLabel(
            "q3",
            item.value
          ),
          value: item.count,
        })
      );
    }, [genderDistribution]);


  const employmentData =
    useMemo(() => {
      return employmentDistribution.map(
        (item) => ({
          name: getQuestionLabel(
            "q9",
            item.value
          ),
          value: item.count,
        })
      );
    }, [employmentDistribution]);


  const futurePlansData =
    useMemo(() => {
      return futurePlansDistribution.map(
        (item) => ({
          name: getQuestionLabel(
            "q16",
            item.value
          ),
          value: item.count,
        })
      );
    }, [futurePlansDistribution]);


  const challengesData =
    useMemo(() => {
      return challengesDistribution.map(
        (item) => ({
          name: getQuestionLabel(
            "q19",
            item.value
          ),
          value: item.count,
        })
      );
    }, [challengesDistribution]);


  /*
   * =====================================================
   * LANGUAGE CHART DATA
   * =====================================================
   */

  const languageData =
    useMemo(() => {
      const labels = {
        en: "English",
        tr: "Turkish",
        fr: "French",
        ru: "Russian",
      };

      return languageDistribution.map(
        (item) => ({
          name:
            labels[item.language] ||
            item.language.toUpperCase(),
          value: item.count,
        })
      );
    }, [languageDistribution]);


  /*
   * =====================================================
   * SATISFACTION CHART DATA
   * =====================================================
   */

  const satisfactionData =
    useMemo(() => {
      return questionMetadata.q15.rows.map(
        (row) => ({
          name: row.label,
          value:
            satisfactionAnalytics[
              row.value
            ]?.average || 0,
        })
      );
    }, [satisfactionAnalytics]);


  /*
   * =====================================================
   * RENDER - LOADING
   * =====================================================
   */

  if (loading) {
    return (
      <div className="admin-layout">
        <AdminSidebar
          activeSection={activeSection}
          onSectionChange={
            setActiveSection
          }
        />

        <main className="admin-main">
          <AdminHeader
            totalResponses={0}
          />

          <section className="admin-content">
            <div className="admin-loading">
              <h2>
                Loading dashboard...
              </h2>

              <p>
                Retrieving survey responses.
              </p>
            </div>
          </section>
        </main>
      </div>
    );
  }


  /*
   * =====================================================
   * RENDER - ERROR
   * =====================================================
   */

  if (error) {
    return (
      <div className="admin-layout">
        <AdminSidebar
          activeSection={activeSection}
          onSectionChange={
            setActiveSection
          }
        />

        <main className="admin-main">
          <AdminHeader
            totalResponses={0}
          />

          <section className="admin-content">
            <div className="admin-error">
              <h2>
                Unable to load dashboard
              </h2>

              <p>
                {error}
              </p>

              <p>
                Please check that the
                FastAPI server is running
                and that VITE_API_URL is
                configured correctly.
              </p>
            </div>
          </section>
        </main>
      </div>
    );
  }


  /*
   * =====================================================
   * RENDER
   * =====================================================
   */

  return (
    <div className="admin-layout">

      <AdminSidebar
        activeSection={activeSection}
        onSectionChange={
          setActiveSection
        }
      />

      <main className="admin-main">

        <AdminHeader
          totalResponses={
            totalResponses
          }
        />

        <section className="admin-content">

          {/* =================================================
              OVERVIEW
          ================================================= */}

          {activeSection ===
            "overview" && (
            <>
              <div className="stats-grid">

                <StatCard
                  label="Total Responses"
                  value={
                    totalResponses
                  }
                  description="Survey participants"
                  icon={
                    <Users size={20} />
                  }
                />

                <StatCard
                  label="Living in İzmir"
                  value={`${livingInIzmir.toFixed(
                    0
                  )}%`}
                  description="Current residents"
                  icon={
                    <MapPin size={20} />
                  }
                />

                <StatCard
                  label="Average Experience"
                  value={`${experienceAnalytics.average.toFixed(
                    1
                  )}/10`}
                  description="Overall Türkiye rating"
                  icon={
                    <Star size={20} />
                  }
                />

                <StatCard
                  label="Plan to Stay"
                  value={`${stayingInTurkey.toFixed(
                    0
                  )}%`}
                  description="Intend to remain"
                  icon={
                    <Compass size={20} />
                  }
                />
              </div>


              <div className="dashboard-grid">

                {/* AGE */}

                <ChartCard
                  title="Age Distribution"
                  subtitle="Participant age groups"
                >
                  <ResponsiveContainer
                    width="100%"
                    height={300}
                  >
                    <BarChart
                      data={ageData}
                    >
                      <XAxis
                        dataKey="name"
                      />

                      <YAxis />

                      <Tooltip />

                      <Bar
                        dataKey="value"
                        radius={[
                          6,
                          6,
                          0,
                          0,
                        ]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartCard>


                {/* GENDER */}

                <ChartCard
                  title="Gender Distribution"
                  subtitle="Participant demographics"
                >
                  <ResponsiveContainer
                    width="100%"
                    height={300}
                  >
                    <PieChart>

                      <Pie
                        data={genderData}
                        dataKey="value"
                        nameKey="name"
                        outerRadius={100}
                        innerRadius={55}
                      >
                        {genderData.map(
                          (
                            entry,
                            index
                          ) => (
                            <Cell
                              key={`gender-${index}`}
                            />
                          )
                        )}
                      </Pie>

                      <Tooltip />

                    </PieChart>
                  </ResponsiveContainer>
                </ChartCard>


                {/* LANGUAGE */}

                <ChartCard
                  title="Responses by Language"
                  subtitle="Questionnaire language distribution"
                >
                  <ResponsiveContainer
                    width="100%"
                    height={300}
                  >
                    <PieChart>

                      <Pie
                        data={languageData}
                        dataKey="value"
                        nameKey="name"
                        outerRadius={100}
                        innerRadius={55}
                      >
                        {languageData.map(
                          (
                            entry,
                            index
                          ) => (
                            <Cell
                              key={`language-${index}`}
                            />
                          )
                        )}
                      </Pie>

                      <Tooltip />

                    </PieChart>
                  </ResponsiveContainer>
                </ChartCard>

              </div>
            </>
          )}


          {/* =================================================
              DEMOGRAPHICS
          ================================================= */}

          {activeSection ===
            "demographics" && (
            <div className="dashboard-grid">

              <ChartCard
                title="Age Groups"
                subtitle="Participant age distribution"
              >
                <ResponsiveContainer
                  width="100%"
                  height={350}
                >
                  <BarChart
                    data={ageData}
                  >
                    <XAxis
                      dataKey="name"
                    />

                    <YAxis />

                    <Tooltip />

                    <Bar
                      dataKey="value"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </ChartCard>


              <ChartCard
                title="Gender"
                subtitle="Participant gender distribution"
              >
                <ResponsiveContainer
                  width="100%"
                  height={350}
                >
                  <PieChart>

                    <Pie
                      data={genderData}
                      dataKey="value"
                      nameKey="name"
                      outerRadius={110}
                    >
                      {genderData.map(
                        (
                          entry,
                          index
                        ) => (
                          <Cell
                            key={`gender-demographic-${index}`}
                          />
                        )
                      )}
                    </Pie>

                    <Tooltip />

                  </PieChart>
                </ResponsiveContainer>
              </ChartCard>


              <ChartCard
                title="Questionnaire Languages"
                subtitle="Responses by questionnaire language"
              >
                <ResponsiveContainer
                  width="100%"
                  height={350}
                >
                  <BarChart
                    data={languageData}
                  >
                    <XAxis
                      dataKey="name"
                    />

                    <YAxis />

                    <Tooltip />

                    <Bar
                      dataKey="value"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </ChartCard>

            </div>
          )}


          {/* =================================================
              EMPLOYMENT
          ================================================= */}

          {activeSection ===
            "employment" && (
            <ChartCard
              title="Employment Status"
              subtitle="Current employment distribution"
            >
              <ResponsiveContainer
                width="100%"
                height={400}
              >
                <BarChart
                  data={employmentData}
                  layout="vertical"
                  margin={{
                    left: 20,
                    right: 20,
                  }}
                >
                  <XAxis
                    type="number"
                  />

                  <YAxis
                    type="category"
                    dataKey="name"
                    width={160}
                  />

                  <Tooltip />

                  <Bar
                    dataKey="value"
                  />

                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          )}


          {/* =================================================
              LIVING EXPERIENCE
          ================================================= */}

          {activeSection ===
            "experience" && (
            <>
              <div className="stats-grid">

                <StatCard
                  label="Average"
                  value={`${experienceAnalytics.average}/10`}
                  description="Average experience score"
                  icon={
                    <Star size={20} />
                  }
                />

                <StatCard
                  label="Median"
                  value={`${experienceAnalytics.median}/10`}
                  description="Median experience score"
                  icon={
                    <Star size={20} />
                  }
                />

                <StatCard
                  label="Minimum"
                  value={`${experienceAnalytics.min}/10`}
                  description="Lowest score"
                  icon={
                    <Star size={20} />
                  }
                />

                <StatCard
                  label="Maximum"
                  value={`${experienceAnalytics.max}/10`}
                  description="Highest score"
                  icon={
                    <Star size={20} />
                  }
                />

              </div>


              <ChartCard
                title="Satisfaction Overview"
                subtitle={`Average satisfaction score • ${experienceResponseRate}% response rate`}
              >
                <ResponsiveContainer
                  width="100%"
                  height={450}
                >
                  <BarChart
                    data={
                      satisfactionData
                    }
                    layout="vertical"
                  >
                    <XAxis
                      type="number"
                      domain={[0, 5]}
                    />

                    <YAxis
                      type="category"
                      dataKey="name"
                      width={180}
                    />

                    <Tooltip />

                    <Bar
                      dataKey="value"
                    />

                  </BarChart>
                </ResponsiveContainer>
              </ChartCard>
            </>
          )}


          {/* =================================================
              FUTURE PLANS
          ================================================= */}

          {activeSection ===
            "future" && (
            <ChartCard
              title="Future Plans"
              subtitle={`Intentions regarding remaining in Türkiye • ${futurePlanResponseRate}% response rate`}
            >
              <ResponsiveContainer
                width="100%"
                height={400}
              >
                <PieChart>

                  <Pie
                    data={
                      futurePlansData
                    }
                    dataKey="value"
                    nameKey="name"
                    outerRadius={140}
                  >
                    {futurePlansData.map(
                      (
                        entry,
                        index
                      ) => (
                        <Cell
                          key={`future-${index}`}
                        />
                      )
                    )}
                  </Pie>

                  <Tooltip />

                </PieChart>
              </ResponsiveContainer>
            </ChartCard>
          )}


          {/* =================================================
              CHALLENGES
          ================================================= */}

          {activeSection ===
            "challenges" && (
            <ChartCard
              title="Most Common Challenges"
              subtitle="Challenges experienced by participants"
            >
              <ResponsiveContainer
                width="100%"
                height={450}
              >
                <BarChart
                  data={
                    challengesData
                  }
                  layout="vertical"
                  margin={{
                    left: 20,
                    right: 20,
                  }}
                >
                  <XAxis
                    type="number"
                  />

                  <YAxis
                    type="category"
                    dataKey="name"
                    width={220}
                  />

                  <Tooltip />

                  <Bar
                    dataKey="value"
                  />

                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          )}


          {/* =================================================
              FEEDBACK
          ================================================= */}

          {activeSection ===
            "feedback" && (
            <div className="feedback-list">

              {responses.length ===
                0 && (
                <ChartCard
                  title="No Feedback"
                  subtitle="There are currently no survey responses."
                >
                  <p>
                    No responses are
                    available yet.
                  </p>
                </ChartCard>
              )}


              {responses.map(
                (response) => {

                  const recommendation =
                    recommendationResponses.find(
                      (item) =>
                        item.id ===
                        response.id
                    );

                  const isocExperience =
                    isocResponses.find(
                      (item) =>
                        item.id ===
                        response.id
                    );

                  return (
                    <ChartCard
                      key={
                        response.id
                      }
                      title={`Response ${response.id.slice(
                        0,
                        8
                      )}`}
                      subtitle={`${response.language?.toUpperCase() || "N/A"} • ${new Date(
                        response.created_at
                      ).toLocaleDateString()}`}
                    >

                      <div className="feedback-item">

                        <h4>
                          Final Recommendation
                        </h4>

                        <p>
                          {recommendation?.answer ||
                            "No response provided."}
                        </p>

                      </div>


                      {isocExperience && (
                        <div className="feedback-item">

                          <h4>
                            ISOC Experience
                          </h4>

                          <p>
                            {
                              isocExperience.answer
                            }
                          </p>

                        </div>
                      )}

                    </ChartCard>
                  );
                }
              )}

            </div>
          )}

        </section>

      </main>
    </div>
  );
}


export default Admin;