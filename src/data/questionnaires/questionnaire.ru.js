const questionnaire = {
title: "Жизнь и развитие в Измире",

sections: [
{
id: "participant-information",
title: "Информация об участнике",
questions: [
{
id: "q1",
type: "short-answer",
question: "Какова ваша национальность?",
required: true,
},
{
id: "q2",
type: "single-choice",
question: "К какой возрастной группе вы относитесь?",
required: true,
options: [
{ value: "under_18", label: "Младше 18 лет" },
{ value: "18_24", label: "18–24 года" },
{ value: "25_34", label: "25–34 года" },
{ value: "35_44", label: "35–44 года" },
{ value: "45_54", label: "45–54 года" },
{ value: "55_plus", label: "55 лет и старше" },
],
},
{
id: "q3",
type: "single-choice",
question: "Ваш пол?",
required: true,
options: [
{ value: "male", label: "Мужской" },
{ value: "female", label: "Женский" },
{ value: "prefer_not_to_say", label: "Предпочитаю не указывать" },
{ value: "other", label: "Другое" },
],
},
{
id: "q4",
type: "single-choice",
question: "Проживаете ли вы сейчас в Измире, Турция?",
required: true,
options: [
{ value: "yes", label: "Да" },
{ value: "no", label: "Нет" },
],
},
],
},

{
  id: "educational-background",
  title: "Образование",
  questions: [
    {
      id: "q5",
      type: "single-choice",
      question: "Каков ваш текущий статус в сфере образования?",
      required: true,
      options: [
        { value: "undergraduate_student", label: "Студент бакалавриата" },
        { value: "masters_student", label: "Студент магистратуры" },
        { value: "phd_student", label: "Аспирант / докторант" },
        { value: "graduate", label: "Выпускник" },
        { value: "not_currently_studying", label: "В настоящее время не учусь" },
        { value: "other", label: "Другое" },
      ],
    },
    {
      id: "q6",
      type: "single-choice",
      question: "Какой у вас самый высокий уровень образования?",
      required: true,
      options: [
        { value: "high_school", label: "Среднее образование" },
        { value: "diploma", label: "Диплом" },
        { value: "bachelors_degree", label: "Степень бакалавра" },
        { value: "masters_degree", label: "Степень магистра" },
        { value: "doctorate", label: "Докторская степень (PhD)" },
        { value: "other", label: "Другое" },
      ],
    },
    {
      id: "q7",
      type: "short-answer",
      question: "Какова ваша специальность или область обучения?",
      required: true,
    },
    {
      id: "q8",
      type: "short-answer",
      question:
        "Какой университет или учебное заведение вы окончили или посещаете в настоящее время?",
      required: true,
    },
  ],
},

{
  id: "employment-information",
  title: "Информация о занятости",
  questions: [
    {
      id: "q9",
      type: "single-choice",
      question: "Каков ваш текущий статус занятости?",
      required: true,
      options: [
        { value: "employed_full_time", label: "Работаю полный рабочий день" },
        { value: "employed_part_time", label: "Работаю неполный рабочий день" },
        { value: "self_employed", label: "Самозанятый / имею собственный бизнес" },
        { value: "student_only", label: "Только студент" },
        { value: "unemployed", label: "Безработный" },
        { value: "intern", label: "Стажёр" },
        { value: "other", label: "Другое" },
      ],
    },
    {
      id: "q10",
      type: "single-choice",
      question:
        "Работаете ли вы в настоящее время в своей области обучения?",
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
        { value: "yes", label: "Да" },
        { value: "no", label: "Нет" },
      ],
    },
    {
      id: "q11",
      type: "short-answer",
      question:
        'Если вы ответили «Нет», какой работой вы занимаетесь в настоящее время?',
      description:
        "Пожалуйста, кратко опишите вашу текущую работу.",
      required: false,
      condition: {
        questionId: "q10",
        equals: "no",
      },
    },
    {
      id: "q12",
      type: "single-choice",
      question: "Как вы получили свою текущую работу?",
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
        { value: "university_career_center", label: "Карьерный центр университета" },
        { value: "linkedin", label: "LinkedIn" },
        { value: "friends_or_family", label: "Друзья или семья" },
        { value: "social_media", label: "Социальные сети" },
        { value: "online_job_websites", label: "Онлайн-сайты поиска работы" },
        { value: "direct_application", label: "Прямая подача заявки" },
        { value: "internship", label: "Через стажировку" },
        { value: "recruitment_agency", label: "Кадровое агентство" },
        { value: "started_own_business", label: "Открыл(а) собственный бизнес" },
        { value: "other", label: "Другое" },
      ],
    },
  ],
},

