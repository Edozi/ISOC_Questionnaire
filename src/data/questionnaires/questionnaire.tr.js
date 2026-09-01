const questionnaire = {
title: "İzmir'de Yaşamak ve Gelişmek",

sections: [
{
id: "participant-information",
title: "Katılımcı Bilgileri",
questions: [
{
id: "q1",
type: "short-answer",
question: "Uyruğunuz nedir?",
required: true,
},

    {
      id: "q2",
      type: "single-choice",
      question: "Hangi yaş grubundasınız?",
      required: true,
      options: [
        {
          value: "under_18",
          label: "18 yaş altı",
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
          label: "55 yaş ve üzeri",
        },
      ],
    },

    {
      id: "q3",
      type: "single-choice",
      question: "Cinsiyetiniz nedir?",
      required: true,
      options: [
        {
          value: "male",
          label: "Erkek",
        },
        {
          value: "female",
          label: "Kadın",
        },
        {
          value: "prefer_not_to_say",
          label: "Belirtmek istemiyorum",
        },
        {
          value: "other",
          label: "Diğer",
        },
      ],
    },

    {
      id: "q4",
      type: "single-choice",
      question: "Şu anda İzmir, Türkiye'de mi yaşıyorsunuz?",
      required: true,
      options: [
        {
          value: "yes",
          label: "Evet",
        },
        {
          value: "no",
          label: "Hayır",
        },
      ],
    },
  ],
},

{
  id: "educational-background",
  title: "Eğitim Geçmişi",
  questions: [
    {
      id: "q5",
      type: "single-choice",
      question: "Mevcut eğitim durumunuz nedir?",
      required: true,
      options: [
        {
          value: "undergraduate_student",
          label: "Lisans öğrencisi",
        },
        {
          value: "masters_student",
          label: "Yüksek lisans öğrencisi",
        },
        {
          value: "phd_student",
          label: "Doktora öğrencisi",
        },
        {
          value: "graduate",
          label: "Mezun",
        },
        {
          value: "not_currently_studying",
          label: "Şu anda eğitim almıyorum",
        },
        {
          value: "other",
          label: "Diğer",
        },
      ],
    },

    {
      id: "q6",
      type: "single-choice",
      question: "En yüksek eğitim seviyeniz nedir?",
      required: true,
      options: [
        {
          value: "high_school",
          label: "Lise",
        },
        {
          value: "diploma",
          label: "Diploma",
        },
        {
          value: "bachelors_degree",
          label: "Lisans",
        },
        {
          value: "masters_degree",
          label: "Yüksek lisans",
        },
        {
          value: "doctorate",
          label: "Doktora (PhD)",
        },
        {
          value: "other",
          label: "Diğer",
        },
      ],
    },

    {
      id: "q7",
      type: "short-answer",
      question: "Eğitim alanınız nedir?",
      required: true,
    },

    {
      id: "q8",
      type: "short-answer",
      question:
        "Mezun olduğunuz veya şu anda öğrenim gördüğünüz üniversite ya da kurum hangisidir?",
      required: true,
    },
  ],
},

{
  id: "employment-information",
  title: "İstihdam Bilgileri",
  questions: [
    {
      id: "q9",
      type: "single-choice",
      question: "Mevcut çalışma durumunuz nedir?",
      required: true,
      options: [
        {
          value: "employed_full_time",
          label: "Tam zamanlı çalışıyorum",
        },
        {
          value: "employed_part_time",
          label: "Yarı zamanlı çalışıyorum",
        },
        {
          value: "self_employed",
          label: "Serbest çalışıyorum / kendi hesabıma çalışıyorum",
        },
        {
          value: "student_only",
          label: "Yalnızca öğrenciyim",
        },
        {
          value: "unemployed",
          label: "Çalışmıyorum",
        },
        {
          value: "intern",
          label: "Stajyerim",
        },
        {
          value: "other",
          label: "Diğer",
        },
      ],
    },

    {
      id: "q10",
      type: "single-choice",
      question: "Şu anda eğitim alanınızda mı çalışıyorsunuz?",
      required: true,
      options: [
        {
          value: "yes",
          label: "Evet",
        },
        {
          value: "no",
          label: "Hayır",
        },
        {
          value: "not_applicable",
          label: "Uygulanamaz",
        },
      ],
    },

    {
      id: "q11",
      type: "short-answer",
      question:
        ' "Hayır" yanıtını verdiyseniz, şu anda ne tür bir iş yapıyorsunuz?',
      description:
        "Lütfen mevcut işinizi kısaca açıklayın.",
      required: false,
      condition: {
        questionId: "q10",
        equals: "no",
      },
    },

    {
      id: "q12",
      type: "single-choice",
      question: "Mevcut işinizi nasıl buldunuz?",
      required: true,
      options: [
        {
          value: "university_career_center",
          label: "Üniversitenin kariyer merkezi",
        },
        {
          value: "linkedin",
          label: "LinkedIn",
        },
        {
          value: "friends_or_family",
          label: "Arkadaşlar veya aile",
        },
        {
          value: "social_media",
          label: "Sosyal medya",
        },
        {
          value: "online_job_websites",
          label: "Çevrim içi iş ilanı siteleri",
        },
        {
          value: "direct_application",
          label: "Doğrudan başvuru",
        },
        {
          value: "internship",
          label: "Staj",
        },
        {
          value: "recruitment_agency",
          label: "İşe alım / insan kaynakları ajansı",
        },
        {
          value: "started_own_business",
          label: "Kendi işimi kurdum",
        },
        {
          value: "other",
          label: "Diğer",
        },
      ],
    },
  ],
},

{
  id: "living-in-turkiye",
  title: "Türkiye'de Yaşam",
  questions: [
    {
      id: "q13",
      type: "single-choice",
      question: "Ne kadar süredir Türkiye'de yaşıyorsunuz?",
      required: true,
      options: [
        {
          value: "less_than_1_year",
          label: "1 yıldan az",
        },
        {
          value: "1_2_years",
          label: "1–2 yıl",
        },
        {
          value: "3_5_years",
          label: "3–5 yıl",
        },
        {
          value: "more_than_5_years",
          label: "5 yıldan fazla",
        },
      ],
    },

    {
      id: "q14",
      type: "linear-scale",
      question:
        "Türkiye'de yaşama deneyiminizi 1–10 arasında nasıl değerlendirirsiniz?",
      required: true,
      min: 1,
      max: 10,
      minLabel: "Çok kötü",
      maxLabel: "Mükemmel",
    },

    {
      id: "q15",
      type: "multiple-choice-grid",
      question:
        "Lütfen Türkiye'de yaşamın aşağıdaki yönlerinden ne kadar memnun olduğunuzu belirtin.",
      required: true,

      rows: [
        {
          value: "cost_of_living",
          label: "Yaşam maliyeti",
        },
        {
          value: "housing",
          label: "Konut",
        },
        {
          value: "transportation",
          label: "Ulaşım",
        },
        {
          value: "healthcare",
          label: "Sağlık hizmetleri",
        },
        {
          value: "safety",
          label: "Güvenlik",
        },
        {
          value: "education",
          label: "Eğitim",
        },
        {
          value: "employment_opportunities",
          label: "İstihdam olanakları",
        },
        {
          value: "social_life",
          label: "Sosyal yaşam",
        },
      ],

      columns: [
        {
          value: "very_dissatisfied",
          label: "Hiç memnun değilim",
        },
        {
          value: "dissatisfied",
          label: "Memnun değilim",
        },
        {
          value: "neutral",
          label: "Kararsızım",
        },
        {
          value: "satisfied",
          label: "Memnunum",
        },
        {
          value: "very_satisfied",
          label: "Çok memnunum",
        },
      ],
    },
  ],
},

{
  id: "future-plans",
  title: "Gelecek Planları",
  questions: [
    {
      id: "q16",
      type: "single-choice",
      question:
        "Eğitiminizi tamamladıktan sonra Türkiye'de kalmayı düşünüyor musunuz?",
      required: true,
      options: [
        {
          value: "yes",
          label: "Evet",
        },
        {
          value: "no",
          label: "Hayır",
        },
        {
          value: "undecided",
          label: "Kararsızım",
        },
      ],
    },

    {
      id: "q17",
      type: "multiple-choice",
      question: "EVET ise, nedenleriniz nelerdir?",
      description: "Uygun olan tüm seçenekleri işaretleyin.",
      required: false,

      options: [
        {
          value: "better_employment_opportunities",
          label: "Daha iyi istihdam olanakları",
        },
        {
          value: "further_education",
          label: "Eğitime devam etmek",
        },
        {
          value: "business_opportunities",
          label: "İş / girişimcilik fırsatları",
        },
        {
          value: "family_reasons",
          label: "Aile nedenleri",
        },
        {
          value: "permanent_residency",
          label: "Kalıcı oturum izni",
        },
        {
          value: "better_quality_of_life",
          label: "Daha iyi yaşam kalitesi",
        },
        {
          value: "other",
          label: "Diğer",
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
      question: "HAYIR ise, nedenleriniz nelerdir?",
      description: "Uygun olan tüm seçenekleri işaretleyin.",
      required: false,

      options: [
        {
          value: "better_job_opportunities_elsewhere",
          label: "Başka yerlerde daha iyi iş fırsatları",
        },
        {
          value: "family_reasons",
          label: "Aile nedenleri",
        },
        {
          value: "economic_conditions",
          label: "Ekonomik koşullar",
        },
        {
          value: "immigration_policies",
          label: "Göç / göçmenlik politikaları",
        },
        {
          value: "personal_preference",
          label: "Kişisel tercih",
        },
        {
          value: "other",
          label: "Diğer",
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
  title: "Karşılaşılan Zorluklar",
  questions: [
    {
      id: "q19",
      type: "multiple-choice",
      question:
        "Türkiye'de yaşarken hangi zorluklarla karşılaştınız?",
      description: "Uygun olan tüm seçenekleri işaretleyin.",
      required: true,

      options: [
        {
          value: "language_barrier",
          label: "Dil engeli",
        },
        {
          value: "difficulty_finding_employment",
          label: "İş bulma zorluğu",
        },
        {
          value: "cost_of_living",
          label: "Yaşam maliyeti",
        },
        {
          value: "housing",
          label: "Konut",
        },
        {
          value: "visa_or_residence_permit_issues",
          label: "Vize veya oturum izni sorunları",
        },
        {
          value: "healthcare_access",
          label: "Sağlık hizmetlerine erişim",
        },
        {
          value: "other",
          label: "Diğer",
        },
      ],
    },
  ],
},

{
  id: "final-comments",
  title: "Son Görüşler",
  questions: [
    {
      id: "q20",
      type: "long-answer",
      question:
        "İzmir, Türkiye'de yaşayan öğrencilerin ve diğer sakinlerin deneyimlerini iyileştirmek için ne gibi önerilerde bulunursunuz?",
      description:
        "Lütfen sahip olduğunuz öneri veya düşünceleri paylaşın.",
      required: false,
    },
  ],
},

],
};

export default questionnaire;