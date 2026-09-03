const questionMetadata = {
  /*
   * =========================================================
   * PARTICIPANT INFORMATION
   * =========================================================
   */

  q1: {
    category: "Demographics",
    title: "Nationality",
    type: "text",
  },

  q2: {
    category: "Demographics",
    title: "Age Group",
    type: "distribution",
    options: [
      { value: "under_18", label: "Under 18" },
      { value: "18_24", label: "18–24" },
      { value: "25_34", label: "25–34" },
      { value: "35_44", label: "35–44" },
      { value: "45_54", label: "45–54" },
      { value: "55_plus", label: "55 years and above" },
    ],
    order: [
      "under_18",
      "18_24",
      "25_34",
      "35_44",
      "45_54",
      "55_plus",
    ],
  },

  q3: {
    category: "Demographics",
    title: "Gender",
    type: "distribution",
    options: [
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
      {
        value: "prefer_not_to_say",
        label: "Prefer not to say",
      },
      { value: "other", label: "Other" },
    ],
    order: [
      "male",
      "female",
      "prefer_not_to_say",
      "other",
    ],
  },

  q4: {
    category: "Location",
    title: "Currently Living in İzmir",
    type: "distribution",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
    order: ["yes", "no"],
  },


  /*
   * =========================================================
   * EDUCATIONAL BACKGROUND
   * =========================================================
   */

  q5: {
    category: "Education",
    title: "Current Education Status",
    type: "distribution",
    options: [
      {
        value: "undergraduate_student",
        label: "Current undergraduate student",
      },
      {
        value: "masters_student",
        label: "Current master's student",
      },
      {
        value: "phd_student",
        label: "Current PhD student",
      },
      {
        value: "graduate",
        label: "Graduate",
      },
      {
        value: "not_currently_studying",
        label: "Not currently studying",
      },
      {
        value: "other",
        label: "Other",
      },
    ],
    order: [
      "undergraduate_student",
      "masters_student",
      "phd_student",
      "graduate",
      "not_currently_studying",
      "other",
    ],
  },

  q6: {
    category: "Education",
    title: "Highest Education Level",
    type: "distribution",
    options: [
      {
        value: "high_school",
        label: "High School",
      },
      {
        value: "diploma",
        label: "Diploma",
      },
      {
        value: "bachelors_degree",
        label: "Bachelor's Degree",
      },
      {
        value: "masters_degree",
        label: "Master's Degree",
      },
      {
        value: "doctorate",
        label: "Doctorate (PhD)",
      },
      {
        value: "other",
        label: "Other",
      },
    ],
    order: [
      "high_school",
      "diploma",
      "bachelors_degree",
      "masters_degree",
      "doctorate",
      "other",
    ],
  },

  q7: {
    category: "Education",
    title: "Field of Study",
    type: "text",
  },

  q8: {
    category: "Education",
    title: "University or Institution",
    type: "text",
  },


  /*
   * =========================================================
   * EMPLOYMENT INFORMATION
   * =========================================================
   */

  q9: {
    category: "Employment",
    title: "Employment Status",
    type: "distribution",
    options: [
      {
        value: "employed_full_time",
        label: "Employed full-time",
      },
      {
        value: "employed_part_time",
        label: "Employed part-time",
      },
      {
        value: "self_employed",
        label: "Self-employed",
      },
      {
        value: "student_only",
        label: "Student only",
      },
      {
        value: "unemployed",
        label: "Unemployed",
      },
      {
        value: "intern",
        label: "Intern",
      },
      {
        value: "other",
        label: "Other",
      },
    ],
    order: [
      "employed_full_time",
      "employed_part_time",
      "self_employed",
      "student_only",
      "unemployed",
      "intern",
      "other",
    ],
  },

  q10: {
    category: "Employment",
    title: "Working in Field of Study",
    type: "distribution",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
    order: ["yes", "no"],
    condition: {
      questionId: "q9",
      includes: [
        "employed_full_time",
        "employed_part_time",
        "self_employed",
        "intern",
      ],
    },
  },

  q11: {
    category: "Employment",
    title: "Current Work Description",
    type: "text",
    condition: {
      questionId: "q10",
      equals: "no",
    },
  },

  q12: {
    category: "Employment",
    title: "How Current Job Was Obtained",
    type: "distribution",
    options: [
      {
        value: "university_career_center",
        label: "University career center",
      },
      {
        value: "linkedin",
        label: "LinkedIn",
      },
      {
        value: "friends_or_family",
        label: "Friends or family",
      },
      {
        value: "social_media",
        label: "Social media",
      },
      {
        value: "online_job_websites",
        label: "Online job websites",
      },
      {
        value: "direct_application",
        label: "Direct application",
      },
      {
        value: "internship",
        label: "Internship",
      },
      {
        value: "recruitment_agency",
        label: "Recruitment agency",
      },
      {
        value: "started_own_business",
        label: "Started my own business",
      },
      {
        value: "other",
        label: "Other",
      },
    ],
    order: [
      "university_career_center",
      "linkedin",
      "friends_or_family",
      "social_media",
      "online_job_websites",
      "direct_application",
      "internship",
      "recruitment_agency",
      "started_own_business",
      "other",
    ],
    condition: {
      questionId: "q9",
      includes: [
        "employed_full_time",
        "employed_part_time",
        "self_employed",
        "intern",
      ],
    },
  },


  /*
   * =========================================================
   * LIVING IN TÜRKİYE
   * =========================================================
   */

  q13: {
    category: "Living Experience",
    title: "Length of Time Living in Türkiye",
    type: "distribution",
    options: [
      {
        value: "less_than_1_year",
        label: "Less than 1 year",
      },
      {
        value: "1_2_years",
        label: "1–2 years",
      },
      {
        value: "3_5_years",
        label: "3–5 years",
      },
      {
        value: "more_than_5_years",
        label: "More than 5 years",
      },
    ],
    order: [
      "less_than_1_year",
      "1_2_years",
      "3_5_years",
      "more_than_5_years",
    ],
  },

  q14: {
    category: "Living Experience",
    title: "Overall Experience Rating",
    type: "scale",
    min: 1,
    max: 10,
  },

  q15: {
    category: "Living Experience",
    title: "Satisfaction With Living Conditions",
    type: "grid",

    rows: [
      {
        value: "cost_of_living",
        label: "Cost of living",
      },
      {
        value: "housing",
        label: "Housing",
      },
      {
        value: "transportation",
        label: "Transportation",
      },
      {
        value: "healthcare",
        label: "Healthcare",
      },
      {
        value: "safety",
        label: "Safety",
      },
      {
        value: "education",
        label: "Education",
      },
      {
        value: "employment_opportunities",
        label: "Employment opportunities",
      },
      {
        value: "social_life",
        label: "Social life",
      },
    ],

    columns: [
      {
        value: "very_dissatisfied",
        label: "Very Dissatisfied",
        score: 1,
      },
      {
        value: "dissatisfied",
        label: "Dissatisfied",
        score: 2,
      },
      {
        value: "neutral",
        label: "Neutral",
        score: 3,
      },
      {
        value: "satisfied",
        label: "Satisfied",
        score: 4,
      },
      {
        value: "very_satisfied",
        label: "Very Satisfied",
        score: 5,
      },
    ],
  },


  /*
   * =========================================================
   * FUTURE PLANS
   * =========================================================
   */

  q16: {
    category: "Future Plans",
    title: "Intention to Remain in Türkiye",
    type: "distribution",
    options: [
      {
        value: "yes",
        label: "Yes",
      },
      {
        value: "no",
        label: "No",
      },
      {
        value: "undecided",
        label: "Undecided",
      },
    ],
    order: [
      "yes",
      "no",
      "undecided",
    ],
  },

  q17: {
    category: "Future Plans",
    title: "Reasons for Remaining",
    type: "multiple",
    options: [
      {
        value: "better_employment_opportunities",
        label: "Better employment opportunities",
      },
      {
        value: "further_education",
        label: "Further education",
      },
      {
        value: "business_opportunities",
        label: "Business opportunities",
      },
      {
        value: "family_reasons",
        label: "Family reasons",
      },
      {
        value: "permanent_residency",
        label: "Permanent residency",
      },
      {
        value: "better_quality_of_life",
        label: "Better quality of life",
      },
      {
        value: "other",
        label: "Other",
      },
    ],
    order: [
      "better_employment_opportunities",
      "further_education",
      "business_opportunities",
      "family_reasons",
      "permanent_residency",
      "better_quality_of_life",
      "other",
    ],
    condition: {
      questionId: "q16",
      equals: "yes",
    },
  },

  q18: {
    category: "Future Plans",
    title: "Reasons for Leaving",
    type: "multiple",
    options: [
      {
        value: "better_job_opportunities_elsewhere",
        label: "Better job opportunities elsewhere",
      },
      {
        value: "family_reasons",
        label: "Family reasons",
      },
      {
        value: "economic_conditions",
        label: "Economic conditions",
      },
      {
        value: "immigration_policies",
        label: "Immigration policies",
      },
      {
        value: "personal_preference",
        label: "Personal preference",
      },
      {
        value: "other",
        label: "Other",
      },
    ],
    order: [
      "better_job_opportunities_elsewhere",
      "family_reasons",
      "economic_conditions",
      "immigration_policies",
      "personal_preference",
      "other",
    ],
    condition: {
      questionId: "q16",
      equals: "no",
    },
  },


  /*
   * =========================================================
   * CHALLENGES
   * =========================================================
   */

  q19: {
    category: "Challenges",
    title: "Challenges Experienced",
    type: "multiple",
    options: [
      {
        value: "language_barrier",
        label: "Language barrier",
      },
      {
        value: "difficulty_finding_employment",
        label: "Difficulty finding employment",
      },
      {
        value: "cost_of_living",
        label: "Cost of living",
      },
      {
        value: "housing",
        label: "Housing",
      },
      {
        value: "visa_or_residence_permit_issues",
        label: "Visa or residence permit issues",
      },
      {
        value: "healthcare_access",
        label: "Healthcare access",
      },
      {
        value: "other",
        label: "Other",
      },
    ],
    order: [
      "language_barrier",
      "difficulty_finding_employment",
      "cost_of_living",
      "housing",
      "visa_or_residence_permit_issues",
      "healthcare_access",
      "other",
    ],
  },


  /*
   * =========================================================
   * ISOC PROGRAM
   * =========================================================
   */

  q20: {
    category: "ISOC Program",
    title: "Previously Attended ISOC Program",
    type: "distribution",
    options: [
      {
        value: "yes",
        label: "Yes",
      },
      {
        value: "no",
        label: "No",
      },
    ],
    order: ["yes", "no"],
  },

  q21: {
    category: "ISOC Program",
    title: "ISOC Program Experience",
    type: "text",
    condition: {
      questionId: "q20",
      equals: "yes",
    },
  },

  q22: {
    category: "ISOC Program",
    title: "Suggestions for ISOC Program",
    type: "text",
    condition: {
      questionId: "q20",
      equals: "yes",
    },
  },


  /*
   * =========================================================
   * FINAL COMMENTS
   * =========================================================
   */

  q23: {
    category: "Recommendations",
    title: "Recommendations for Students and Residents",
    type: "text",
  },
};


export default questionMetadata;