{
  id: "living-in-turkiye",
  title: "Жизнь в Турции",
  questions: [
    {
      id: "q13",
      type: "single-choice",
      question: "Как долго вы живёте в Турции?",
      required: true,
      options: [
        { value: "less_than_1_year", label: "Менее 1 года" },
        { value: "1_2_years", label: "1–2 года" },
        { value: "3_5_years", label: "3–5 лет" },
        { value: "more_than_5_years", label: "Более 5 лет" },
      ],
    },
    {
      id: "q14",
      type: "linear-scale",
      question:
        "По шкале от 1 до 10, как бы вы оценили свой общий опыт проживания в Турции?",
      required: true,
      min: 1,
      max: 10,
      minLabel: "Очень плохо",
      maxLabel: "Отлично",
    },
    {
      id: "q15",
      type: "multiple-choice-grid",
      question:
        "Пожалуйста, укажите уровень вашей удовлетворённости следующими аспектами жизни в Турции.",
      required: true,
      rows: [
        { value: "cost_of_living", label: "Стоимость жизни" },
        { value: "housing", label: "Жильё" },
        { value: "transportation", label: "Транспорт" },
        { value: "healthcare", label: "Медицинское обслуживание" },
        { value: "safety", label: "Безопасность" },
        { value: "education", label: "Образование" },
        { value: "employment_opportunities", label: "Возможности трудоустройства" },
        { value: "social_life", label: "Социальная жизнь" },
      ],
      columns: [
        { value: "very_dissatisfied", label: "Очень не удовлетворён(а)" },
        { value: "dissatisfied", label: "Не удовлетворён(а)" },
        { value: "neutral", label: "Нейтрально" },
        { value: "satisfied", label: "Удовлетворён(а)" },
        { value: "very_satisfied", label: "Полностью удовлетворён(а)" },
      ],
    },
  ],
},

{
  id: "future-plans",
  title: "Планы на будущее",
  questions: [
    {
      id: "q16",
      type: "single-choice",
      question: "Планируете ли вы оставаться в Турции в будущем?",
      required: true,
      options: [
        { value: "yes", label: "Да" },
        { value: "no", label: "Нет" },
        { value: "undecided", label: "Пока не решил(а)" },
      ],
    },
    {
      id: "q17",
      type: "multiple-choice",
      question: "Если ДА, каковы ваши причины?",
      description: "Выберите все подходящие варианты.",
      required: false,
      options: [
        { value: "better_employment_opportunities", label: "Лучшие возможности трудоустройства" },
        { value: "further_education", label: "Продолжение образования" },
        { value: "business_opportunities", label: "Возможности для бизнеса" },
        { value: "family_reasons", label: "Семейные причины" },
        { value: "permanent_residency", label: "Постоянное проживание" },
        { value: "better_quality_of_life", label: "Лучшее качество жизни" },
        { value: "other", label: "Другое" },
      ],
      condition: {
        questionId: "q16",
        equals: "yes",
      },
    },
    {
      id: "q18",
      type: "multiple-choice",
      question: "Если НЕТ, каковы ваши причины?",
      description: "Выберите все подходящие варианты.",
      required: false,
      options: [
        { value: "better_job_opportunities_elsewhere", label: "Лучшие возможности трудоустройства в другом месте" },
        { value: "family_reasons", label: "Семейные причины" },
        { value: "economic_conditions", label: "Экономические условия" },
        { value: "immigration_policies", label: "Иммиграционная политика" },
        { value: "personal_preference", label: "Личные предпочтения" },
        { value: "other", label: "Другое" },
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
  title: "Трудности",
  questions: [
    {
      id: "q19",
      type: "multiple-choice",
      question:
        "С какими трудностями вы сталкивались, проживая в Турции?",
      description: "Выберите все подходящие варианты.",
      required: true,
      options: [
        { value: "language_barrier", label: "Языковой барьер" },
        { value: "difficulty_finding_employment", label: "Трудности с поиском работы" },
        { value: "cost_of_living", label: "Стоимость жизни" },
        { value: "housing", label: "Жильё" },
        { value: "visa_or_residence_permit_issues", label: "Проблемы с визой или видом на жительство" },
        { value: "healthcare_access", label: "Доступ к медицинским услугам" },
        { value: "other", label: "Другое" },
      ],
    },
  ],
},

{
  id: "isoc-program",
  title: "Программа ISOC",
  questions: [
    {
      id: "q20",
      type: "single-choice",
      question: "Принимали ли вы ранее участие в программе ISOC?",
      required: true,
      options: [
        { value: "yes", label: "Да" },
        { value: "no", label: "Нет" },
      ],
    },
    {
      id: "q21",
      type: "long-answer",
      question:
        "Как бы вы описали свой опыт участия в программе ISOC?",
      description:
        "Расскажите, что было для вас наиболее полезным и какие аспекты, по вашему мнению, можно улучшить.",
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
        "Какие предложения у вас есть для следующей версии программы ISOC?",
      description:
        "Поделитесь своими идеями или рекомендациями по улучшению следующей версии программы.",
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
  title: "Заключительные комментарии",
  questions: [
    {
      id: "q23",
      type: "long-answer",
      question:
        "Какие рекомендации вы могли бы дать для улучшения опыта студентов и жителей, проживающих в Измире, Турция?",
      description:
        "Пожалуйста, поделитесь своими предложениями или рекомендациями.",
      required: false,
    },
  ],
},

],
};

export default questionnaire;