const questionnaire = {
title: "Vivre et s'épanouir à İzmir",

sections: [
{
id: "participant-information",
title: "Informations sur le participant",
questions: [
{
id: "q1",
type: "short-answer",
question: "Quelle est votre nationalité ?",
required: true,
},

    {
      id: "q2",
      type: "single-choice",
      question: "À quelle tranche d'âge appartenez-vous ?",
      required: true,
      options: [
        {
          value: "under_18",
          label: "Moins de 18 ans",
        },
        {
          value: "18_24",
          label: "18–24 ans",
        },
        {
          value: "25_34",
          label: "25–34 ans",
        },
        {
          value: "35_44",
          label: "35–44 ans",
        },
        {
          value: "45_54",
          label: "45–54 ans",
        },
        {
          value: "55_plus",
          label: "55 ans et plus",
        },
      ],
    },

    {
      id: "q3",
      type: "single-choice",
      question: "Quel est votre genre ?",
      required: true,
      options: [
        {
          value: "male",
          label: "Homme",
        },
        {
          value: "female",
          label: "Femme",
        },
        {
          value: "prefer_not_to_say",
          label: "Je préfère ne pas répondre",
        },
        {
          value: "other",
          label: "Autre",
        },
      ],
    },

    {
      id: "q4",
      type: "single-choice",
      question:
        "Vivez-vous actuellement à İzmir, en Turquie ?",
      required: true,
      options: [
        {
          value: "yes",
          label: "Oui",
        },
        {
          value: "no",
          label: "Non",
        },
      ],
    },
  ],
},

{
  id: "educational-background",
  title: "Parcours éducatif",
  questions: [
    {
      id: "q5",
      type: "single-choice",
      question:
        "Quelle est votre situation actuelle en matière d'études ?",
      required: true,
      options: [
        {
          value: "undergraduate_student",
          label: "Étudiant(e) en licence",
        },
        {
          value: "masters_student",
          label: "Étudiant(e) en master",
        },
        {
          value: "phd_student",
          label: "Doctorant(e)",
        },
        {
          value: "graduate",
          label: "Diplômé(e)",
        },
        {
          value: "not_currently_studying",
          label: "Je ne suis pas actuellement en études",
        },
        {
          value: "other",
          label: "Autre",
        },
      ],
    },

    {
      id: "q6",
      type: "single-choice",
      question:
        "Quel est votre niveau d'études le plus élevé ?",
      required: true,
      options: [
        {
          value: "high_school",
          label: "Lycée",
        },
        {
          value: "diploma",
          label: "Diplôme",
        },
        {
          value: "bachelors_degree",
          label: "Licence / Bachelor",
        },
        {
          value: "masters_degree",
          label: "Master",
        },
        {
          value: "doctorate",
          label: "Doctorat (PhD)",
        },
        {
          value: "other",
          label: "Autre",
        },
      ],
    },

    {
      id: "q7",
      type: "short-answer",
      question: "Quel est votre domaine d'études ?",
      required: true,
    },

    {
      id: "q8",
      type: "short-answer",
      question:
        "De quelle université ou institution êtes-vous diplômé(e) ou dans laquelle étudiez-vous actuellement ?",
      required: true,
    },
  ],
},

{
  id: "employment-information",
  title: "Situation professionnelle",
  questions: [
    {
      id: "q9",
      type: "single-choice",
      question:
        "Quelle est votre situation professionnelle actuelle ?",
      required: true,
      options: [
        {
          value: "employed_full_time",
          label: "Employé(e) à temps plein",
        },
        {
          value: "employed_part_time",
          label: "Employé(e) à temps partiel",
        },
        {
          value: "self_employed",
          label: "Travailleur indépendant",
        },
        {
          value: "student_only",
          label: "Étudiant(e) uniquement",
        },
        {
          value: "unemployed",
          label: "Sans emploi",
        },
        {
          value: "intern",
          label: "Stagiaire",
        },
        {
          value: "other",
          label: "Autre",
        },
      ],
    },

    {
      id: "q10",
      type: "single-choice",
      question:
        "Travaillez-vous actuellement dans votre domaine d'études ?",
      required: true,
      options: [
        {
          value: "yes",
          label: "Oui",
        },
        {
          value: "no",
          label: "Non",
        },
        {
          value: "not_applicable",
          label: "Sans objet",
        },
      ],
    },

    {
      id: "q11",
      type: "short-answer",
      question:
        'Si vous avez répondu « Non », quel type de travail exercez-vous actuellement ?',
      description:
        "Veuillez décrire brièvement votre travail actuel.",
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
        "Comment avez-vous obtenu votre emploi actuel ?",
      required: true,
      options: [
        {
          value: "university_career_center",
          label: "Centre de carrière de l'université",
        },
        {
          value: "linkedin",
          label: "LinkedIn",
        },
        {
          value: "friends_or_family",
          label: "Amis ou famille",
        },
        {
          value: "social_media",
          label: "Réseaux sociaux",
        },
        {
          value: "online_job_websites",
          label: "Sites d'emploi en ligne",
        },
        {
          value: "direct_application",
          label: "Candidature directe",
        },
        {
          value: "internship",
          label: "Stage",
        },
        {
          value: "recruitment_agency",
          label: "Agence de recrutement",
        },
        {
          value: "started_own_business",
          label: "Création de ma propre entreprise",
        },
        {
          value: "other",
          label: "Autre",
        },
      ],
    },
  ],
},

{
  id: "living-in-turkiye",
  title: "Vivre en Turquie",
  questions: [
    {
      id: "q13",
      type: "single-choice",
      question:
        "Depuis combien de temps vivez-vous en Turquie ?",
      required: true,
      options: [
        {
          value: "less_than_1_year",
          label: "Moins d'un an",
        },
        {
          value: "1_2_years",
          label: "1–2 ans",
        },
        {
          value: "3_5_years",
          label: "3–5 ans",
        },
        {
          value: "more_than_5_years",
          label: "Plus de 5 ans",
        },
      ],
    },

    {
      id: "q14",
      type: "linear-scale",
      question:
        "Sur une échelle de 1 à 10, comment évalueriez-vous votre expérience globale de vie en Turquie ?",
      required: true,
      min: 1,
      max: 10,
      minLabel: "Très mauvaise",
      maxLabel: "Excellente",
    },

    {
      id: "q15",
      type: "multiple-choice-grid",
      question:
        "Veuillez indiquer votre niveau de satisfaction concernant les aspects suivants de la vie en Turquie.",
      required: true,

      rows: [
        {
          value: "cost_of_living",
          label: "Coût de la vie",
        },
        {
          value: "housing",
          label: "Logement",
        },
        {
          value: "transportation",
          label: "Transports",
        },
        {
          value: "healthcare",
          label: "Soins de santé",
        },
        {
          value: "safety",
          label: "Sécurité",
        },
        {
          value: "education",
          label: "Éducation",
        },
        {
          value: "employment_opportunities",
          label: "Possibilités d'emploi",
        },
        {
          value: "social_life",
          label: "Vie sociale",
        },
      ],

      columns: [
        {
          value: "very_dissatisfied",
          label: "Très insatisfait(e)",
        },
        {
          value: "dissatisfied",
          label: "Insatisfait(e)",
        },
        {
          value: "neutral",
          label: "Neutre",
        },
        {
          value: "satisfied",
          label: "Satisfait(e)",
        },
        {
          value: "very_satisfied",
          label: "Très satisfait(e)",
        },
      ],
    },
  ],
},

{
  id: "future-plans",
  title: "Projets d'avenir",
  questions: [
    {
      id: "q16",
      type: "single-choice",
      question:
        "Envisagez-vous de rester en Turquie après avoir terminé vos études ?",
      required: true,
      options: [
        {
          value: "yes",
          label: "Oui",
        },
        {
          value: "no",
          label: "Non",
        },
        {
          value: "undecided",
          label: "Indécis(e)",
        },
      ],
    },

    {
      id: "q17",
      type: "multiple-choice",
      question:
        "Si OUI, quelles sont vos raisons ?",
      description:
        "Sélectionnez toutes les réponses qui s'appliquent.",
      required: false,

      options: [
        {
          value: "better_employment_opportunities",
          label: "De meilleures possibilités d'emploi",
        },
        {
          value: "further_education",
          label: "Poursuivre mes études",
        },
        {
          value: "business_opportunities",
          label: "Opportunités commerciales",
        },
        {
          value: "family_reasons",
          label: "Raisons familiales",
        },
        {
          value: "permanent_residency",
          label: "Résidence permanente",
        },
        {
          value: "better_quality_of_life",
          label: "Meilleure qualité de vie",
        },
        {
          value: "other",
          label: "Autre",
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
        "Si NON, quelles sont vos raisons ?",
      description:
        "Sélectionnez toutes les réponses qui s'appliquent.",
      required: false,

      options: [
        {
          value: "better_job_opportunities_elsewhere",
          label: "De meilleures possibilités d'emploi ailleurs",
        },
        {
          value: "family_reasons",
          label: "Raisons familiales",
        },
        {
          value: "economic_conditions",
          label: "Conditions économiques",
        },
        {
          value: "immigration_policies",
          label: "Politiques d'immigration",
        },
        {
          value: "personal_preference",
          label: "Préférence personnelle",
        },
        {
          value: "other",
          label: "Autre",
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
  title: "Défis rencontrés",
  questions: [
    {
      id: "q19",
      type: "multiple-choice",
      question:
        "Quels défis avez-vous rencontrés en vivant en Turquie ?",
      description:
        "Sélectionnez toutes les réponses qui s'appliquent.",
      required: true,

      options: [
        {
          value: "language_barrier",
          label: "Barrière linguistique",
        },
        {
          value: "difficulty_finding_employment",
          label: "Difficulté à trouver un emploi",
        },
        {
          value: "cost_of_living",
          label: "Coût de la vie",
        },
        {
          value: "housing",
          label: "Logement",
        },
        {
          value: "visa_or_residence_permit_issues",
          label: "Problèmes de visa ou de permis de séjour",
        },
        {
          value: "healthcare_access",
          label: "Accès aux soins de santé",
        },
        {
          value: "other",
          label: "Autre",
        },
      ],
    },
  ],
},

{
  id: "final-comments",
  title: "Commentaires finaux",
  questions: [
    {
      id: "q20",
      type: "long-answer",
      question:
        "Quelles recommandations feriez-vous pour améliorer l'expérience des étudiants et des résidents vivant à İzmir, en Turquie ?",
      description:
        "Veuillez partager vos suggestions ou recommandations.",
      required: false,
    },
  ],
},

],
};

export default questionnaire;