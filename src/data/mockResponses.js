const mockResponses = [
  {
    id: 1,
    language: "en",
    created_at: "2026-09-01T10:30:00Z",

    answers: {
      q1: "Nigeria",
      q2: "18_24",
      q3: "male",
      q4: "yes",

      q5: "undergraduate_student",
      q6: "high_school",

      q7: "Computer Engineering",
      q8: "Ege University",

      q9: "student_only",

      q13: "1_2_years",
      q14: 7,

      q15: {
        cost_of_living: "dissatisfied",
        housing: "neutral",
        transportation: "satisfied",
        healthcare: "satisfied",
        safety: "satisfied",
        education: "very_satisfied",
        employment_opportunities: "neutral",
        social_life: "satisfied",
      },

      q16: "yes",

      q17: [
        "further_education",
        "better_quality_of_life",
      ],

      q19: [
        "language_barrier",
        "cost_of_living",
      ],

      q20: "yes",

      q21:
        "The program was very useful for meeting new people.",

      q22:
        "More technical workshops would be useful.",

      q23:
        "More support services for international students.",
    },
  },

  {
    id: 2,
    language: "tr",
    created_at: "2026-09-02T14:20:00Z",

    answers: {
      q1: "Azerbaijan",
      q2: "25_34",
      q3: "female",
      q4: "yes",

      q5: "masters_student",
      q6: "bachelors_degree",

      q7: "Business Administration",
      q8: "Dokuz Eylül University",

      q9: "employed_part_time",
      q10: "yes",
      q12: "linkedin",

      q13: "3_5_years",
      q14: 8,

      q15: {
        cost_of_living: "dissatisfied",
        housing: "dissatisfied",
        transportation: "very_satisfied",
        healthcare: "satisfied",
        safety: "very_satisfied",
        education: "satisfied",
        employment_opportunities: "neutral",
        social_life: "very_satisfied",
      },

      q16: "undecided",

      q19: [
        "cost_of_living",
        "housing",
      ],

      q20: "no",

      q23:
        "Housing assistance would greatly improve the experience.",
    },
  },
];

export default mockResponses;