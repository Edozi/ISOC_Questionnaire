const questionnaire = {
  title: "Living and Thriving in İzmir",
  description:
    "This questionnaire explores the experiences, challenges, and future plans of individuals living and studying in İzmir, Türkiye.",

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
            "Under 18",
            "18–24",
            "25–34",
            "35–44",
            "45–54",
            "55 years and above",
          ],
        },
        {
          id: "q3",
          type: "single-choice",
          question: "What is your gender?",
          required: true,
          options: [
            "Male",
            "Female",
            "Prefer not to say",
            "Other",
          ],
        },
        {
          id: "q4",
          type: "single-choice",
          question: "Are you currently living in İzmir, Türkiye?",
          required: true,
          options: ["Yes", "No"],
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
          question: "What is your current education status?",
          required: true,
          options: [
            "Current undergraduate student",
            "Current master's student",
            "Current PhD student",
            "Graduate",
            "Not currently studying",
            "Other",
          ],
        },
        {
          id: "q6",
          type: "single-choice",
          question: "What is your highest level of education?",
          required: true,
          options: [
            "High School",
            "Diploma",
            "Bachelor's Degree",
            "Master's Degree",
            "Doctorate (PhD)",
            "Other",
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
          question: "What is your current employment status?",
          required: true,
          options: [
            "Employed full-time",
            "Employed part-time",
            "Self-employed",
            "Student only",
            "Unemployed",
            "Intern",
            "Other",
          ],
        },
        {
          id: "q10",
          type: "single-choice",
          question:
            "Are you currently working in your field of study?",
          required: true,
          options: ["Yes", "No", "Not applicable"],
        },
        {
          id: "q11",
          type: "short-answer",
          question:
            'If you answered "No," what type of work are you currently doing?',
          description: "Please briefly describe your current work.",
          required: false,

          condition: {
            questionId: "q10",
            equals: "No",
          },
        },
        {
          id: "q12",
          type: "single-choice",
          question: "How did you obtain your current job?",
          required: true,
          options: [
            "University career center",
            "LinkedIn",
            "Friends or family",
            "Social media",
            "Online job websites",
            "Direct application",
            "Internship",
            "Recruitment agency",
            "Started my own business",
            "Other",
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
          question: "How long have you lived in Türkiye?",
          required: true,
          options: [
            "Less than 1 year",
            "1–2 years",
            "3–5 years",
            "More than 5 years",
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
            "Cost of living",
            "Housing",
            "Transportation",
            "Healthcare",
            "Safety",
            "Education",
            "Employment opportunities",
            "Social life",
          ],
          columns: [
            "Very Dissatisfied",
            "Dissatisfied",
            "Neutral",
            "Satisfied",
            "Very Satisfied",
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
            "Do you intend to remain in Türkiye after completing your studies?",
          required: true,
          options: ["Yes", "No", "Undecided"],
        },
        {
          id: "q17",
          type: "multiple-choice",
          question: "If YES, what are your reasons?",
          description: "Select all that apply.",
          required: false,
          options: [
            "Better employment opportunities",
            "Further education",
            "Business opportunities",
            "Family reasons",
            "Permanent residency",
            "Better quality of life",
            "Other",
          ],

          condition: {
            questionId: "q16",
            equals: "Yes",
          },
        },
        {
          id: "q18",
          type: "multiple-choice",
          question: "If NO, what are your reasons?",
          description: "Select all that apply.",
          required: false,
          options: [
            "Better job opportunities elsewhere",
            "Family reasons",
            "Economic conditions",
            "Immigration policies",
            "Personal preference",
            "Other",
          ],

          condition: {
            questionId: "q16",
            equals: "No",
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
            "Language barrier",
            "Difficulty finding employment",
            "Cost of living",
            "Housing",
            "Visa or residence permit issues",
            "Healthcare access",
            "Other",
          ],
        },
      ],
    },

    {
      id: "final-comments",
      title: "Final Comments",
      questions: [
        {
          id: "q20",
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