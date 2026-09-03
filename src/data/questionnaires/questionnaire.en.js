const questionnaire = {
title: "Living and Thriving in İzmir",

sections: [
{
id: "participant-information",
title: "Participant Information",
questions: [
{
id: "q1",
type: "short-answer",
question: "What is your nationality?",
required: true,
},

    {
      id: "q2",
      type: "single-choice",
      question: "What is your age group?",
      required: true,
      options: [
        {
          value: "under_18",
          label: "Under 18",
        },
        {
          value: "18_24",
          label: "18–24",
        },
        {
          value: "25_34",
          label: "25–34",
        },
        {
          value: "35_44",
          label: "35–44",
        },
        {
          value: "45_54",
          label: "45–54",
        },
        {
          value: "55_plus",
          label: "55 years and above",
        },
      ],
    },

    {
      id: "q3",
      type: "single-choice",
      question: "What is your gender?",
      required: true,
      options: [
        {
          value: "male",
          label: "Male",
        },
        {
          value: "female",
          label: "Female",
        },
        {
          value: "prefer_not_to_say",
          label: "Prefer not to say",
        },
        {
          value: "other",
          label: "Other",
        },
      ],
    },

    {
      id: "q4",
      type: "single-choice",
      question:
        "Are you currently living in İzmir, Türkiye?",
      required: true,
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
    },
  ],
},

{
  id: "educational-background",
  title: "Educational Background",
  questions: [
    {
      id: "q5",
      type: "single-choice",
      question:
        "What is your current education status?",
      required: true,
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
    },

    {
      id: "q6",
      type: "single-choice",
      question:
        "What is your highest level of education?",
      required: true,
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
    },

    {
      id: "q7",
      type: "short-answer",
      question: "What is your field of study?",
      required: true,
    },

    {
      id: "q8",
      type: "short-answer",
      question:
        "Which university or institution did you graduate from or are currently attending?",
      required: true,
    },
  ],
},

{
  id: "employment-information",
  title: "Employment Information",
  questions: [
    {
      id: "q9",
      type: "single-choice",
      question:
        "What is your current employment status?",
      required: true,
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
    },

    {
      id: "q10",
      type: "single-choice",
      question:
        "Are you currently working in your field of study?",
      required: true,

      condition: {
        questionId: "q9",
        includes: [
          "employed_full_time",
          "employed_part_time",
          "self_employed",
          "intern",
        ],
      },

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
    },

    {
      id: "q11",
      type: "short-answer",
      question:
        'If you answered "No," what type of work are you currently doing?',
      description:
        "Please briefly describe your current work.",
      required: false,

      condition: {
        questionId: "q10",
        equals: "no",
      },
    },

    {
      id: "q12",
      type: "single-choice",
      question:
        "How did you obtain your current job?",
      required: true,

      condition: {
        questionId: "q9",
        includes: [
          "employed_full_time",
          "employed_part_time",
          "self_employed",
          "intern",
        ],
      },

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
    },
  ],
},

{
  id: "living-in-turkiye",
  title: "Living in Türkiye",
  questions: [
    {
      id: "q13",
      type: "single-choice",
      question:
        "How long have you lived in Türkiye?",
      required: true,
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
    },

    {
      id: "q14",
      type: "linear-scale",
      question:
        "On a scale of 1–10, how would you rate your overall experience living in Türkiye?",
      required: true,
      min: 1,
      max: 10,
      minLabel: "Very Poor",
      maxLabel: "Excellent",
    },

    {
      id: "q15",
      type: "multiple-choice-grid",
      question:
        "Please indicate your level of satisfaction with the following aspects of living in Türkiye.",
      required: true,

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
        },
        {
          value: "dissatisfied",
          label: "Dissatisfied",
        },
        {
          value: "neutral",
          label: "Neutral",
        },
        {
          value: "satisfied",
          label: "Satisfied",
        },
        {
          value: "very_satisfied",
          label: "Very Satisfied",
        },
      ],
    },
  ],
},

{
  id: "future-plans",
  title: "Future Plans",
  questions: [
    {
      id: "q16",
      type: "single-choice",
      question:
        "Do you intend to remain in Türkiye in the future?",
      required: true,
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
    },

    {
      id: "q17",
      type: "multiple-choice",
      question:
        "If YES, what are your reasons?",
      description: "Select all that apply.",
      required: false,

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

      condition: {
        questionId: "q16",
        equals: "yes",
      },
    },

    {
      id: "q18",
      type: "multiple-choice",
      question:
        "If NO, what are your reasons?",
      description: "Select all that apply.",
      required: false,

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

      condition: {
        questionId: "q16",
        equals: "no",
      },
    },
  ],
},

{
  id: "challenges",
  title: "Challenges",
  questions: [
    {
      id: "q19",
      type: "multiple-choice",
      question:
        "What challenges have you experienced while living in Türkiye?",
      description: "Select all that apply.",
      required: true,

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
    },
  ],
},

{
  id: "isoc-program",
  title: "ISOC Program",
  questions: [
    {
      id: "q20",
      type: "single-choice",
      question:
        "Have you previously attended the ISOC program?",
      required: true,
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
    },

    {
      id: "q21",
      type: "long-answer",
      question:
        "How would you describe your experience with the ISOC program?",
      description:
        "Please share what you found valuable and any areas you believe could be improved.",
      required: true,

      condition: {
        questionId: "q20",
        equals: "yes",
      },
    },

    {
      id: "q22",
      type: "long-answer",
      question:
        "What suggestions do you have for the upcoming version of the ISOC program?",
      description:
        "Please share any ideas or recommendations that could improve the next version of the program.",
      required: true,

      condition: {
        questionId: "q20",
        equals: "yes",
      },
    },
  ],
},

{
  id: "final-comments",
  title: "Final Comments",
  questions: [
    {
      id: "q23",
      type: "long-answer",
      question:
        "What recommendations would you make to improve the experience of students and residents living in İzmir, Türkiye?",
      description:
        "Please share any suggestions or recommendations you may have.",
      required: false,
    },
  ],
},

],
};

export default questionnaire;