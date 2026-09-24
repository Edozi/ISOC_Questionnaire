const registrationTranslations = {
  en: {
    brand: "ISOC",
    title: "Register for ISOC",
    subtitle:
      "Join us for the International Student Orientation Camp and be part of the experience.",

    fields: {
      name: {
        label: "Name",
        placeholder: "Enter your name",
      },
      surname: {
        label: "Surname",
        placeholder: "Enter your surname",
      },
      email: {
        label: "Email Address",
        placeholder: "Enter your email address",
      },
      gender: {
        label: "Gender",
        placeholder: "Select your gender",
      },
      country: {
        label: "Country of Origin",
        placeholder: "Select your country",
      },
      university: {
        label: "University",
        placeholder: "Enter your university",
      },
      education: {
        label: "Current Education Level",
        placeholder: "Select your education level",
      },
    },

    genderOptions: [
      { value: "female", label: "Female" },
      { value: "male", label: "Male" },
      { value: "non-binary", label: "Non-binary" },
      { value: "prefer-not-to-say", label: "Prefer not to say" },
    ],

    educationOptions: [
      { value: "not-enrolled", label: "Not currently enrolled" },
      { value: "high-school", label: "High School" },
      { value: "associate", label: "Associate Degree" },
      { value: "bachelors", label: "Bachelor's Degree" },
      { value: "masters", label: "Master's Degree" },
      { value: "phd", label: "PhD" },
      { value: "other", label: "Other" },
    ],

    optional: "Optional",
    required: "Required",

    submit: "Register",
    note: "Your information will be used only for event registration purposes.",

    legal: {
        beforeTerms: "I have read and agree to the",
        terms: "Terms & Conditions",
        between: "and I acknowledge the",
        privacy: "Privacy Notice",
    },
  },

  tr: {
    brand: "ISOC",
    title: "ISOC'ye Kayıt Ol",
    subtitle:
      "Uluslararası Öğrenci Oryantasyon Kampı'na katılın ve bu deneyimin bir parçası olun.",

    fields: {
      name: {
        label: "Ad",
        placeholder: "Adınızı girin",
      },
      surname: {
        label: "Soyad",
        placeholder: "Soyadınızı girin",
      },
      email: {
        label: "E-posta Adresi",
        placeholder: "E-posta adresinizi girin",
      },
      gender: {
        label: "Cinsiyet",
        placeholder: "Cinsiyetinizi seçin",
      },
      country: {
        label: "Uyruk / Menşe Ülke",
        placeholder: "Ülkenizi seçin",
      },
      university: {
        label: "Üniversite",
        placeholder: "Üniversitenizi girin",
      },
      education: {
        label: "Mevcut Eğitim Seviyesi",
        placeholder: "Eğitim seviyenizi seçin",
      },
    },

    genderOptions: [
      { value: "female", label: "Kadın" },
      { value: "male", label: "Erkek" },
      { value: "non-binary", label: "Non-binary" },
      { value: "prefer-not-to-say", label: "Belirtmek istemiyorum" },
    ],

    educationOptions: [
      { value: "not-enrolled", label: "Şu anda kayıtlı değilim" },
      { value: "high-school", label: "Lise" },
      { value: "associate", label: "Ön Lisans" },
      { value: "bachelors", label: "Lisans" },
      { value: "masters", label: "Yüksek Lisans" },
      { value: "phd", label: "Doktora" },
      { value: "other", label: "Diğer" },
    ],

    optional: "İsteğe bağlı",
    required: "Zorunlu",

    submit: "Kayıt Ol",
    note:
      "Bilgileriniz yalnızca etkinlik kaydı amacıyla kullanılacaktır.",

    legal: {
        beforeTerms: "",
        terms: "Kullanım Koşullarını",
        between:
            "okudum ve kabul ediyorum; ayrıca",
        privacy:
            "Kişisel Verilerin Korunması Hakkında Aydınlatma Metnini",
    },
  },

  fr: {
    brand: "ISOC",
    title: "Inscrivez-vous à l'ISOC",
    subtitle:
      "Rejoignez-nous pour le Camp d'Orientation des Étudiants Internationaux et participez à l'expérience.",

    fields: {
      name: {
        label: "Prénom",
        placeholder: "Entrez votre prénom",
      },
      surname: {
        label: "Nom",
        placeholder: "Entrez votre nom",
      },
      email: {
        label: "Adresse e-mail",
        placeholder: "Entrez votre adresse e-mail",
      },
      gender: {
        label: "Genre",
        placeholder: "Sélectionnez votre genre",
      },
      country: {
        label: "Pays d'origine",
        placeholder: "Sélectionnez votre pays",
      },
      university: {
        label: "Université",
        placeholder: "Entrez votre université",
      },
      education: {
        label: "Niveau d'études actuel",
        placeholder: "Sélectionnez votre niveau d'études",
      },
    },

    genderOptions: [
      { value: "female", label: "Femme" },
      { value: "male", label: "Homme" },
      { value: "non-binary", label: "Non-binaire" },
      { value: "prefer-not-to-say", label: "Je préfère ne pas répondre" },
    ],

    educationOptions: [
      { value: "not-enrolled", label: "Pas actuellement inscrit(e)" },
      { value: "high-school", label: "Lycée" },
      { value: "associate", label: "Diplôme de niveau associé" },
      { value: "bachelors", label: "Licence" },
      { value: "masters", label: "Master" },
      { value: "phd", label: "Doctorat" },
      { value: "other", label: "Autre" },
    ],

    optional: "Facultatif",
    required: "Obligatoire",

    submit: "S'inscrire",
    note:
      "Vos informations seront utilisées uniquement à des fins d'inscription à l'événement.",

    legal: {
        beforeTerms: "J'ai lu et j'accepte les",
        terms: "Conditions d'utilisation",
        between:
            "et je reconnais avoir pris connaissance de la",
        privacy:
            "Notice de confidentialité",
    },
  },

  ru: {
    brand: "ISOC",
    title: "Регистрация на ISOC",
    subtitle:
      "Присоединяйтесь к Международному студенческому ориентационному лагерю и станьте частью этого события.",

    fields: {
      name: {
        label: "Имя",
        placeholder: "Введите имя",
      },
      surname: {
        label: "Фамилия",
        placeholder: "Введите фамилию",
      },
      email: {
        label: "Адрес электронной почты",
        placeholder: "Введите адрес электронной почты",
      },
      gender: {
        label: "Пол",
        placeholder: "Выберите пол",
      },
      country: {
        label: "Страна происхождения",
        placeholder: "Выберите страну",
      },
      university: {
        label: "Университет",
        placeholder: "Введите название университета",
      },
      education: {
        label: "Текущий уровень образования",
        placeholder: "Выберите уровень образования",
      },
    },

    genderOptions: [
      { value: "female", label: "Женский" },
      { value: "male", label: "Мужской" },
      { value: "non-binary", label: "Небинарный" },
      { value: "prefer-not-to-say", label: "Предпочитаю не указывать" },
    ],

    educationOptions: [
      { value: "not-enrolled", label: "В настоящее время не обучаюсь" },
      { value: "high-school", label: "Среднее образование" },
      { value: "associate", label: "Среднее специальное образование" },
      { value: "bachelors", label: "Бакалавриат" },
      { value: "masters", label: "Магистратура" },
      { value: "phd", label: "Докторантура" },
      { value: "other", label: "Другое" },
    ],

    optional: "Необязательно",
    required: "Обязательно",

    submit: "Зарегистрироваться",
    note:
      "Ваши данные будут использоваться только для регистрации на мероприятие.",

    legal: {
        beforeTerms:
            "Я прочитал(а) и принимаю",
        terms: "Условия использования",
        between:
            "а также подтверждаю, что ознакомился(лась) с",
        privacy:
            "Уведомлением о конфиденциальности",
    },
  },
};

export default registrationTranslations;