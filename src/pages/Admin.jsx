import { useEffect, useMemo, useState } from "react";
import "../styles/admin.css";

import { useNavigate } from "react-router-dom";
import { adminFetch } from "../lib/api";

import {
  Users,
  MapPin,
  Star,
  Compass,
} from "lucide-react";

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
import { exportResponsesToCSV } from "../utils/exportCSV";


function Admin() {
  /*
   * =========================================================
   * STATE
   * =========================================================
   */

  const [activeSection, setActiveSection] =
    useState("overview");

  const [responses, setResponses] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  /*
   * =========================================================
   * LOAD RESPONSES
   * =========================================================
   */

  useEffect(() => {
    async function loadResponses() {
      try {
        setLoading(true);
        setError(null);

        const apiUrl = import.meta.env.VITE_API_URL;

        if (!apiUrl) {
          throw new Error(
            "VITE_API_URL is not configured."
          );
        }

        const response = await adminFetch(
          "/api/admin/responses"
        );

        if (!response.ok) {
          throw new Error(
            `Failed to load responses (${response.status}).`
          );
        }

        const data = await response.json();

        setResponses(
          Array.isArray(data.responses)
            ? data.responses
            : []
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
   * =========================================================
   * BASIC STATISTICS
   * =========================================================
   */

  const totalResponses = responses.length;


  /*
   * =========================================================
   * DISTRIBUTIONS
   * =========================================================
   */

  const ageDistribution = useMemo(
    () =>
      sortDistribution(
        getDistribution(responses, "q2"),
        questionMetadata.q2.order
      ),
    [responses]
  );

  const genderDistribution = useMemo(
    () =>
      sortDistribution(
        getDistribution(responses, "q3"),
        questionMetadata.q3.order
      ),
    [responses]
  );

  const livingInIzmirDistribution = useMemo(
    () =>
      sortDistribution(
        getDistribution(responses, "q4"),
        questionMetadata.q4.order
      ),
    [responses]
  );

  const employmentDistribution = useMemo(
    () =>
      sortDistribution(
        getDistribution(responses, "q9"),
        questionMetadata.q9.order
      ),
    [responses]
  );

  const futurePlansDistribution = useMemo(
    () =>
      sortDistribution(
        getDistribution(responses, "q16"),
        questionMetadata.q16.order
      ),
    [responses]
  );

  const challengesDistribution = useMemo(
    () =>
      sortDistribution(
        getMultipleChoiceDistribution(
          responses,
          "q19"
        ),
        questionMetadata.q19.order
      ),
    [responses]
  );

  const languageDistribution = useMemo(
    () =>
      getLanguageDistribution(responses),
    [responses]
  );


  /*
   * =========================================================
   * SCALE / GRID ANALYTICS
   * =========================================================
   */

  const experienceAnalytics = useMemo(
    () =>
      getScaleAnalytics(
        responses,
        "q14"
      ),
    [responses]
  );

  const satisfactionAnalytics = useMemo(
    () =>
      getGridScoreAnalytics(
        responses,
        "q15",
        questionMetadata.q15.columns
      ),
    [responses]
  );


  /*
   * =========================================================
   * TEXT RESPONSES
   * =========================================================
   */

  const recommendationResponses = useMemo(
    () =>
      getTextResponses(
        responses,
        "q23"
      ),
    [responses]
  );

  const isocResponses = useMemo(
    () =>
      getTextResponses(
        responses,
        "q21"
      ),
    [responses]
  );


  /*
   * =========================================================
   * RESPONSE RATES
   * =========================================================
   */

  const experienceResponseRate = useMemo(
    () =>
      getQuestionResponseRate(
        responses,
        "q14"
      ),
    [responses]
  );

  const futurePlanResponseRate = useMemo(
    () =>
      getQuestionResponseRate(
        responses,
        "q16"
      ),
    [responses]
  );


  /*
   * =========================================================
   * OPTION LABEL HELPER
   * =========================================================
   */

  function getOptionLabel(
    questionId,
    value
  ) {
    const question =
      questionMetadata[questionId];

    if (!question?.options) {
      return value;
    }

    const option =
      question.options.find(
        (item) =>
          item.value === value
      );

    return option?.label || value;
  }


  /*
   * =========================================================
   * CHART DATA
   * =========================================================
   */

  const ageData = Array.isArray(ageDistribution)
    ? ageDistribution.map(
        (item) => ({
          name: getOptionLabel(
            "q2",
            item.value
          ),
          value: item.count,
        })
      )
    : [];

  const genderData = Array.isArray(
    genderDistribution
  )
    ? genderDistribution.map(
        (item) => ({
          name: getOptionLabel(
            "q3",
            item.value
          ),
          value: item.count,
        })
      )
    : [];

  const livingInIzmirData =
    Array.isArray(
      livingInIzmirDistribution
    )
      ? livingInIzmirDistribution.map(
          (item) => ({
            name: getOptionLabel(
              "q4",
              item.value
            ),
            value: item.count,
          })
        )
      : [];

  const employmentData =
    Array.isArray(
      employmentDistribution
    )
      ? employmentDistribution.map(
          (item) => ({
            name: getOptionLabel(
              "q9",
              item.value
            ),
            value: item.count,
          })
        )
      : [];

  const futurePlansData =
    Array.isArray(
      futurePlansDistribution
    )
      ? futurePlansDistribution.map(
          (item) => ({
            name: getOptionLabel(
              "q16",
              item.value
            ),
            value: item.count,
          })
        )
      : [];

  const challengesData =
    Array.isArray(
      challengesDistribution
    )
      ? challengesDistribution.map(
          (item) => ({
            name: getOptionLabel(
              "q19",
              item.value
            ),
            value: item.count,
          })
        )
      : [];

  /*
   * Language analytics uses:
   *
   * {
   *   language,
   *   count,
   *   percentage
   * }
   *
   * rather than:
   *
   * {
   *   value,
   *   count
   * }
   */

  const languageData =
    Array.isArray(
      languageDistribution
    )
      ? languageDistribution.map(
          (item) => ({
            name: item.language,
            value: item.count,
          })
        )
      : [];


  /*
   * =========================================================
   * SATISFACTION GRID DATA
   *
   * getGridScoreAnalytics() returns an OBJECT.
   *
   * Example:
   *
   * {
   *   housing: {
   *     count: 10,
   *     totalScore: 35,
   *     average: 3.5
   *   }
   * }
   *
   * Recharts requires an ARRAY.
   *
   * Therefore we convert Object.entries(...)
   * into:
   *
   * [
   *   {
   *     name: "Housing",
   *     value: 3.5
   *   }
   * ]
   * =========================================================
   */

  const satisfactionData =
    satisfactionAnalytics &&
    typeof satisfactionAnalytics ===
      "object" &&
    !Array.isArray(
      satisfactionAnalytics
    )
      ? Object.entries(
          satisfactionAnalytics
        ).map(
          ([row, result]) => ({
            name:
              questionMetadata.q15.rows.find(
                (item) =>
                  item.value === row
              )?.label || row,

            value:
              Number(
                result.average
              ) || 0,
          })
        )
      : [];


  /*
   * =========================================================
   * STAT CARD VALUES
   * =========================================================
   */

  const livingInIzmirYes =
    livingInIzmirDistribution.find(
      (item) =>
        item.value === "yes"
    )?.count || 0;

  const livingInIzmirPercentage =
    calculatePercentage(
      livingInIzmirYes,
      totalResponses
    );

  const futurePlansYes =
    futurePlansDistribution.find(
      (item) =>
        item.value === "yes"
    )?.count || 0;

  const futurePlansPercentage =
    calculatePercentage(
      futurePlansYes,
      totalResponses
    );

  const averageExperience =
    experienceAnalytics?.average || 0;


  /*
   * =========================================================
   * LOADING STATE
   * =========================================================
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

          <div className="admin-loading">
            <p>
              Loading survey responses...
            </p>
          </div>
        </main>
      </div>
    );
  }


  /*
   * =========================================================
   * ERROR STATE
   * =========================================================
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

          <div className="admin-error">
            <h2>
              Unable to load responses
            </h2>

            <p>{error}</p>
          </div>
        </main>
      </div>
    );
  }


  /*
   * =========================================================
   * RENDER
   * =========================================================
   */

  return (
    <div className="admin-layout">

      {/* =====================================================
          SIDEBAR
          ===================================================== */}

      <AdminSidebar
        activeSection={activeSection}
        onSectionChange={
          setActiveSection
        }
      />


      {/* =====================================================
          MAIN CONTENT
          ===================================================== */}

      <main className="admin-main">

        <AdminHeader
          totalResponses={
            totalResponses
          }
          onExport={() =>
            exportResponsesToCSV(
              responses
            )
          }
        />


        <div className="admin-content">


          {/* =================================================
              OVERVIEW
              ================================================= */}

          {activeSection ===
            "overview" && (
            <section className="admin-section">

              <div className="section-heading">
                <h2>
                  Survey Overview
                </h2>

                <p>
                  Overview of all
                  submitted
                  questionnaire
                  responses.
                </p>
              </div>


              <div className="stats-grid">

                <StatCard
                  title="Total Responses"
                  value={
                    totalResponses
                  }
                  icon={Users}
                />

                <StatCard
                  title="Living in İzmir"
                  value={`${livingInIzmirPercentage}%`}
                  icon={MapPin}
                />

                <StatCard
                  title="Average Experience"
                  value={
                    averageExperience
                      ? `${averageExperience}/10`
                      : "—"
                  }
                  icon={Star}
                />

                <StatCard
                  title="Plan to Stay"
                  value={`${futurePlansPercentage}%`}
                  icon={Compass}
                />

              </div>


              <div className="charts-grid">

                <ChartCard
                  title="Age Distribution"
                  subtitle="Participant age groups"
                  data={ageData}
                  type="bar"
                />

                <ChartCard
                  title="Gender Distribution"
                  subtitle="Participant demographics"
                  data={genderData}
                  type="pie"
                />

                <ChartCard
                  title="Languages"
                  subtitle="Questionnaire language used"
                  data={languageData}
                  type="pie"
                />

                <ChartCard
                  title="Living in İzmir"
                  subtitle="Current residence status"
                  data={
                    livingInIzmirData
                  }
                  type="pie"
                />

              </div>

            </section>
          )}


          {/* =================================================
              DEMOGRAPHICS
              ================================================= */}

          {activeSection ===
            "demographics" && (
            <section className="admin-section">

              <div className="section-heading">
                <h2>
                  Demographics
                </h2>

                <p>
                  Demographic
                  characteristics
                  of survey
                  participants.
                </p>
              </div>


              <div className="charts-grid">

                <ChartCard
                  title="Age Distribution"
                  subtitle="Participant age groups"
                  data={ageData}
                  type="bar"
                />

                <ChartCard
                  title="Gender Distribution"
                  subtitle="Participant gender"
                  data={genderData}
                  type="pie"
                />

                <ChartCard
                  title="Living in İzmir"
                  subtitle="Whether participants currently live in İzmir"
                  data={
                    livingInIzmirData
                  }
                  type="pie"
                />

              </div>

            </section>
          )}


          {/* =================================================
              EMPLOYMENT
              ================================================= */}

          {activeSection ===
            "employment" && (
            <section className="admin-section">

              <div className="section-heading">
                <h2>
                  Employment
                </h2>

                <p>
                  Employment and
                  career-related
                  responses.
                </p>
              </div>


              <div className="charts-grid">

                <ChartCard
                  title="Employment Status"
                  subtitle="Current employment distribution"
                  data={
                    employmentData
                  }
                  type="bar"
                  layout="vertical"
                  height={360}
                  yAxisWidth={170}
                />

                <ChartCard
                  title="Employment Response Rate"
                  subtitle="Participants who provided employment information"
                  data={[
                    {
                      name: "Responded",
                      value:
                        getQuestionResponseRate(
                          responses,
                          "q9"
                        ),
                    },
                  ]}
                  type="bar"
                  xDomain={[
                    0,
                    100,
                  ]}
                />

              </div>

            </section>
          )}


          {/* =================================================
              LIVING EXPERIENCE
              ================================================= */}

          {activeSection ===
            "experience" && (
            <section className="admin-section">

              <div className="section-heading">
                <h2>
                  Living Experience
                </h2>

                <p>
                  Participants'
                  experiences of
                  living in
                  Türkiye and
                  İzmir.
                </p>
              </div>


              <div className="charts-grid">

                <ChartCard
                  title="Overall Experience"
                  subtitle={`Rating from 1–10 • ${experienceResponseRate}% response rate`}
                  data={[
                    {
                      name: "Average",
                      value:
                        Number(
                          averageExperience
                        ) || 0,
                    },
                  ]}
                  type="bar"
                  xDomain={[
                    0,
                    10,
                  ]}
                />

                <ChartCard
                  title="Satisfaction by Area"
                  subtitle="Average satisfaction score"
                  data={
                    satisfactionData
                  }
                  type="bar"
                  layout="vertical"
                  xDomain={[
                    0,
                    5,
                  ]}
                  height={360}
                  yAxisWidth={180}
                />

              </div>

            </section>
          )}


          {/* =================================================
              FUTURE PLANS
              ================================================= */}

          {activeSection ===
            "future" && (
            <section className="admin-section">

              <div className="section-heading">
                <h2>
                  Future Plans
                </h2>

                <p>
                  Participants'
                  intentions
                  regarding
                  their future
                  in Türkiye.
                </p>
              </div>


              <div className="charts-grid">

                <ChartCard
                  title="Future Plans"
                  subtitle={`Intentions regarding remaining in Türkiye • ${futurePlanResponseRate}% response rate`}
                  data={
                    futurePlansData
                  }
                  type="pie"
                />

              </div>

            </section>
          )}


          {/* =================================================
              CHALLENGES
              ================================================= */}

          {activeSection ===
            "challenges" && (
            <section className="admin-section">

              <div className="section-heading">
                <h2>
                  Challenges
                </h2>

                <p>
                  Common
                  challenges
                  reported by
                  participants.
                </p>
              </div>


              <div className="charts-grid">

                <ChartCard
                  title="Reported Challenges"
                  subtitle="Challenges experienced by participants"
                  data={
                    challengesData
                  }
                  type="bar"
                  layout="vertical"
                  height={420}
                  yAxisWidth={200}
                />

              </div>

            </section>
          )}


          {/* =================================================
              FEEDBACK
              ================================================= */}

          {activeSection ===
            "feedback" && (
            <section className="admin-section">

              <div className="section-heading">
                <h2>
                  Participant Feedback
                </h2>

                <p>
                  Open-ended responses
                  from participants.
                </p>
              </div>


              <div className="feedback-grid">

                {/* RECOMMENDATIONS */}

                <ChartCard
                  title="Recommendations"
                  subtitle={`${recommendationResponses.length} responses`}
                >
                  <div className="text-response-list">

                    {recommendationResponses.length ===
                    0 ? (
                      <div className="chart-empty">
                        No responses available yet.
                      </div>
                    ) : (
                      recommendationResponses.map(
                        (
                          response,
                          index
                        ) => (
                          <div
                            className="text-response"
                            key={
                              response.id ||
                              index
                            }
                          >
                            <p>
                              {
                                response.answer
                              }
                            </p>

                            <span>
                              {
                                response.language
                              }
                            </span>
                          </div>
                        )
                      )
                    )}

                  </div>
                </ChartCard>


                {/* ISOC EXPERIENCE */}

                <ChartCard
                  title="ISOC Experience"
                  subtitle={`${isocResponses.length} responses`}
                >
                  <div className="text-response-list">

                    {isocResponses.length ===
                    0 ? (
                      <div className="chart-empty">
                        No responses available yet.
                      </div>
                    ) : (
                      isocResponses.map(
                        (
                          response,
                          index
                        ) => (
                          <div
                            className="text-response"
                            key={
                              response.id ||
                              index
                            }
                          >
                            <p>
                              {
                                response.answer
                              }
                            </p>

                            <span>
                              {
                                response.language
                              }
                            </span>
                          </div>
                        )
                      )
                    )}

                  </div>
                </ChartCard>

              </div>

            </section>
          )}

        </div>

      </main>

    </div>
  );
}

export default Admin;