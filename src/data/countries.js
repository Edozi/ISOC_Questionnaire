const countries = [
  {
    code: "AF",
    names: {
      en: "Afghanistan",
      tr: "Afganistan",
      fr: "Afghanistan",
      ru: "Афганистан",
    },
  },
  {
    code: "AL",
    names: {
      en: "Albania",
      tr: "Arnavutluk",
      fr: "Albanie",
      ru: "Албания",
    },
  },
  {
    code: "DZ",
    names: {
      en: "Algeria",
      tr: "Cezayir",
      fr: "Algérie",
      ru: "Алжир",
    },
  },
  {
    code: "AD",
    names: {
      en: "Andorra",
      tr: "Andorra",
      fr: "Andorre",
      ru: "Андорра",
    },
  },
  {
    code: "AO",
    names: {
      en: "Angola",
      tr: "Angola",
      fr: "Angola",
      ru: "Ангола",
    },
  },
  {
    code: "AG",
    names: {
      en: "Antigua and Barbuda",
      tr: "Antigua ve Barbuda",
      fr: "Antigua-et-Barbuda",
      ru: "Антигуа и Барбуда",
    },
  },
  {
    code: "AR",
    names: {
      en: "Argentina",
      tr: "Arjantin",
      fr: "Argentine",
      ru: "Аргентина",
    },
  },
  {
    code: "AM",
    names: {
      en: "Armenia",
      tr: "Ermenistan",
      fr: "Arménie",
      ru: "Армения",
    },
  },
  {
    code: "AU",
    names: {
      en: "Australia",
      tr: "Avustralya",
      fr: "Australie",
      ru: "Австралия",
    },
  },
  {
    code: "AT",
    names: {
      en: "Austria",
      tr: "Avusturya",
      fr: "Autriche",
      ru: "Австрия",
    },
  },
  {
    code: "AZ",
    names: {
      en: "Azerbaijan",
      tr: "Azerbaycan",
      fr: "Azerbaïdjan",
      ru: "Азербайджан",
    },
  },
  {
    code: "BS",
    names: {
      en: "Bahamas",
      tr: "Bahamalar",
      fr: "Bahamas",
      ru: "Багамы",
    },
  },
  {
    code: "BH",
    names: {
      en: "Bahrain",
      tr: "Bahreyn",
      fr: "Bahreïn",
      ru: "Бахрейн",
    },
  },
  {
    code: "BD",
    names: {
      en: "Bangladesh",
      tr: "Bangladeş",
      fr: "Bangladesh",
      ru: "Бангладеш",
    },
  },
  {
    code: "BB",
    names: {
      en: "Barbados",
      tr: "Barbados",
      fr: "Barbade",
      ru: "Барбадос",
    },
  },
  {
    code: "BY",
    names: {
      en: "Belarus",
      tr: "Belarus",
      fr: "Bélarus",
      ru: "Беларусь",
    },
  },
  {
    code: "BE",
    names: {
      en: "Belgium",
      tr: "Belçika",
      fr: "Belgique",
      ru: "Бельгия",
    },
  },
  {
    code: "BZ",
    names: {
      en: "Belize",
      tr: "Belize",
      fr: "Belize",
      ru: "Белиз",
    },
  },
  {
    code: "BJ",
    names: {
      en: "Benin",
      tr: "Benin",
      fr: "Bénin",
      ru: "Бенин",
    },
  },
  {
    code: "BT",
    names: {
      en: "Bhutan",
      tr: "Butan",
      fr: "Bhoutan",
      ru: "Бутан",
    },
  },
  {
    code: "BO",
    names: {
      en: "Bolivia (Plurinational State of)",
      tr: "Bolivya (Çokuluslu Devleti)",
      fr: "Bolivie (État plurinational de)",
      ru: "Боливия (Многонациональное Государство)",
    },
  },
  {
    code: "BA",
    names: {
      en: "Bosnia and Herzegovina",
      tr: "Bosna-Hersek",
      fr: "Bosnie-Herzégovine",
      ru: "Босния и Герцеговина",
    },
  },
  {
    code: "BW",
    names: {
      en: "Botswana",
      tr: "Botsvana",
      fr: "Botswana",
      ru: "Ботсвана",
    },
  },
  {
    code: "BR",
    names: {
      en: "Brazil",
      tr: "Brezilya",
      fr: "Brésil",
      ru: "Бразилия",
    },
  },
  {
    code: "BN",
    names: {
      en: "Brunei Darussalam",
      tr: "Brunei Darüsselam",
      fr: "Brunei Darussalam",
      ru: "Бруней-Даруссалам",
    },
  },
  {
    code: "BG",
    names: {
      en: "Bulgaria",
      tr: "Bulgaristan",
      fr: "Bulgarie",
      ru: "Болгария",
    },
  },
  {
    code: "BF",
    names: {
      en: "Burkina Faso",
      tr: "Burkina Faso",
      fr: "Burkina Faso",
      ru: "Буркина-Фасо",
    },
  },
  {
    code: "BI",
    names: {
      en: "Burundi",
      tr: "Burundi",
      fr: "Burundi",
      ru: "Бурунди",
    },
  },
  {
    code: "CV",
    names: {
      en: "Cabo Verde",
      tr: "Cabo Verde",
      fr: "Cabo Verde",
      ru: "Кабо-Верде",
    },
  },
  {
    code: "KH",
    names: {
      en: "Cambodia",
      tr: "Kamboçya",
      fr: "Cambodge",
      ru: "Камбоджа",
    },
  },
  {
    code: "CM",
    names: {
      en: "Cameroon",
      tr: "Kamerun",
      fr: "Cameroun",
      ru: "Камерун",
    },
  },
  {
    code: "CA",
    names: {
      en: "Canada",
      tr: "Kanada",
      fr: "Canada",
      ru: "Канада",
    },
  },
  {
    code: "CF",
    names: {
      en: "Central African Republic",
      tr: "Orta Afrika Cumhuriyeti",
      fr: "République centrafricaine",
      ru: "Центральноафриканская Республика",
    },
  },
  {
    code: "TD",
    names: {
      en: "Chad",
      tr: "Çad",
      fr: "Tchad",
      ru: "Чад",
    },
  },
  {
    code: "CL",
    names: {
      en: "Chile",
      tr: "Şili",
      fr: "Chili",
      ru: "Чили",
    },
  },
  {
    code: "CN",
    names: {
      en: "China",
      tr: "Çin",
      fr: "Chine",
      ru: "Китай",
    },
  },
  {
    code: "CO",
    names: {
      en: "Colombia",
      tr: "Kolombiya",
      fr: "Colombie",
      ru: "Колумбия",
    },
  },
  {
    code: "KM",
    names: {
      en: "Comoros",
      tr: "Komorlar",
      fr: "Comores",
      ru: "Коморы",
    },
  },
  {
    code: "CG",
    names: {
      en: "Congo",
      tr: "Kongo Cumhuriyeti",
      fr: "Congo",
      ru: "Республика Конго",
    },
  },
  {
    code: "CD",
    names: {
      en: "Congo, Democratic Republic of the",
      tr: "Kongo Demokratik Cumhuriyeti",
      fr: "République démocratique du Congo",
      ru: "Демократическая Республика Конго",
    },
  },
  {
    code: "CR",
    names: {
      en: "Costa Rica",
      tr: "Kosta Rika",
      fr: "Costa Rica",
      ru: "Коста-Рика",
    },
  },
  {
    code: "CI",
    names: {
      en: "Côte d'Ivoire",
      tr: "Fildişi Sahili",
      fr: "Côte d'Ivoire",
      ru: "Кот-д'Ивуар",
    },
  },
  {
    code: "HR",
    names: {
      en: "Croatia",
      tr: "Hırvatistan",
      fr: "Croatie",
      ru: "Хорватия",
    },
  },
  {
    code: "CU",
    names: {
      en: "Cuba",
      tr: "Küba",
      fr: "Cuba",
      ru: "Куба",
    },
  },
  {
    code: "CY",
    names: {
      en: "Cyprus",
      tr: "Kıbrıs",
      fr: "Chypre",
      ru: "Кипр",
    },
  },
  {
    code: "CZ",
    names: {
      en: "Czechia",
      tr: "Çekya",
      fr: "Tchéquie",
      ru: "Чехия",
    },
  },
  {
    code: "DK",
    names: {
      en: "Denmark",
      tr: "Danimarka",
      fr: "Danemark",
      ru: "Дания",
    },
  },
  {
    code: "DJ",
    names: {
      en: "Djibouti",
      tr: "Cibuti",
      fr: "Djibouti",
      ru: "Джибути",
    },
  },
  {
    code: "DM",
    names: {
      en: "Dominica",
      tr: "Dominika",
      fr: "Dominique",
      ru: "Доминика",
    },
  },
  {
    code: "DO",
    names: {
      en: "Dominican Republic",
      tr: "Dominik Cumhuriyeti",
      fr: "République dominicaine",
      ru: "Доминиканская Республика",
    },
  },
  {
    code: "EC",
    names: {
      en: "Ecuador",
      tr: "Ekvador",
      fr: "Équateur",
      ru: "Эквадор",
    },
  },
  {
    code: "EG",
    names: {
      en: "Egypt",
      tr: "Mısır",
      fr: "Égypte",
      ru: "Египет",
    },
  },
  {
    code: "SV",
    names: {
      en: "El Salvador",
      tr: "El Salvador",
      fr: "El Salvador",
      ru: "Сальвадор",
    },
  },
  {
    code: "GQ",
    names: {
      en: "Equatorial Guinea",
      tr: "Ekvator Ginesi",
      fr: "Guinée équatoriale",
      ru: "Экваториальная Гвинея",
    },
  },
  {
    code: "ER",
    names: {
      en: "Eritrea",
      tr: "Eritre",
      fr: "Érythrée",
      ru: "Эритрея",
    },
  },
  {
    code: "EE",
    names: {
      en: "Estonia",
      tr: "Estonya",
      fr: "Estonie",
      ru: "Эстония",
    },
  },
  {
    code: "SZ",
    names: {
      en: "Eswatini",
      tr: "Esvatini",
      fr: "Eswatini",
      ru: "Эсватини",
    },
  },
  {
    code: "ET",
    names: {
      en: "Ethiopia",
      tr: "Etiyopya",
      fr: "Éthiopie",
      ru: "Эфиопия",
    },
  },
  {
    code: "FJ",
    names: {
      en: "Fiji",
      tr: "Fiji",
      fr: "Fidji",
      ru: "Фиджи",
    },
  },
  {
    code: "FI",
    names: {
      en: "Finland",
      tr: "Finlandiya",
      fr: "Finlande",
      ru: "Финляндия",
    },
  },
  {
    code: "FR",
    names: {
      en: "France",
      tr: "Fransa",
      fr: "France",
      ru: "Франция",
    },
  },
  {
    code: "GA",
    names: {
      en: "Gabon",
      tr: "Gabon",
      fr: "Gabon",
      ru: "Габон",
    },
  },
  {
    code: "GM",
    names: {
      en: "Gambia",
      tr: "Gambiya",
      fr: "Gambie",
      ru: "Гамбия",
    },
  },
  {
    code: "GE",
    names: {
      en: "Georgia",
      tr: "Gürcistan",
      fr: "Géorgie",
      ru: "Грузия",
    },
  },
  {
    code: "DE",
    names: {
      en: "Germany",
      tr: "Almanya",
      fr: "Allemagne",
      ru: "Германия",
    },
  },
  {
    code: "GH",
    names: {
      en: "Ghana",
      tr: "Gana",
      fr: "Ghana",
      ru: "Гана",
    },
  },
  {
    code: "GR",
    names: {
      en: "Greece",
      tr: "Yunanistan",
      fr: "Grèce",
      ru: "Греция",
    },
  },
  {
    code: "GD",
    names: {
      en: "Grenada",
      tr: "Grenada",
      fr: "Grenade",
      ru: "Гренада",
    },
  },
  {
    code: "GT",
    names: {
      en: "Guatemala",
      tr: "Guatemala",
      fr: "Guatemala",
      ru: "Гватемала",
    },
  },
  {
    code: "GN",
    names: {
      en: "Guinea",
      tr: "Gine",
      fr: "Guinée",
      ru: "Гвинея",
    },
  },
  {
    code: "GW",
    names: {
      en: "Guinea-Bissau",
      tr: "Gine-Bissau",
      fr: "Guinée-Bissau",
      ru: "Гвинея-Бисау",
    },
  },
  {
    code: "GY",
    names: {
      en: "Guyana",
      tr: "Guyana",
      fr: "Guyana",
      ru: "Гайана",
    },
  },
  {
    code: "HT",
    names: {
      en: "Haiti",
      tr: "Haiti",
      fr: "Haïti",
      ru: "Гаити",
    },
  },
  {
    code: "HN",
    names: {
      en: "Honduras",
      tr: "Honduras",
      fr: "Honduras",
      ru: "Гондурас",
    },
  },
  {
    code: "HU",
    names: {
      en: "Hungary",
      tr: "Macaristan",
      fr: "Hongrie",
      ru: "Венгрия",
    },
  },
  {
    code: "IS",
    names: {
      en: "Iceland",
      tr: "İzlanda",
      fr: "Islande",
      ru: "Исландия",
    },
  },
  {
    code: "IN",
    names: {
      en: "India",
      tr: "Hindistan",
      fr: "Inde",
      ru: "Индия",
    },
  },
  {
    code: "ID",
    names: {
      en: "Indonesia",
      tr: "Endonezya",
      fr: "Indonésie",
      ru: "Индонезия",
    },
  },
  {
    code: "IR",
    names: {
      en: "Iran (Islamic Republic of)",
      tr: "İran (İslam Cumhuriyeti)",
      fr: "Iran (République islamique d')",
      ru: "Иран (Исламская Республика)",
    },
  },
  {
    code: "IQ",
    names: {
      en: "Iraq",
      tr: "Irak",
      fr: "Iraq",
      ru: "Ирак",
    },
  },
  {
    code: "IE",
    names: {
      en: "Ireland",
      tr: "İrlanda",
      fr: "Irlande",
      ru: "Ирландия",
    },
  },
  {
    code: "IL",
    names: {
      en: "Israel",
      tr: "İsrail",
      fr: "Israël",
      ru: "Израиль",
    },
  },
  {
    code: "IT",
    names: {
      en: "Italy",
      tr: "İtalya",
      fr: "Italie",
      ru: "Италия",
    },
  },
  {
    code: "JM",
    names: {
      en: "Jamaica",
      tr: "Jamaika",
      fr: "Jamaïque",
      ru: "Ямайка",
    },
  },
  {
    code: "JP",
    names: {
      en: "Japan",
      tr: "Japonya",
      fr: "Japon",
      ru: "Япония",
    },
  },
  {
    code: "JO",
    names: {
      en: "Jordan",
      tr: "Ürdün",
      fr: "Jordanie",
      ru: "Иордания",
    },
  },
  {
    code: "KZ",
    names: {
      en: "Kazakhstan",
      tr: "Kazakistan",
      fr: "Kazakhstan",
      ru: "Казахстан",
    },
  },
  {
    code: "KE",
    names: {
      en: "Kenya",
      tr: "Kenya",
      fr: "Kenya",
      ru: "Кения",
    },
  },
  {
    code: "KI",
    names: {
      en: "Kiribati",
      tr: "Kiribati",
      fr: "Kiribati",
      ru: "Кирибати",
    },
  },
  {
    code: "KP",
    names: {
      en: "Korea, Democratic People's Republic of",
      tr: "Kore Demokratik Halk Cumhuriyeti",
      fr: "République populaire démocratique de Corée",
      ru: "Корейская Народно-Демократическая Республика",
    },
  },
  {
    code: "KR",
    names: {
      en: "Korea, Republic of",
      tr: "Kore Cumhuriyeti",
      fr: "République de Corée",
      ru: "Республика Корея",
    },
  },
  {
    code: "KW",
    names: {
      en: "Kuwait",
      tr: "Kuveyt",
      fr: "Koweït",
      ru: "Кувейт",
    },
  },
  {
    code: "KG",
    names: {
      en: "Kyrgyzstan",
      tr: "Kırgızistan",
      fr: "Kirghizistan",
      ru: "Кыргызстан",
    },
  },
  {
    code: "LA",
    names: {
      en: "Lao People's Democratic Republic",
      tr: "Laos Demokratik Halk Cumhuriyeti",
      fr: "République démocratique populaire lao",
      ru: "Лаосская Народно-Демократическая Республика",
    },
  },
  {
    code: "LV",
    names: {
      en: "Latvia",
      tr: "Letonya",
      fr: "Lettonie",
      ru: "Латвия",
    },
  },
  {
    code: "LB",
    names: {
      en: "Lebanon",
      tr: "Lübnan",
      fr: "Liban",
      ru: "Ливан",
    },
  },
  {
    code: "LS",
    names: {
      en: "Lesotho",
      tr: "Lesotho",
      fr: "Lesotho",
      ru: "Лесото",
    },
  },
  {
    code: "LR",
    names: {
      en: "Liberia",
      tr: "Liberya",
      fr: "Libéria",
      ru: "Либерия",
    },
  },
  {
    code: "LY",
    names: {
      en: "Libya",
      tr: "Libya",
      fr: "Libye",
      ru: "Ливия",
    },
  },
  {
    code: "LI",
    names: {
      en: "Liechtenstein",
      tr: "Lihtenştayn",
      fr: "Liechtenstein",
      ru: "Лихтенштейн",
    },
  },
  {
    code: "LT",
    names: {
      en: "Lithuania",
      tr: "Litvanya",
      fr: "Lituanie",
      ru: "Литва",
    },
  },
  {
    code: "LU",
    names: {
      en: "Luxembourg",
      tr: "Lüksemburg",
      fr: "Luxembourg",
      ru: "Люксембург",
    },
  },
  {
    code: "MG",
    names: {
      en: "Madagascar",
      tr: "Madagaskar",
      fr: "Madagascar",
      ru: "Мадагаскар",
    },
  },
  {
    code: "MW",
    names: {
      en: "Malawi",
      tr: "Malavi",
      fr: "Malawi",
      ru: "Малави",
    },
  },
  {
    code: "MY",
    names: {
      en: "Malaysia",
      tr: "Malezya",
      fr: "Malaisie",
      ru: "Малайзия",
    },
  },
  {
    code: "MV",
    names: {
      en: "Maldives",
      tr: "Maldivler",
      fr: "Maldives",
      ru: "Мальдивы",
    },
  },
  {
    code: "ML",
    names: {
      en: "Mali",
      tr: "Mali",
      fr: "Mali",
      ru: "Мали",
    },
  },
  {
    code: "MT",
    names: {
      en: "Malta",
      tr: "Malta",
      fr: "Malte",
      ru: "Мальта",
    },
  },
  {
    code: "MH",
    names: {
      en: "Marshall Islands",
      tr: "Marshall Adaları",
      fr: "Îles Marshall",
      ru: "Маршалловы Острова",
    },
  },
  {
    code: "MR",
    names: {
      en: "Mauritania",
      tr: "Moritanya",
      fr: "Mauritanie",
      ru: "Мавритания",
    },
  },
  {
    code: "MU",
    names: {
      en: "Mauritius",
      tr: "Mauritius",
      fr: "Maurice",
      ru: "Маврикий",
    },
  },
  {
    code: "MX",
    names: {
      en: "Mexico",
      tr: "Meksika",
      fr: "Mexique",
      ru: "Мексика",
    },
  },
  {
    code: "FM",
    names: {
      en: "Micronesia (Federated States of)",
      tr: "Mikronezya Federal Devletleri",
      fr: "Micronésie (États fédérés de)",
      ru: "Микронезия (Федеративные Штаты)",
    },
  },
  {
    code: "MD",
    names: {
      en: "Moldova, Republic of",
      tr: "Moldova Cumhuriyeti",
      fr: "République de Moldova",
      ru: "Молдова, Республика",
    },
  },
  {
    code: "MC",
    names: {
      en: "Monaco",
      tr: "Monako",
      fr: "Monaco",
      ru: "Монако",
    },
  },
  {
    code: "MN",
    names: {
      en: "Mongolia",
      tr: "Moğolistan",
      fr: "Mongolie",
      ru: "Монголия",
    },
  },
  {
    code: "ME",
    names: {
      en: "Montenegro",
      tr: "Karadağ",
      fr: "Monténégro",
      ru: "Черногория",
    },
  },
  {
    code: "MA",
    names: {
      en: "Morocco",
      tr: "Fas",
      fr: "Maroc",
      ru: "Марокко",
    },
  },
  {
    code: "MZ",
    names: {
      en: "Mozambique",
      tr: "Mozambik",
      fr: "Mozambique",
      ru: "Мозамбик",
    },
  },
  {
    code: "MM",
    names: {
      en: "Myanmar",
      tr: "Myanmar",
      fr: "Myanmar",
      ru: "Мьянма",
    },
  },
  {
    code: "NA",
    names: {
      en: "Namibia",
      tr: "Namibya",
      fr: "Namibie",
      ru: "Намибия",
    },
  },
  {
    code: "NR",
    names: {
      en: "Nauru",
      tr: "Nauru",
      fr: "Nauru",
      ru: "Науру",
    },
  },
  {
    code: "NP",
    names: {
      en: "Nepal",
      tr: "Nepal",
      fr: "Népal",
      ru: "Непал",
    },
  },
  {
    code: "NL",
    names: {
      en: "Netherlands (Kingdom of the)",
      tr: "Hollanda Krallığı",
      fr: "Pays-Bas (Royaume des)",
      ru: "Нидерланды (Королевство)",
    },
  },
  {
    code: "NZ",
    names: {
      en: "New Zealand",
      tr: "Yeni Zelanda",
      fr: "Nouvelle-Zélande",
      ru: "Новая Зеландия",
    },
  },
  {
    code: "NI",
    names: {
      en: "Nicaragua",
      tr: "Nikaragua",
      fr: "Nicaragua",
      ru: "Никарагуа",
    },
  },
  {
    code: "NE",
    names: {
      en: "Niger",
      tr: "Nijer",
      fr: "Niger",
      ru: "Нигер",
    },
  },
  {
    code: "NG",
    names: {
      en: "Nigeria",
      tr: "Nijerya",
      fr: "Nigéria",
      ru: "Нигерия",
    },
  },
  {
    code: "MK",
    names: {
      en: "North Macedonia",
      tr: "Kuzey Makedonya",
      fr: "Macédoine du Nord",
      ru: "Северная Македония",
    },
  },
  {
    code: "NO",
    names: {
      en: "Norway",
      tr: "Norveç",
      fr: "Norvège",
      ru: "Норвегия",
    },
  },
  {
    code: "OM",
    names: {
      en: "Oman",
      tr: "Umman",
      fr: "Oman",
      ru: "Оман",
    },
  },
  {
    code: "PK",
    names: {
      en: "Pakistan",
      tr: "Pakistan",
      fr: "Pakistan",
      ru: "Пакистан",
    },
  },
  {
    code: "PW",
    names: {
      en: "Palau",
      tr: "Palau",
      fr: "Palaos",
      ru: "Палау",
    },
  },
  {
    code: "PS",
    names: {
      en: "Palestine, State of",
      tr: "Filistin Devleti",
      fr: "État de Palestine",
      ru: "Государство Палестина",
    },
  },
  {
    code: "PA",
    names: {
      en: "Panama",
      tr: "Panama",
      fr: "Panama",
      ru: "Панама",
    },
  },
  {
    code: "PG",
    names: {
      en: "Papua New Guinea",
      tr: "Papua Yeni Gine",
      fr: "Papouasie-Nouvelle-Guinée",
      ru: "Папуа — Новая Гвинея",
    },
  },
  {
    code: "PY",
    names: {
      en: "Paraguay",
      tr: "Paraguay",
      fr: "Paraguay",
      ru: "Парагвай",
    },
  },
  {
    code: "PE",
    names: {
      en: "Peru",
      tr: "Peru",
      fr: "Pérou",
      ru: "Перу",
    },
  },
  {
    code: "PH",
    names: {
      en: "Philippines",
      tr: "Filipinler",
      fr: "Philippines",
      ru: "Филиппины",
    },
  },
  {
    code: "PL",
    names: {
      en: "Poland",
      tr: "Polonya",
      fr: "Pologne",
      ru: "Польша",
    },
  },
  {
    code: "PT",
    names: {
      en: "Portugal",
      tr: "Portekiz",
      fr: "Portugal",
      ru: "Португалия",
    },
  },
  {
    code: "QA",
    names: {
      en: "Qatar",
      tr: "Katar",
      fr: "Qatar",
      ru: "Катар",
    },
  },
  {
    code: "RO",
    names: {
      en: "Romania",
      tr: "Romanya",
      fr: "Roumanie",
      ru: "Румыния",
    },
  },
  {
    code: "RU",
    names: {
      en: "Russian Federation",
      tr: "Rusya Federasyonu",
      fr: "Fédération de Russie",
      ru: "Российская Федерация",
    },
  },
  {
    code: "RW",
    names: {
      en: "Rwanda",
      tr: "Ruanda",
      fr: "Rwanda",
      ru: "Руанда",
    },
  },
  {
    code: "KN",
    names: {
      en: "Saint Kitts and Nevis",
      tr: "Saint Kitts ve Nevis",
      fr: "Saint-Christophe-et-Niévès",
      ru: "Сент-Китс и Невис",
    },
  },
  {
    code: "LC",
    names: {
      en: "Saint Lucia",
      tr: "Saint Lucia",
      fr: "Sainte-Lucie",
      ru: "Сент-Люсия",
    },
  },
  {
    code: "VC",
    names: {
      en: "Saint Vincent and the Grenadines",
      tr: "Saint Vincent ve Grenadinler",
      fr: "Saint-Vincent-et-les-Grenadines",
      ru: "Сент-Винсент и Гренадины",
    },
  },
  {
    code: "WS",
    names: {
      en: "Samoa",
      tr: "Samoa",
      fr: "Samoa",
      ru: "Самоа",
    },
  },
  {
    code: "SM",
    names: {
      en: "San Marino",
      tr: "San Marino",
      fr: "Saint-Marin",
      ru: "Сан-Марино",
    },
  },
  {
    code: "ST",
    names: {
      en: "Sao Tome and Principe",
      tr: "São Tomé ve Príncipe",
      fr: "Sao Tomé-et-Principe",
      ru: "Сан-Томе и Принсипи",
    },
  },
  {
    code: "SA",
    names: {
      en: "Saudi Arabia",
      tr: "Suudi Arabistan",
      fr: "Arabie saoudite",
      ru: "Саудовская Аравия",
    },
  },
  {
    code: "SN",
    names: {
      en: "Senegal",
      tr: "Senegal",
      fr: "Sénégal",
      ru: "Сенегал",
    },
  },
  {
    code: "RS",
    names: {
      en: "Serbia",
      tr: "Sırbistan",
      fr: "Serbie",
      ru: "Сербия",
    },
  },
  {
    code: "SC",
    names: {
      en: "Seychelles",
      tr: "Seyşeller",
      fr: "Seychelles",
      ru: "Сейшельские Острова",
    },
  },
  {
    code: "SL",
    names: {
      en: "Sierra Leone",
      tr: "Sierra Leone",
      fr: "Sierra Leone",
      ru: "Сьерра-Леоне",
    },
  },
  {
    code: "SG",
    names: {
      en: "Singapore",
      tr: "Singapur",
      fr: "Singapour",
      ru: "Сингапур",
    },
  },
  {
    code: "SK",
    names: {
      en: "Slovakia",
      tr: "Slovakya",
      fr: "Slovaquie",
      ru: "Словакия",
    },
  },
  {
    code: "SI",
    names: {
      en: "Slovenia",
      tr: "Slovenya",
      fr: "Slovénie",
      ru: "Словения",
    },
  },
  {
    code: "SB",
    names: {
      en: "Solomon Islands",
      tr: "Solomon Adaları",
      fr: "Îles Salomon",
      ru: "Соломоновы Острова",
    },
  },
  {
    code: "SO",
    names: {
      en: "Somalia",
      tr: "Somali",
      fr: "Somalie",
      ru: "Сомали",
    },
  },
  {
    code: "ZA",
    names: {
      en: "South Africa",
      tr: "Güney Afrika",
      fr: "Afrique du Sud",
      ru: "Южная Африка",
    },
  },
  {
    code: "SS",
    names: {
      en: "South Sudan",
      tr: "Güney Sudan",
      fr: "Soudan du Sud",
      ru: "Южный Судан",
    },
  },
  {
    code: "ES",
    names: {
      en: "Spain",
      tr: "İspanya",
      fr: "Espagne",
      ru: "Испания",
    },
  },
  {
    code: "LK",
    names: {
      en: "Sri Lanka",
      tr: "Sri Lanka",
      fr: "Sri Lanka",
      ru: "Шри-Ланка",
    },
  },
  {
    code: "SD",
    names: {
      en: "Sudan",
      tr: "Sudan",
      fr: "Soudan",
      ru: "Судан",
    },
  },
  {
    code: "SR",
    names: {
      en: "Suriname",
      tr: "Surinam",
      fr: "Suriname",
      ru: "Суринам",
    },
  },
  {
    code: "SE",
    names: {
      en: "Sweden",
      tr: "İsveç",
      fr: "Suède",
      ru: "Швеция",
    },
  },
  {
    code: "CH",
    names: {
      en: "Switzerland",
      tr: "İsviçre",
      fr: "Suisse",
      ru: "Швейцария",
    },
  },
  {
    code: "SY",
    names: {
      en: "Syrian Arab Republic",
      tr: "Suriye Arap Cumhuriyeti",
      fr: "République arabe syrienne",
      ru: "Сирийская Арабская Республика",
    },
  },
  {
    code: "TJ",
    names: {
      en: "Tajikistan",
      tr: "Tacikistan",
      fr: "Tadjikistan",
      ru: "Таджикистан",
    },
  },
  {
    code: "TZ",
    names: {
      en: "Tanzania, United Republic of",
      tr: "Tanzanya Birleşik Cumhuriyeti",
      fr: "République-Unie de Tanzanie",
      ru: "Объединенная Республика Танзания",
    },
  },
  {
    code: "TH",
    names: {
      en: "Thailand",
      tr: "Tayland",
      fr: "Thaïlande",
      ru: "Таиланд",
    },
  },
  {
    code: "TL",
    names: {
      en: "Timor-Leste",
      tr: "Timor-Leste",
      fr: "Timor-Leste",
      ru: "Тимор-Лешти",
    },
  },
  {
    code: "TG",
    names: {
      en: "Togo",
      tr: "Togo",
      fr: "Togo",
      ru: "Того",
    },
  },
  {
    code: "TO",
    names: {
      en: "Tonga",
      tr: "Tonga",
      fr: "Tonga",
      ru: "Тонга",
    },
  },
  {
    code: "TT",
    names: {
      en: "Trinidad and Tobago",
      tr: "Trinidad ve Tobago",
      fr: "Trinité-et-Tobago",
      ru: "Тринидад и Тобаго",
    },
  },
  {
    code: "TN",
    names: {
      en: "Tunisia",
      tr: "Tunus",
      fr: "Tunisie",
      ru: "Тунис",
    },
  },
  {
    code: "TR",
    names: {
      en: "Türkiye",
      tr: "Türkiye",
      fr: "Türkiye",
      ru: "Турция",
    },
  },
  {
    code: "TM",
    names: {
      en: "Turkmenistan",
      tr: "Türkmenistan",
      fr: "Turkménistan",
      ru: "Туркменистан",
    },
  },
  {
    code: "TV",
    names: {
      en: "Tuvalu",
      tr: "Tuvalu",
      fr: "Tuvalu",
      ru: "Тувалу",
    },
  },
  {
    code: "UG",
    names: {
      en: "Uganda",
      tr: "Uganda",
      fr: "Ouganda",
      ru: "Уганда",
    },
  },
  {
    code: "UA",
    names: {
      en: "Ukraine",
      tr: "Ukrayna",
      fr: "Ukraine",
      ru: "Украина",
    },
  },
  {
    code: "AE",
    names: {
      en: "United Arab Emirates",
      tr: "Birleşik Arap Emirlikleri",
      fr: "Émirats arabes unis",
      ru: "Объединённые Арабские Эмираты",
    },
  },
  {
    code: "GB",
    names: {
      en: "United Kingdom",
      tr: "Birleşik Krallık",
      fr: "Royaume-Uni",
      ru: "Соединённое Королевство",
    },
  },
  {
    code: "US",
    names: {
      en: "United States",
      tr: "Amerika Birleşik Devletleri",
      fr: "États-Unis",
      ru: "Соединённые Штаты",
    },
  },
  {
    code: "UY",
    names: {
      en: "Uruguay",
      tr: "Uruguay",
      fr: "Uruguay",
      ru: "Уругвай",
    },
  },
  {
    code: "UZ",
    names: {
      en: "Uzbekistan",
      tr: "Özbekistan",
      fr: "Ouzbékistan",
      ru: "Узбекистан",
    },
  },
  {
    code: "VU",
    names: {
      en: "Vanuatu",
      tr: "Vanuatu",
      fr: "Vanuatu",
      ru: "Вануату",
    },
  },
  {
    code: "VA",
    names: {
      en: "Holy See",
      tr: "Kutsal Makam",
      fr: "Saint-Siège",
      ru: "Святой Престол",
    },
  },
  {
    code: "VE",
    names: {
      en: "Venezuela (Bolivarian Republic of)",
      tr: "Venezuela Bolivarcı Cumhuriyeti",
      fr: "Venezuela (République bolivarienne du)",
      ru: "Венесуэла (Боливарианская Республика)",
    },
  },
  {
    code: "VN",
    names: {
      en: "Viet Nam",
      tr: "Vietnam",
      fr: "Viet Nam",
      ru: "Вьетнам",
    },
  },
  {
    code: "YE",
    names: {
      en: "Yemen",
      tr: "Yemen",
      fr: "Yémen",
      ru: "Йемен",
    },
  },
  {
    code: "ZM",
    names: {
      en: "Zambia",
      tr: "Zambiya",
      fr: "Zambie",
      ru: "Замбия",
    },
  },
  {
    code: "ZW",
    names: {
      en: "Zimbabwe",
      tr: "Zimbabve",
      fr: "Zimbabwe",
      ru: "Зимбабве",
    },
  },
];

export default countries;