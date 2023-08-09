import { Card } from "../card";

const countries = [
    {
        name: {
            common: "American Samoa",
            official: "American Samoa",
            nativeName: {
                eng: {
                    official: "American Samoa",
                    common: "American Samoa",
                },
                smo: {
                    official: "Sāmoa Amelika",
                    common: "Sāmoa Amelika",
                },
            },
        },
        currencies: {
            USD: {
                name: "United States dollar",
                symbol: "$",
            },
        },
        capital: ["Pago Pago"],
        region: "Oceania",
        flag: "🇦🇸",
    },
    {
        name: {
            common: "Peru",
            official: "Republic of Peru",
            nativeName: {
                aym: {
                    official: "Piruw Suyu",
                    common: "Piruw",
                },
                que: {
                    official: "Piruw Ripuwlika",
                    common: "Piruw",
                },
                spa: {
                    official: "República del Perú",
                    common: "Perú",
                },
            },
        },
        currencies: {
            PEN: {
                name: "Peruvian sol",
                symbol: "S/ ",
            },
        },
        capital: ["Lima"],
        region: "Americas",
        flag: "🇵🇪",
    },
    {
        name: {
            common: "Tonga",
            official: "Kingdom of Tonga",
            nativeName: {
                eng: {
                    official: "Kingdom of Tonga",
                    common: "Tonga",
                },
                ton: {
                    official: "Kingdom of Tonga",
                    common: "Tonga",
                },
            },
        },
        currencies: {
            TOP: {
                name: "Tongan paʻanga",
                symbol: "T$",
            },
        },
        capital: ["Nuku'alofa"],
        region: "Oceania",
        flag: "🇹🇴",
    },
    {
        name: {
            common: "Mayotte",
            official: "Department of Mayotte",
            nativeName: {
                fra: {
                    official: "Département de Mayotte",
                    common: "Mayotte",
                },
            },
        },
        currencies: {
            EUR: {
                name: "Euro",
                symbol: "€",
            },
        },
        capital: ["Mamoudzou"],
        region: "Africa",
        flag: "🇾🇹",
    },
    {
        name: {
            common: "Panama",
            official: "Republic of Panama",
            nativeName: {
                spa: {
                    official: "República de Panamá",
                    common: "Panamá",
                },
            },
        },
        currencies: {
            PAB: {
                name: "Panamanian balboa",
                symbol: "B/.",
            },
            USD: {
                name: "United States dollar",
                symbol: "$",
            },
        },
        capital: ["Panama City"],
        region: "Americas",
        flag: "🇵🇦",
    },
    {
        name: {
            common: "Madagascar",
            official: "Republic of Madagascar",
            nativeName: {
                fra: {
                    official: "République de Madagascar",
                    common: "Madagascar",
                },
                mlg: {
                    official: "Repoblikan'i Madagasikara",
                    common: "Madagasikara",
                },
            },
        },
        currencies: {
            MGA: {
                name: "Malagasy ariary",
                symbol: "Ar",
            },
        },
        capital: ["Antananarivo"],
        region: "Africa",
        flag: "🇲🇬",
    },
    {
        name: {
            common: "Belgium",
            official: "Kingdom of Belgium",
            nativeName: {
                deu: {
                    official: "Königreich Belgien",
                    common: "Belgien",
                },
                fra: {
                    official: "Royaume de Belgique",
                    common: "Belgique",
                },
                nld: {
                    official: "Koninkrijk België",
                    common: "België",
                },
            },
        },
        currencies: {
            EUR: {
                name: "Euro",
                symbol: "€",
            },
        },
        capital: ["Brussels"],
        region: "Europe",
        flag: "🇧🇪",
    },
    {
        name: {
            common: "Central African Republic",
            official: "Central African Republic",
            nativeName: {
                fra: {
                    official: "République centrafricaine",
                    common: "République centrafricaine",
                },
                sag: {
                    official: "Ködörösêse tî Bêafrîka",
                    common: "Bêafrîka",
                },
            },
        },
        currencies: {
            XAF: {
                name: "Central African CFA franc",
                symbol: "Fr",
            },
        },
        capital: ["Bangui"],
        region: "Africa",
        flag: "🇨🇫",
    },
    {
        name: {
            common: "Hungary",
            official: "Hungary",
            nativeName: {
                hun: {
                    official: "Magyarország",
                    common: "Magyarország",
                },
            },
        },
        currencies: {
            HUF: {
                name: "Hungarian forint",
                symbol: "Ft",
            },
        },
        capital: ["Budapest"],
        region: "Europe",
        flag: "🇭🇺",
    },
    {
        name: {
            common: "Mongolia",
            official: "Mongolia",
            nativeName: {
                mon: {
                    official: "Монгол улс",
                    common: "Монгол улс",
                },
            },
        },
        currencies: {
            MNT: {
                name: "Mongolian tögrög",
                symbol: "₮",
            },
        },
        capital: ["Ulan Bator"],
        region: "Asia",
        flag: "🇲🇳",
    },
    {
        name: {
            common: "Saudi Arabia",
            official: "Kingdom of Saudi Arabia",
            nativeName: {
                ara: {
                    official: "المملكة العربية السعودية",
                    common: "العربية السعودية",
                },
            },
        },
        currencies: {
            SAR: {
                name: "Saudi riyal",
                symbol: "ر.س",
            },
        },
        capital: ["Riyadh"],
        region: "Asia",
        flag: "🇸🇦",
    },
    {
        name: {
            common: "Eswatini",
            official: "Kingdom of Eswatini",
            nativeName: {
                eng: {
                    official: "Kingdom of Eswatini",
                    common: "Eswatini",
                },
                ssw: {
                    official: "Umbuso weSwatini",
                    common: "eSwatini",
                },
            },
        },
        currencies: {
            SZL: {
                name: "Swazi lilangeni",
                symbol: "L",
            },
            ZAR: {
                name: "South African rand",
                symbol: "R",
            },
        },
        capital: ["Mbabane"],
        region: "Africa",
        flag: "🇸🇿",
    },
    {
        name: {
            common: "Uganda",
            official: "Republic of Uganda",
            nativeName: {
                eng: {
                    official: "Republic of Uganda",
                    common: "Uganda",
                },
                swa: {
                    official: "Republic of Uganda",
                    common: "Uganda",
                },
            },
        },
        currencies: {
            UGX: {
                name: "Ugandan shilling",
                symbol: "Sh",
            },
        },
        capital: ["Kampala"],
        region: "Africa",
        flag: "🇺🇬",
    },
    {
        name: {
            common: "Paraguay",
            official: "Republic of Paraguay",
            nativeName: {
                grn: {
                    official: "Tetã Paraguái",
                    common: "Paraguái",
                },
                spa: {
                    official: "República de Paraguay",
                    common: "Paraguay",
                },
            },
        },
        currencies: {
            PYG: {
                name: "Paraguayan guaraní",
                symbol: "₲",
            },
        },
        capital: ["Asunción"],
        region: "Americas",
        flag: "🇵🇾",
    },
    {
        name: {
            common: "Cameroon",
            official: "Republic of Cameroon",
            nativeName: {
                eng: {
                    official: "Republic of Cameroon",
                    common: "Cameroon",
                },
                fra: {
                    official: "République du Cameroun",
                    common: "Cameroun",
                },
            },
        },
        currencies: {
            XAF: {
                name: "Central African CFA franc",
                symbol: "Fr",
            },
        },
        capital: ["Yaoundé"],
        region: "Africa",
        flag: "🇨🇲",
    },
    {
        name: {
            common: "France",
            official: "French Republic",
            nativeName: {
                fra: {
                    official: "République française",
                    common: "France",
                },
            },
        },
        currencies: {
            EUR: {
                name: "Euro",
                symbol: "€",
            },
        },
        capital: ["Paris"],
        region: "Europe",
        flag: "🇫🇷",
    },
    {
        name: {
            common: "Togo",
            official: "Togolese Republic",
            nativeName: {
                fra: {
                    official: "République togolaise",
                    common: "Togo",
                },
            },
        },
        currencies: {
            XOF: {
                name: "West African CFA franc",
                symbol: "Fr",
            },
        },
        capital: ["Lomé"],
        region: "Africa",
        flag: "🇹🇬",
    },
    {
        name: {
            common: "Mauritius",
            official: "Republic of Mauritius",
            nativeName: {
                eng: {
                    official: "Republic of Mauritius",
                    common: "Mauritius",
                },
                fra: {
                    official: "République de Maurice",
                    common: "Maurice",
                },
                mfe: {
                    official: "Republik Moris",
                    common: "Moris",
                },
            },
        },
        currencies: {
            MUR: {
                name: "Mauritian rupee",
                symbol: "₨",
            },
        },
        capital: ["Port Louis"],
        region: "Africa",
        flag: "🇲🇺",
    },
    {
        name: {
            common: "Cook Islands",
            official: "Cook Islands",
            nativeName: {
                eng: {
                    official: "Cook Islands",
                    common: "Cook Islands",
                },
                rar: {
                    official: "Kūki 'Āirani",
                    common: "Kūki 'Āirani",
                },
            },
        },
        currencies: {
            CKD: {
                name: "Cook Islands dollar",
                symbol: "$",
            },
            NZD: {
                name: "New Zealand dollar",
                symbol: "$",
            },
        },
        capital: ["Avarua"],
        region: "Oceania",
        flag: "🇨🇰",
    },
    {
        name: {
            common: "Palau",
            official: "Republic of Palau",
            nativeName: {
                eng: {
                    official: "Republic of Palau",
                    common: "Palau",
                },
                pau: {
                    official: "Beluu er a Belau",
                    common: "Belau",
                },
            },
        },
        currencies: {
            USD: {
                name: "United States dollar",
                symbol: "$",
            },
        },
        capital: ["Ngerulmud"],
        region: "Oceania",
        flag: "🇵🇼",
    },
    {
        name: {
            common: "Nepal",
            official: "Federal Democratic Republic of Nepal",
            nativeName: {
                nep: {
                    official: "नेपाल संघीय लोकतान्त्रिक गणतन्त्र",
                    common: "नेपाल",
                },
            },
        },
        currencies: {
            NPR: {
                name: "Nepalese rupee",
                symbol: "₨",
            },
        },
        capital: ["Kathmandu"],
        region: "Asia",
        flag: "🇳🇵",
    },
    {
        name: {
            common: "New Zealand",
            official: "New Zealand",
            nativeName: {
                eng: {
                    official: "New Zealand",
                    common: "New Zealand",
                },
                mri: {
                    official: "Aotearoa",
                    common: "Aotearoa",
                },
                nzs: {
                    official: "New Zealand",
                    common: "New Zealand",
                },
            },
        },
        currencies: {
            NZD: {
                name: "New Zealand dollar",
                symbol: "$",
            },
        },
        capital: ["Wellington"],
        region: "Oceania",
        flag: "🇳🇿",
    },
    {
        name: {
            common: "Pitcairn Islands",
            official: "Pitcairn Group of Islands",
            nativeName: {
                eng: {
                    official: "Pitcairn Group of Islands",
                    common: "Pitcairn Islands",
                },
            },
        },
        currencies: {
            NZD: {
                name: "New Zealand dollar",
                symbol: "$",
            },
        },
        capital: ["Adamstown"],
        region: "Oceania",
        flag: "🇵🇳",
    },
    {
        name: {
            common: "Seychelles",
            official: "Republic of Seychelles",
            nativeName: {
                crs: {
                    official: "Repiblik Sesel",
                    common: "Sesel",
                },
                eng: {
                    official: "Republic of Seychelles",
                    common: "Seychelles",
                },
                fra: {
                    official: "République des Seychelles",
                    common: "Seychelles",
                },
            },
        },
        currencies: {
            SCR: {
                name: "Seychellois rupee",
                symbol: "₨",
            },
        },
        capital: ["Victoria"],
        region: "Africa",
        flag: "🇸🇨",
    },
    {
        name: {
            common: "United Arab Emirates",
            official: "United Arab Emirates",
            nativeName: {
                ara: {
                    official: "الإمارات العربية المتحدة",
                    common: "دولة الإمارات العربية المتحدة",
                },
            },
        },
        currencies: {
            AED: {
                name: "United Arab Emirates dirham",
                symbol: "د.إ",
            },
        },
        capital: ["Abu Dhabi"],
        region: "Asia",
        flag: "🇦🇪",
    },
    {
        name: {
            common: "Belarus",
            official: "Republic of Belarus",
            nativeName: {
                bel: {
                    official: "Рэспубліка Беларусь",
                    common: "Белару́сь",
                },
                rus: {
                    official: "Республика Беларусь",
                    common: "Беларусь",
                },
            },
        },
        currencies: {
            BYN: {
                name: "Belarusian ruble",
                symbol: "Br",
            },
        },
        capital: ["Minsk"],
        region: "Europe",
        flag: "🇧🇾",
    },
    {
        name: {
            common: "Dominican Republic",
            official: "Dominican Republic",
            nativeName: {
                spa: {
                    official: "República Dominicana",
                    common: "República Dominicana",
                },
            },
        },
        currencies: {
            DOP: {
                name: "Dominican peso",
                symbol: "$",
            },
        },
        capital: ["Santo Domingo"],
        region: "Americas",
        flag: "🇩🇴",
    },
    {
        name: {
            common: "Libya",
            official: "State of Libya",
            nativeName: {
                ara: {
                    official: "الدولة ليبيا",
                    common: "\u200fليبيا",
                },
            },
        },
        currencies: {
            LYD: {
                name: "Libyan dinar",
                symbol: "ل.د",
            },
        },
        capital: ["Tripoli"],
        region: "Africa",
        flag: "🇱🇾",
    },
    {
        name: {
            common: "Tokelau",
            official: "Tokelau",
            nativeName: {
                eng: {
                    official: "Tokelau",
                    common: "Tokelau",
                },
                smo: {
                    official: "Tokelau",
                    common: "Tokelau",
                },
                tkl: {
                    official: "Tokelau",
                    common: "Tokelau",
                },
            },
        },
        currencies: {
            NZD: {
                name: "New Zealand dollar",
                symbol: "$",
            },
        },
        capital: ["Fakaofo"],
        region: "Oceania",
        flag: "🇹🇰",
    },
    {
        name: {
            common: "Croatia",
            official: "Republic of Croatia",
            nativeName: {
                hrv: {
                    official: "Republika Hrvatska",
                    common: "Hrvatska",
                },
            },
        },
        currencies: {
            EUR: {
                name: "Euro",
                symbol: "€",
            },
        },
        capital: ["Zagreb"],
        region: "Europe",
        flag: "🇭🇷",
    },
    {
        name: {
            common: "Philippines",
            official: "Republic of the Philippines",
            nativeName: {
                eng: {
                    official: "Republic of the Philippines",
                    common: "Philippines",
                },
                fil: {
                    official: "Republic of the Philippines",
                    common: "Pilipinas",
                },
            },
        },
        currencies: {
            PHP: {
                name: "Philippine peso",
                symbol: "₱",
            },
        },
        capital: ["Manila"],
        region: "Asia",
        flag: "🇵🇭",
    },
    {
        name: {
            common: "Albania",
            official: "Republic of Albania",
            nativeName: {
                sqi: {
                    official: "Republika e Shqipërisë",
                    common: "Shqipëria",
                },
            },
        },
        currencies: {
            ALL: {
                name: "Albanian lek",
                symbol: "L",
            },
        },
        capital: ["Tirana"],
        region: "Europe",
        flag: "🇦🇱",
    },
    {
        name: {
            common: "Bouvet Island",
            official: "Bouvet Island",
            nativeName: {
                nor: {
                    official: "Bouvetøya",
                    common: "Bouvetøya",
                },
            },
        },
        currencies: {},
        capital: [],
        region: "Antarctic",
        flag: "🇧🇻",
    },
    {
        name: {
            common: "Indonesia",
            official: "Republic of Indonesia",
            nativeName: {
                ind: {
                    official: "Republik Indonesia",
                    common: "Indonesia",
                },
            },
        },
        currencies: {
            IDR: {
                name: "Indonesian rupiah",
                symbol: "Rp",
            },
        },
        capital: ["Jakarta"],
        region: "Asia",
        flag: "🇮🇩",
    },
    {
        name: {
            common: "Thailand",
            official: "Kingdom of Thailand",
            nativeName: {
                tha: {
                    official: "ราชอาณาจักรไทย",
                    common: "ประเทศไทย",
                },
            },
        },
        currencies: {
            THB: {
                name: "Thai baht",
                symbol: "฿",
            },
        },
        capital: ["Bangkok"],
        region: "Asia",
        flag: "🇹🇭",
    },
    {
        name: {
            common: "Latvia",
            official: "Republic of Latvia",
            nativeName: {
                lav: {
                    official: "Latvijas Republikas",
                    common: "Latvija",
                },
            },
        },
        currencies: {
            EUR: {
                name: "Euro",
                symbol: "€",
            },
        },
        capital: ["Riga"],
        region: "Europe",
        flag: "🇱🇻",
    },
    {
        name: {
            common: "Ecuador",
            official: "Republic of Ecuador",
            nativeName: {
                spa: {
                    official: "República del Ecuador",
                    common: "Ecuador",
                },
            },
        },
        currencies: {
            USD: {
                name: "United States dollar",
                symbol: "$",
            },
        },
        capital: ["Quito"],
        region: "Americas",
        flag: "🇪🇨",
    },
    {
        name: {
            common: "Kenya",
            official: "Republic of Kenya",
            nativeName: {
                eng: {
                    official: "Republic of Kenya",
                    common: "Kenya",
                },
                swa: {
                    official: "Republic of Kenya",
                    common: "Kenya",
                },
            },
        },
        currencies: {
            KES: {
                name: "Kenyan shilling",
                symbol: "Sh",
            },
        },
        capital: ["Nairobi"],
        region: "Africa",
        flag: "🇰🇪",
    },
    {
        name: {
            common: "Liberia",
            official: "Republic of Liberia",
            nativeName: {
                eng: {
                    official: "Republic of Liberia",
                    common: "Liberia",
                },
            },
        },
        currencies: {
            LRD: {
                name: "Liberian dollar",
                symbol: "$",
            },
        },
        capital: ["Monrovia"],
        region: "Africa",
        flag: "🇱🇷",
    },
    {
        name: {
            common: "British Virgin Islands",
            official: "Virgin Islands",
            nativeName: {
                eng: {
                    official: "Virgin Islands",
                    common: "British Virgin Islands",
                },
            },
        },
        currencies: {
            USD: {
                name: "United States dollar",
                symbol: "$",
            },
        },
        capital: ["Road Town"],
        region: "Americas",
        flag: "🇻🇬",
    },
    {
        name: {
            common: "San Marino",
            official: "Republic of San Marino",
            nativeName: {
                ita: {
                    official: "Repubblica di San Marino",
                    common: "San Marino",
                },
            },
        },
        currencies: {
            EUR: {
                name: "Euro",
                symbol: "€",
            },
        },
        capital: ["City of San Marino"],
        region: "Europe",
        flag: "🇸🇲",
    },
    {
        name: {
            common: "India",
            official: "Republic of India",
            nativeName: {
                eng: {
                    official: "Republic of India",
                    common: "India",
                },
                hin: {
                    official: "भारत गणराज्य",
                    common: "भारत",
                },
                tam: {
                    official: "இந்தியக் குடியரசு",
                    common: "இந்தியா",
                },
            },
        },
        currencies: {
            INR: {
                name: "Indian rupee",
                symbol: "₹",
            },
        },
        capital: ["New Delhi"],
        region: "Asia",
        flag: "🇮🇳",
    },
    {
        name: {
            common: "Bahrain",
            official: "Kingdom of Bahrain",
            nativeName: {
                ara: {
                    official: "مملكة البحرين",
                    common: "\u200fالبحرين",
                },
            },
        },
        currencies: {
            BHD: {
                name: "Bahraini dinar",
                symbol: ".د.ب",
            },
        },
        capital: ["Manama"],
        region: "Asia",
        flag: "🇧🇭",
    },
    {
        name: {
            common: "Malawi",
            official: "Republic of Malawi",
            nativeName: {
                eng: {
                    official: "Republic of Malawi",
                    common: "Malawi",
                },
                nya: {
                    official: "Chalo cha Malawi, Dziko la Malaŵi",
                    common: "Malaŵi",
                },
            },
        },
        currencies: {
            MWK: {
                name: "Malawian kwacha",
                symbol: "MK",
            },
        },
        capital: ["Lilongwe"],
        region: "Africa",
        flag: "🇲🇼",
    },
    {
        name: {
            common: "Iceland",
            official: "Iceland",
            nativeName: {
                isl: {
                    official: "Ísland",
                    common: "Ísland",
                },
            },
        },
        currencies: {
            ISK: {
                name: "Icelandic króna",
                symbol: "kr",
            },
        },
        capital: ["Reykjavik"],
        region: "Europe",
        flag: "🇮🇸",
    },
    {
        name: {
            common: "Brunei",
            official: "Nation of Brunei, Abode of Peace",
            nativeName: {
                msa: {
                    official: "Nation of Brunei, Abode Damai",
                    common: "Negara Brunei Darussalam",
                },
            },
        },
        currencies: {
            BND: {
                name: "Brunei dollar",
                symbol: "$",
            },
            SGD: {
                name: "Singapore dollar",
                symbol: "$",
            },
        },
        capital: ["Bandar Seri Begawan"],
        region: "Asia",
        flag: "🇧🇳",
    },
    {
        name: {
            common: "French Guiana",
            official: "Guiana",
            nativeName: {
                fra: {
                    official: "Guyane",
                    common: "Guyane française",
                },
            },
        },
        currencies: {
            EUR: {
                name: "Euro",
                symbol: "€",
            },
        },
        capital: ["Cayenne"],
        region: "Americas",
        flag: "🇬🇫",
    },
    {
        name: {
            common: "Samoa",
            official: "Independent State of Samoa",
            nativeName: {
                eng: {
                    official: "Independent State of Samoa",
                    common: "Samoa",
                },
                smo: {
                    official: "Malo Saʻoloto Tutoʻatasi o Sāmoa",
                    common: "Sāmoa",
                },
            },
        },
        currencies: {
            WST: {
                name: "Samoan tālā",
                symbol: "T",
            },
        },
        capital: ["Apia"],
        region: "Oceania",
        flag: "🇼🇸",
    },
    {
        name: {
            common: "Georgia",
            official: "Georgia",
            nativeName: {
                kat: {
                    official: "საქართველო",
                    common: "საქართველო",
                },
            },
        },
        currencies: {
            GEL: {
                name: "lari",
                symbol: "₾",
            },
        },
        capital: ["Tbilisi"],
        region: "Asia",
        flag: "🇬🇪",
    },
    {
        name: {
            common: "Caribbean Netherlands",
            official: "Bonaire, Sint Eustatius and Saba",
            nativeName: {
                nld: {
                    official: "Bonaire, Sint Eustatius en Saba",
                    common: "Caribisch Nederland",
                },
                pap: {
                    official: "Boneiru, Sint Eustatius y Saba",
                    common: "Boneiru, Sint Eustatius y Saba",
                },
            },
        },
        currencies: {
            USD: {
                name: "United States dollar",
                symbol: "$",
            },
        },
        capital: ["Kralendijk"],
        region: "Americas",
        flag: "🇧🇶",
    },
    {
        name: {
            common: "Heard Island and McDonald Islands",
            official: "Heard Island and McDonald Islands",
            nativeName: {
                eng: {
                    official: "Heard Island and McDonald Islands",
                    common: "Heard Island and McDonald Islands",
                },
            },
        },
        currencies: {},
        capital: [],
        region: "Antarctic",
        flag: "🇭🇲",
    },
    {
        name: {
            common: "Papua New Guinea",
            official: "Independent State of Papua New Guinea",
            nativeName: {
                eng: {
                    official: "Independent State of Papua New Guinea",
                    common: "Papua New Guinea",
                },
                hmo: {
                    official: "Independen Stet bilong Papua Niugini",
                    common: "Papua Niu Gini",
                },
                tpi: {
                    official: "Independen Stet bilong Papua Niugini",
                    common: "Papua Niugini",
                },
            },
        },
        currencies: {
            PGK: {
                name: "Papua New Guinean kina",
                symbol: "K",
            },
        },
        capital: ["Port Moresby"],
        region: "Oceania",
        flag: "🇵🇬",
    },
    {
        name: {
            common: "Ghana",
            official: "Republic of Ghana",
            nativeName: {
                eng: {
                    official: "Republic of Ghana",
                    common: "Ghana",
                },
            },
        },
        currencies: {
            GHS: {
                name: "Ghanaian cedi",
                symbol: "₵",
            },
        },
        capital: ["Accra"],
        region: "Africa",
        flag: "🇬🇭",
    },
    {
        name: {
            common: "Afghanistan",
            official: "Islamic Republic of Afghanistan",
            nativeName: {
                prs: {
                    official: "جمهوری اسلامی افغانستان",
                    common: "افغانستان",
                },
                pus: {
                    official: "د افغانستان اسلامي جمهوریت",
                    common: "افغانستان",
                },
                tuk: {
                    official: "Owganystan Yslam Respublikasy",
                    common: "Owganystan",
                },
            },
        },
        currencies: {
            AFN: {
                name: "Afghan afghani",
                symbol: "؋",
            },
        },
        capital: ["Kabul"],
        region: "Asia",
        flag: "🇦🇫",
    },
    {
        name: {
            common: "Costa Rica",
            official: "Republic of Costa Rica",
            nativeName: {
                spa: {
                    official: "República de Costa Rica",
                    common: "Costa Rica",
                },
            },
        },
        currencies: {
            CRC: {
                name: "Costa Rican colón",
                symbol: "₡",
            },
        },
        capital: ["San José"],
        region: "Americas",
        flag: "🇨🇷",
    },
    {
        name: {
            common: "Fiji",
            official: "Republic of Fiji",
            nativeName: {
                eng: {
                    official: "Republic of Fiji",
                    common: "Fiji",
                },
                fij: {
                    official: "Matanitu Tugalala o Viti",
                    common: "Viti",
                },
                hif: {
                    official: "रिपब्लिक ऑफ फीजी",
                    common: "फिजी",
                },
            },
        },
        currencies: {
            FJD: {
                name: "Fijian dollar",
                symbol: "$",
            },
        },
        capital: ["Suva"],
        region: "Oceania",
        flag: "🇫🇯",
    },
    {
        name: {
            common: "South Korea",
            official: "Republic of Korea",
            nativeName: {
                kor: {
                    official: "대한민국",
                    common: "한국",
                },
            },
        },
        currencies: {
            KRW: {
                name: "South Korean won",
                symbol: "₩",
            },
        },
        capital: ["Seoul"],
        region: "Asia",
        flag: "🇰🇷",
    },
    {
        name: {
            common: "Taiwan",
            official: "Republic of China (Taiwan)",
            nativeName: {
                zho: {
                    official: "中華民國",
                    common: "台灣",
                },
            },
        },
        currencies: {
            TWD: {
                name: "New Taiwan dollar",
                symbol: "$",
            },
        },
        capital: ["Taipei"],
        region: "Asia",
        flag: "🇹🇼",
    },
    {
        name: {
            common: "Czechia",
            official: "Czech Republic",
            nativeName: {
                ces: {
                    official: "Česká republika",
                    common: "Česko",
                },
                slk: {
                    official: "Česká republika",
                    common: "Česko",
                },
            },
        },
        currencies: {
            CZK: {
                name: "Czech koruna",
                symbol: "Kč",
            },
        },
        capital: ["Prague"],
        region: "Europe",
        flag: "🇨🇿",
    },
    {
        name: {
            common: "Nicaragua",
            official: "Republic of Nicaragua",
            nativeName: {
                spa: {
                    official: "República de Nicaragua",
                    common: "Nicaragua",
                },
            },
        },
        currencies: {
            NIO: {
                name: "Nicaraguan córdoba",
                symbol: "C$",
            },
        },
        capital: ["Managua"],
        region: "Americas",
        flag: "🇳🇮",
    },
    {
        name: {
            common: "Portugal",
            official: "Portuguese Republic",
            nativeName: {
                por: {
                    official: "República português",
                    common: "Portugal",
                },
            },
        },
        currencies: {
            EUR: {
                name: "Euro",
                symbol: "€",
            },
        },
        capital: ["Lisbon"],
        region: "Europe",
        flag: "🇵🇹",
    },
    {
        name: {
            common: "Chile",
            official: "Republic of Chile",
            nativeName: {
                spa: {
                    official: "República de Chile",
                    common: "Chile",
                },
            },
        },
        currencies: {
            CLP: {
                name: "Chilean peso",
                symbol: "$",
            },
        },
        capital: ["Santiago"],
        region: "Americas",
        flag: "🇨🇱",
    },
    {
        name: {
            common: "Gambia",
            official: "Republic of the Gambia",
            nativeName: {
                eng: {
                    official: "Republic of the Gambia",
                    common: "Gambia",
                },
            },
        },
        currencies: {
            GMD: {
                name: "dalasi",
                symbol: "D",
            },
        },
        capital: ["Banjul"],
        region: "Africa",
        flag: "🇬🇲",
    },
    {
        name: {
            common: "Belize",
            official: "Belize",
            nativeName: {
                bjz: {
                    official: "Belize",
                    common: "Belize",
                },
                eng: {
                    official: "Belize",
                    common: "Belize",
                },
                spa: {
                    official: "Belice",
                    common: "Belice",
                },
            },
        },
        currencies: {
            BZD: {
                name: "Belize dollar",
                symbol: "$",
            },
        },
        capital: ["Belmopan"],
        region: "Americas",
        flag: "🇧🇿",
    },
    {
        name: {
            common: "Maldives",
            official: "Republic of the Maldives",
            nativeName: {
                div: {
                    official: "ދިވެހިރާއްޖޭގެ ޖުމްހޫރިއްޔާ",
                    common: "ދިވެހިރާއްޖޭގެ",
                },
            },
        },
        currencies: {
            MVR: {
                name: "Maldivian rufiyaa",
                symbol: ".ރ",
            },
        },
        capital: ["Malé"],
        region: "Asia",
        flag: "🇲🇻",
    },
    {
        name: {
            common: "Vanuatu",
            official: "Republic of Vanuatu",
            nativeName: {
                bis: {
                    official: "Ripablik blong Vanuatu",
                    common: "Vanuatu",
                },
                eng: {
                    official: "Republic of Vanuatu",
                    common: "Vanuatu",
                },
                fra: {
                    official: "République de Vanuatu",
                    common: "Vanuatu",
                },
            },
        },
        currencies: {
            VUV: {
                name: "Vanuatu vatu",
                symbol: "Vt",
            },
        },
        capital: ["Port Vila"],
        region: "Oceania",
        flag: "🇻🇺",
    },
    {
        name: {
            common: "Malaysia",
            official: "Malaysia",
            nativeName: {
                eng: {
                    official: "Malaysia",
                    common: "Malaysia",
                },
                msa: {
                    official: "مليسيا",
                    common: "مليسيا",
                },
            },
        },
        currencies: {
            MYR: {
                name: "Malaysian ringgit",
                symbol: "RM",
            },
        },
        capital: ["Kuala Lumpur"],
        region: "Asia",
        flag: "🇲🇾",
    },
    {
        name: {
            common: "Antigua and Barbuda",
            official: "Antigua and Barbuda",
            nativeName: {
                eng: {
                    official: "Antigua and Barbuda",
                    common: "Antigua and Barbuda",
                },
            },
        },
        currencies: {
            XCD: {
                name: "Eastern Caribbean dollar",
                symbol: "$",
            },
        },
        capital: ["Saint John's"],
        region: "Americas",
        flag: "🇦🇬",
    },
    {
        name: {
            common: "Iran",
            official: "Islamic Republic of Iran",
            nativeName: {
                fas: {
                    official: "جمهوری اسلامی ایران",
                    common: "ایران",
                },
            },
        },
        currencies: {
            IRR: {
                name: "Iranian rial",
                symbol: "﷼",
            },
        },
        capital: ["Tehran"],
        region: "Asia",
        flag: "🇮🇷",
    },
    {
        name: {
            common: "Russia",
            official: "Russian Federation",
            nativeName: {
                rus: {
                    official: "Российская Федерация",
                    common: "Россия",
                },
            },
        },
        currencies: {
            RUB: {
                name: "Russian ruble",
                symbol: "₽",
            },
        },
        capital: ["Moscow"],
        region: "Europe",
        flag: "🇷🇺",
    },
    {
        name: {
            common: "Kiribati",
            official: "Independent and Sovereign Republic of Kiribati",
            nativeName: {
                eng: {
                    official: "Independent and Sovereign Republic of Kiribati",
                    common: "Kiribati",
                },
                gil: {
                    official: "Ribaberiki Kiribati",
                    common: "Kiribati",
                },
            },
        },
        currencies: {
            AUD: {
                name: "Australian dollar",
                symbol: "$",
            },
            KID: {
                name: "Kiribati dollar",
                symbol: "$",
            },
        },
        capital: ["South Tarawa"],
        region: "Oceania",
        flag: "🇰🇮",
    },
    {
        name: {
            common: "Martinique",
            official: "Martinique",
            nativeName: {
                fra: {
                    official: "Martinique",
                    common: "Martinique",
                },
            },
        },
        currencies: {
            EUR: {
                name: "Euro",
                symbol: "€",
            },
        },
        capital: ["Fort-de-France"],
        region: "Americas",
        flag: "🇲🇶",
    },
    {
        name: {
            common: "Bangladesh",
            official: "People's Republic of Bangladesh",
            nativeName: {
                ben: {
                    official: "বাংলাদেশ গণপ্রজাতন্ত্রী",
                    common: "বাংলাদেশ",
                },
            },
        },
        currencies: {
            BDT: {
                name: "Bangladeshi taka",
                symbol: "৳",
            },
        },
        capital: ["Dhaka"],
        region: "Asia",
        flag: "🇧🇩",
    },
    {
        name: {
            common: "Armenia",
            official: "Republic of Armenia",
            nativeName: {
                hye: {
                    official: "Հայաստանի Հանրապետություն",
                    common: "Հայաստան",
                },
            },
        },
        currencies: {
            AMD: {
                name: "Armenian dram",
                symbol: "֏",
            },
        },
        capital: ["Yerevan"],
        region: "Asia",
        flag: "🇦🇲",
    },
    {
        name: {
            common: "Mexico",
            official: "United Mexican States",
            nativeName: {
                spa: {
                    official: "Estados Unidos Mexicanos",
                    common: "México",
                },
            },
        },
        currencies: {
            MXN: {
                name: "Mexican peso",
                symbol: "$",
            },
        },
        capital: ["Mexico City"],
        region: "Americas",
        flag: "🇲🇽",
    },
    {
        name: {
            common: "Estonia",
            official: "Republic of Estonia",
            nativeName: {
                est: {
                    official: "Eesti Vabariik",
                    common: "Eesti",
                },
            },
        },
        currencies: {
            EUR: {
                name: "Euro",
                symbol: "€",
            },
        },
        capital: ["Tallinn"],
        region: "Europe",
        flag: "🇪🇪",
    },
    {
        name: {
            common: "Oman",
            official: "Sultanate of Oman",
            nativeName: {
                ara: {
                    official: "سلطنة عمان",
                    common: "عمان",
                },
            },
        },
        currencies: {
            OMR: {
                name: "Omani rial",
                symbol: "ر.ع.",
            },
        },
        capital: ["Muscat"],
        region: "Asia",
        flag: "🇴🇲",
    },
    {
        name: {
            common: "United States",
            official: "United States of America",
            nativeName: {
                eng: {
                    official: "United States of America",
                    common: "United States",
                },
            },
        },
        currencies: {
            USD: {
                name: "United States dollar",
                symbol: "$",
            },
        },
        capital: ["Washington, D.C."],
        region: "Americas",
        flag: "🇺🇸",
    },
    {
        name: {
            common: "Liechtenstein",
            official: "Principality of Liechtenstein",
            nativeName: {
                deu: {
                    official: "Fürstentum Liechtenstein",
                    common: "Liechtenstein",
                },
            },
        },
        currencies: {
            CHF: {
                name: "Swiss franc",
                symbol: "Fr",
            },
        },
        capital: ["Vaduz"],
        region: "Europe",
        flag: "🇱🇮",
    },
    {
        name: {
            common: "Bahamas",
            official: "Commonwealth of the Bahamas",
            nativeName: {
                eng: {
                    official: "Commonwealth of the Bahamas",
                    common: "Bahamas",
                },
            },
        },
        currencies: {
            BSD: {
                name: "Bahamian dollar",
                symbol: "$",
            },
            USD: {
                name: "United States dollar",
                symbol: "$",
            },
        },
        capital: ["Nassau"],
        region: "Americas",
        flag: "🇧🇸",
    },
    {
        name: {
            common: "Benin",
            official: "Republic of Benin",
            nativeName: {
                fra: {
                    official: "République du Bénin",
                    common: "Bénin",
                },
            },
        },
        currencies: {
            XOF: {
                name: "West African CFA franc",
                symbol: "Fr",
            },
        },
        capital: ["Porto-Novo"],
        region: "Africa",
        flag: "🇧🇯",
    },
    {
        name: {
            common: "Kosovo",
            official: "Republic of Kosovo",
            nativeName: {
                sqi: {
                    official: "Republika e Kosovës",
                    common: "Kosova",
                },
                srp: {
                    official: "Република Косово",
                    common: "Косово",
                },
            },
        },
        currencies: {
            EUR: {
                name: "Euro",
                symbol: "€",
            },
        },
        capital: ["Pristina"],
        region: "Europe",
        flag: "🇽🇰",
    },
    {
        name: {
            common: "Tuvalu",
            official: "Tuvalu",
            nativeName: {
                eng: {
                    official: "Tuvalu",
                    common: "Tuvalu",
                },
                tvl: {
                    official: "Tuvalu",
                    common: "Tuvalu",
                },
            },
        },
        currencies: {
            AUD: {
                name: "Australian dollar",
                symbol: "$",
            },
            TVD: {
                name: "Tuvaluan dollar",
                symbol: "$",
            },
        },
        capital: ["Funafuti"],
        region: "Oceania",
        flag: "🇹🇻",
    },
    {
        name: {
            common: "Faroe Islands",
            official: "Faroe Islands",
            nativeName: {
                dan: {
                    official: "Færøerne",
                    common: "Færøerne",
                },
                fao: {
                    official: "Føroyar",
                    common: "Føroyar",
                },
            },
        },
        currencies: {
            DKK: {
                name: "Danish krone",
                symbol: "kr",
            },
            FOK: {
                name: "Faroese króna",
                symbol: "kr",
            },
        },
        capital: ["Tórshavn"],
        region: "Europe",
        flag: "🇫🇴",
    },
    {
        name: {
            common: "Cayman Islands",
            official: "Cayman Islands",
            nativeName: {
                eng: {
                    official: "Cayman Islands",
                    common: "Cayman Islands",
                },
            },
        },
        currencies: {
            KYD: {
                name: "Cayman Islands dollar",
                symbol: "$",
            },
        },
        capital: ["George Town"],
        region: "Americas",
        flag: "🇰🇾",
    },
    {
        name: {
            common: "Egypt",
            official: "Arab Republic of Egypt",
            nativeName: {
                ara: {
                    official: "جمهورية مصر العربية",
                    common: "مصر",
                },
            },
        },
        currencies: {
            EGP: {
                name: "Egyptian pound",
                symbol: "£",
            },
        },
        capital: ["Cairo"],
        region: "Africa",
        flag: "🇪🇬",
    },
    {
        name: {
            common: "Azerbaijan",
            official: "Republic of Azerbaijan",
            nativeName: {
                aze: {
                    official: "Azərbaycan Respublikası",
                    common: "Azərbaycan",
                },
                rus: {
                    official: "Азербайджанская Республика",
                    common: "Азербайджан",
                },
            },
        },
        currencies: {
            AZN: {
                name: "Azerbaijani manat",
                symbol: "₼",
            },
        },
        capital: ["Baku"],
        region: "Asia",
        flag: "🇦🇿",
    },
    {
        name: {
            common: "Australia",
            official: "Commonwealth of Australia",
            nativeName: {
                eng: {
                    official: "Commonwealth of Australia",
                    common: "Australia",
                },
            },
        },
        currencies: {
            AUD: {
                name: "Australian dollar",
                symbol: "$",
            },
        },
        capital: ["Canberra"],
        region: "Oceania",
        flag: "🇦🇺",
    },
    {
        name: {
            common: "Isle of Man",
            official: "Isle of Man",
            nativeName: {
                eng: {
                    official: "Isle of Man",
                    common: "Isle of Man",
                },
                glv: {
                    official: "Ellan Vannin or Mannin",
                    common: "Mannin",
                },
            },
        },
        currencies: {
            GBP: {
                name: "British pound",
                symbol: "£",
            },
            IMP: {
                name: "Manx pound",
                symbol: "£",
            },
        },
        capital: ["Douglas"],
        region: "Europe",
        flag: "🇮🇲",
    },
    {
        name: {
            common: "Ireland",
            official: "Republic of Ireland",
            nativeName: {
                eng: {
                    official: "Republic of Ireland",
                    common: "Ireland",
                },
                gle: {
                    official: "Poblacht na hÉireann",
                    common: "Éire",
                },
            },
        },
        currencies: {
            EUR: {
                name: "Euro",
                symbol: "€",
            },
        },
        capital: ["Dublin"],
        region: "Europe",
        flag: "🇮🇪",
    },
    {
        name: {
            common: "Barbados",
            official: "Barbados",
            nativeName: {
                eng: {
                    official: "Barbados",
                    common: "Barbados",
                },
            },
        },
        currencies: {
            BBD: {
                name: "Barbadian dollar",
                symbol: "$",
            },
        },
        capital: ["Bridgetown"],
        region: "Americas",
        flag: "🇧🇧",
    },
    {
        name: {
            common: "El Salvador",
            official: "Republic of El Salvador",
            nativeName: {
                spa: {
                    official: "República de El Salvador",
                    common: "El Salvador",
                },
            },
        },
        currencies: {
            USD: {
                name: "United States dollar",
                symbol: "$",
            },
        },
        capital: ["San Salvador"],
        region: "Americas",
        flag: "🇸🇻",
    },
    {
        name: {
            common: "Guatemala",
            official: "Republic of Guatemala",
            nativeName: {
                spa: {
                    official: "República de Guatemala",
                    common: "Guatemala",
                },
            },
        },
        currencies: {
            GTQ: {
                name: "Guatemalan quetzal",
                symbol: "Q",
            },
        },
        capital: ["Guatemala City"],
        region: "Americas",
        flag: "🇬🇹",
    },
    {
        name: {
            common: "Japan",
            official: "Japan",
            nativeName: {
                jpn: {
                    official: "日本",
                    common: "日本",
                },
            },
        },
        currencies: {
            JPY: {
                name: "Japanese yen",
                symbol: "¥",
            },
        },
        capital: ["Tokyo"],
        region: "Asia",
        flag: "🇯🇵",
    },
    {
        name: {
            common: "Vietnam",
            official: "Socialist Republic of Vietnam",
            nativeName: {
                vie: {
                    official: "Cộng hòa xã hội chủ nghĩa Việt Nam",
                    common: "Việt Nam",
                },
            },
        },
        currencies: {
            VND: {
                name: "Vietnamese đồng",
                symbol: "₫",
            },
        },
        capital: ["Hanoi"],
        region: "Asia",
        flag: "🇻🇳",
    },
    {
        name: {
            common: "Northern Mariana Islands",
            official: "Commonwealth of the Northern Mariana Islands",
            nativeName: {
                cal: {
                    official: "Commonwealth of the Northern Mariana Islands",
                    common: "Northern Mariana Islands",
                },
                cha: {
                    official: "Sankattan Siha Na Islas Mariånas",
                    common: "Na Islas Mariånas",
                },
                eng: {
                    official: "Commonwealth of the Northern Mariana Islands",
                    common: "Northern Mariana Islands",
                },
            },
        },
        currencies: {
            USD: {
                name: "United States dollar",
                symbol: "$",
            },
        },
        capital: ["Saipan"],
        region: "Oceania",
        flag: "🇲🇵",
    },
    {
        name: {
            common: "Lithuania",
            official: "Republic of Lithuania",
            nativeName: {
                lit: {
                    official: "Lietuvos Respublikos",
                    common: "Lietuva",
                },
            },
        },
        currencies: {
            EUR: {
                name: "Euro",
                symbol: "€",
            },
        },
        capital: ["Vilnius"],
        region: "Europe",
        flag: "🇱🇹",
    },
    {
        name: {
            common: "Saint Lucia",
            official: "Saint Lucia",
            nativeName: {
                eng: {
                    official: "Saint Lucia",
                    common: "Saint Lucia",
                },
            },
        },
        currencies: {
            XCD: {
                name: "Eastern Caribbean dollar",
                symbol: "$",
            },
        },
        capital: ["Castries"],
        region: "Americas",
        flag: "🇱🇨",
    },
    {
        name: {
            common: "Hong Kong",
            official:
                "Hong Kong Special Administrative Region of the People's Republic of China",
            nativeName: {
                eng: {
                    official:
                        "Hong Kong Special Administrative Region of the People's Republic of China",
                    common: "Hong Kong",
                },
                zho: {
                    official: "中华人民共和国香港特别行政区",
                    common: "香港",
                },
            },
        },
        currencies: {
            HKD: {
                name: "Hong Kong dollar",
                symbol: "$",
            },
        },
        capital: ["City of Victoria"],
        region: "Asia",
        flag: "🇭🇰",
    },
    {
        name: {
            common: "Angola",
            official: "Republic of Angola",
            nativeName: {
                por: {
                    official: "República de Angola",
                    common: "Angola",
                },
            },
        },
        currencies: {
            AOA: {
                name: "Angolan kwanza",
                symbol: "Kz",
            },
        },
        capital: ["Luanda"],
        region: "Africa",
        flag: "🇦🇴",
    },
    {
        name: {
            common: "Mozambique",
            official: "Republic of Mozambique",
            nativeName: {
                por: {
                    official: "República de Moçambique",
                    common: "Moçambique",
                },
            },
        },
        currencies: {
            MZN: {
                name: "Mozambican metical",
                symbol: "MT",
            },
        },
        capital: ["Maputo"],
        region: "Africa",
        flag: "🇲🇿",
    },
    {
        name: {
            common: "Botswana",
            official: "Republic of Botswana",
            nativeName: {
                eng: {
                    official: "Republic of Botswana",
                    common: "Botswana",
                },
                tsn: {
                    official: "Lefatshe la Botswana",
                    common: "Botswana",
                },
            },
        },
        currencies: {
            BWP: {
                name: "Botswana pula",
                symbol: "P",
            },
        },
        capital: ["Gaborone"],
        region: "Africa",
        flag: "🇧🇼",
    },
    {
        name: {
            common: "Germany",
            official: "Federal Republic of Germany",
            nativeName: {
                deu: {
                    official: "Bundesrepublik Deutschland",
                    common: "Deutschland",
                },
            },
        },
        currencies: {
            EUR: {
                name: "Euro",
                symbol: "€",
            },
        },
        capital: ["Berlin"],
        region: "Europe",
        flag: "🇩🇪",
    },
    {
        name: {
            common: "Syria",
            official: "Syrian Arab Republic",
            nativeName: {
                ara: {
                    official: "الجمهورية العربية السورية",
                    common: "سوريا",
                },
            },
        },
        currencies: {
            SYP: {
                name: "Syrian pound",
                symbol: "£",
            },
        },
        capital: ["Damascus"],
        region: "Asia",
        flag: "🇸🇾",
    },
    {
        name: {
            common: "Moldova",
            official: "Republic of Moldova",
            nativeName: {
                ron: {
                    official: "Republica Moldova",
                    common: "Moldova",
                },
            },
        },
        currencies: {
            MDL: {
                name: "Moldovan leu",
                symbol: "L",
            },
        },
        capital: ["Chișinău"],
        region: "Europe",
        flag: "🇲🇩",
    },
    {
        name: {
            common: "Saint Pierre and Miquelon",
            official: "Saint Pierre and Miquelon",
            nativeName: {
                fra: {
                    official: "Collectivité territoriale de Saint-Pierre-et-Miquelon",
                    common: "Saint-Pierre-et-Miquelon",
                },
            },
        },
        currencies: {
            EUR: {
                name: "Euro",
                symbol: "€",
            },
        },
        capital: ["Saint-Pierre"],
        region: "Americas",
        flag: "🇵🇲",
    },
    {
        name: {
            common: "Guernsey",
            official: "Bailiwick of Guernsey",
            nativeName: {
                eng: {
                    official: "Bailiwick of Guernsey",
                    common: "Guernsey",
                },
                fra: {
                    official: "Bailliage de Guernesey",
                    common: "Guernesey",
                },
                nfr: {
                    official: "Dgèrnésiais",
                    common: "Dgèrnésiais",
                },
            },
        },
        currencies: {
            GBP: {
                name: "British pound",
                symbol: "£",
            },
            GGP: {
                name: "Guernsey pound",
                symbol: "£",
            },
        },
        capital: ["St. Peter Port"],
        region: "Europe",
        flag: "🇬🇬",
    },
    {
        name: {
            common: "Wallis and Futuna",
            official: "Territory of the Wallis and Futuna Islands",
            nativeName: {
                fra: {
                    official: "Territoire des îles Wallis et Futuna",
                    common: "Wallis et Futuna",
                },
            },
        },
        currencies: {
            XPF: {
                name: "CFP franc",
                symbol: "₣",
            },
        },
        capital: ["Mata-Utu"],
        region: "Oceania",
        flag: "🇼🇫",
    },
    {
        name: {
            common: "Poland",
            official: "Republic of Poland",
            nativeName: {
                pol: {
                    official: "Rzeczpospolita Polska",
                    common: "Polska",
                },
            },
        },
        currencies: {
            PLN: {
                name: "Polish złoty",
                symbol: "zł",
            },
        },
        capital: ["Warsaw"],
        region: "Europe",
        flag: "🇵🇱",
    },
    {
        name: {
            common: "Trinidad and Tobago",
            official: "Republic of Trinidad and Tobago",
            nativeName: {
                eng: {
                    official: "Republic of Trinidad and Tobago",
                    common: "Trinidad and Tobago",
                },
            },
        },
        currencies: {
            TTD: {
                name: "Trinidad and Tobago dollar",
                symbol: "$",
            },
        },
        capital: ["Port of Spain"],
        region: "Americas",
        flag: "🇹🇹",
    },
    {
        name: {
            common: "British Indian Ocean Territory",
            official: "British Indian Ocean Territory",
            nativeName: {
                eng: {
                    official: "British Indian Ocean Territory",
                    common: "British Indian Ocean Territory",
                },
            },
        },
        currencies: {
            USD: {
                name: "United States dollar",
                symbol: "$",
            },
        },
        capital: ["Diego Garcia"],
        region: "Africa",
        flag: "🇮🇴",
    },
    {
        name: {
            common: "Marshall Islands",
            official: "Republic of the Marshall Islands",
            nativeName: {
                eng: {
                    official: "Republic of the Marshall Islands",
                    common: "Marshall Islands",
                },
                mah: {
                    official: "Republic of the Marshall Islands",
                    common: "M̧ajeļ",
                },
            },
        },
        currencies: {
            USD: {
                name: "United States dollar",
                symbol: "$",
            },
        },
        capital: ["Majuro"],
        region: "Oceania",
        flag: "🇲🇭",
    },
    {
        name: {
            common: "Austria",
            official: "Republic of Austria",
            nativeName: {
                bar: {
                    official: "Republik Österreich",
                    common: "Österreich",
                },
            },
        },
        currencies: {
            EUR: {
                name: "Euro",
                symbol: "€",
            },
        },
        capital: ["Vienna"],
        region: "Europe",
        flag: "🇦🇹",
    },
    {
        name: {
            common: "Kazakhstan",
            official: "Republic of Kazakhstan",
            nativeName: {
                kaz: {
                    official: "Қазақстан Республикасы",
                    common: "Қазақстан",
                },
                rus: {
                    official: "Республика Казахстан",
                    common: "Казахстан",
                },
            },
        },
        currencies: {
            KZT: {
                name: "Kazakhstani tenge",
                symbol: "₸",
            },
        },
        capital: ["Nur-Sultan"],
        region: "Asia",
        flag: "🇰🇿",
    },
    {
        name: {
            common: "Aruba",
            official: "Aruba",
            nativeName: {
                nld: {
                    official: "Aruba",
                    common: "Aruba",
                },
                pap: {
                    official: "Aruba",
                    common: "Aruba",
                },
            },
        },
        currencies: {
            AWG: {
                name: "Aruban florin",
                symbol: "ƒ",
            },
        },
        capital: ["Oranjestad"],
        region: "Americas",
        flag: "🇦🇼",
    },
    {
        name: {
            common: "South Africa",
            official: "Republic of South Africa",
            nativeName: {
                afr: {
                    official: "Republiek van Suid-Afrika",
                    common: "South Africa",
                },
                eng: {
                    official: "Republic of South Africa",
                    common: "South Africa",
                },
                nbl: {
                    official: "IRiphabliki yeSewula Afrika",
                    common: "Sewula Afrika",
                },
                nso: {
                    official: "Rephaboliki ya Afrika-Borwa ",
                    common: "Afrika-Borwa",
                },
                sot: {
                    official: "Rephaboliki ya Afrika Borwa",
                    common: "Afrika Borwa",
                },
                ssw: {
                    official: "IRiphabhulikhi yeNingizimu Afrika",
                    common: "Ningizimu Afrika",
                },
                tsn: {
                    official: "Rephaboliki ya Aforika Borwa",
                    common: "Aforika Borwa",
                },
                tso: {
                    official: "Riphabliki ra Afrika Dzonga",
                    common: "Afrika Dzonga",
                },
                ven: {
                    official: "Riphabuḽiki ya Afurika Tshipembe",
                    common: "Afurika Tshipembe",
                },
                xho: {
                    official: "IRiphabliki yaseMzantsi Afrika",
                    common: "Mzantsi Afrika",
                },
                zul: {
                    official: "IRiphabliki yaseNingizimu Afrika",
                    common: "Ningizimu Afrika",
                },
            },
        },
        currencies: {
            ZAR: {
                name: "South African rand",
                symbol: "R",
            },
        },
        capital: ["Pretoria", "Bloemfontein", "Cape Town"],
        region: "Africa",
        flag: "🇿🇦",
    },
    {
        name: {
            common: "Denmark",
            official: "Kingdom of Denmark",
            nativeName: {
                dan: {
                    official: "Kongeriget Danmark",
                    common: "Danmark",
                },
            },
        },
        currencies: {
            DKK: {
                name: "Danish krone",
                symbol: "kr",
            },
        },
        capital: ["Copenhagen"],
        region: "Europe",
        flag: "🇩🇰",
    },
    {
        name: {
            common: "Suriname",
            official: "Republic of Suriname",
            nativeName: {
                nld: {
                    official: "Republiek Suriname",
                    common: "Suriname",
                },
            },
        },
        currencies: {
            SRD: {
                name: "Surinamese dollar",
                symbol: "$",
            },
        },
        capital: ["Paramaribo"],
        region: "Americas",
        flag: "🇸🇷",
    },
    {
        name: {
            common: "Bermuda",
            official: "Bermuda",
            nativeName: {
                eng: {
                    official: "Bermuda",
                    common: "Bermuda",
                },
            },
        },
        currencies: {
            BMD: {
                name: "Bermudian dollar",
                symbol: "$",
            },
        },
        capital: ["Hamilton"],
        region: "Americas",
        flag: "🇧🇲",
    },
    {
        name: {
            common: "Montserrat",
            official: "Montserrat",
            nativeName: {
                eng: {
                    official: "Montserrat",
                    common: "Montserrat",
                },
            },
        },
        currencies: {
            XCD: {
                name: "Eastern Caribbean dollar",
                symbol: "$",
            },
        },
        capital: ["Plymouth"],
        region: "Americas",
        flag: "🇲🇸",
    },
    {
        name: {
            common: "Ivory Coast",
            official: "Republic of Côte d'Ivoire",
            nativeName: {
                fra: {
                    official: "République de Côte d'Ivoire",
                    common: "Côte d'Ivoire",
                },
            },
        },
        currencies: {
            XOF: {
                name: "West African CFA franc",
                symbol: "Fr",
            },
        },
        capital: ["Yamoussoukro"],
        region: "Africa",
        flag: "🇨🇮",
    },
    {
        name: {
            common: "Mauritania",
            official: "Islamic Republic of Mauritania",
            nativeName: {
                ara: {
                    official: "الجمهورية الإسلامية الموريتانية",
                    common: "موريتانيا",
                },
            },
        },
        currencies: {
            MRU: {
                name: "Mauritanian ouguiya",
                symbol: "UM",
            },
        },
        capital: ["Nouakchott"],
        region: "Africa",
        flag: "🇲🇷",
    },
    {
        name: {
            common: "Sierra Leone",
            official: "Republic of Sierra Leone",
            nativeName: {
                eng: {
                    official: "Republic of Sierra Leone",
                    common: "Sierra Leone",
                },
            },
        },
        currencies: {
            SLL: {
                name: "Sierra Leonean leone",
                symbol: "Le",
            },
        },
        capital: ["Freetown"],
        region: "Africa",
        flag: "🇸🇱",
    },
    {
        name: {
            common: "Guinea",
            official: "Republic of Guinea",
            nativeName: {
                fra: {
                    official: "République de Guinée",
                    common: "Guinée",
                },
            },
        },
        currencies: {
            GNF: {
                name: "Guinean franc",
                symbol: "Fr",
            },
        },
        capital: ["Conakry"],
        region: "Africa",
        flag: "🇬🇳",
    },
    {
        name: {
            common: "French Polynesia",
            official: "French Polynesia",
            nativeName: {
                fra: {
                    official: "Polynésie française",
                    common: "Polynésie française",
                },
            },
        },
        currencies: {
            XPF: {
                name: "CFP franc",
                symbol: "₣",
            },
        },
        capital: ["Papeetē"],
        region: "Oceania",
        flag: "🇵🇫",
    },
    {
        name: {
            common: "Pakistan",
            official: "Islamic Republic of Pakistan",
            nativeName: {
                eng: {
                    official: "Islamic Republic of Pakistan",
                    common: "Pakistan",
                },
                urd: {
                    official: "اسلامی جمہوریۂ پاكستان",
                    common: "پاكستان",
                },
            },
        },
        currencies: {
            PKR: {
                name: "Pakistani rupee",
                symbol: "₨",
            },
        },
        capital: ["Islamabad"],
        region: "Asia",
        flag: "🇵🇰",
    },
    {
        name: {
            common: "United States Minor Outlying Islands",
            official: "United States Minor Outlying Islands",
            nativeName: {
                eng: {
                    official: "United States Minor Outlying Islands",
                    common: "United States Minor Outlying Islands",
                },
            },
        },
        currencies: {
            USD: {
                name: "United States dollar",
                symbol: "$",
            },
        },
        capital: ["Washington DC"],
        region: "Americas",
        flag: "🇺🇲",
    },
    {
        name: {
            common: "Lesotho",
            official: "Kingdom of Lesotho",
            nativeName: {
                eng: {
                    official: "Kingdom of Lesotho",
                    common: "Lesotho",
                },
                sot: {
                    official: "Kingdom of Lesotho",
                    common: "Lesotho",
                },
            },
        },
        currencies: {
            LSL: {
                name: "Lesotho loti",
                symbol: "L",
            },
            ZAR: {
                name: "South African rand",
                symbol: "R",
            },
        },
        capital: ["Maseru"],
        region: "Africa",
        flag: "🇱🇸",
    },
    {
        name: {
            common: "Senegal",
            official: "Republic of Senegal",
            nativeName: {
                fra: {
                    official: "République du Sénégal",
                    common: "Sénégal",
                },
            },
        },
        currencies: {
            XOF: {
                name: "West African CFA franc",
                symbol: "Fr",
            },
        },
        capital: ["Dakar"],
        region: "Africa",
        flag: "🇸🇳",
    },
    {
        name: {
            common: "Tajikistan",
            official: "Republic of Tajikistan",
            nativeName: {
                rus: {
                    official: "Республика Таджикистан",
                    common: "Таджикистан",
                },
                tgk: {
                    official: "Ҷумҳурии Тоҷикистон",
                    common: "Тоҷикистон",
                },
            },
        },
        currencies: {
            TJS: {
                name: "Tajikistani somoni",
                symbol: "ЅМ",
            },
        },
        capital: ["Dushanbe"],
        region: "Asia",
        flag: "🇹🇯",
    },
    {
        name: {
            common: "Switzerland",
            official: "Swiss Confederation",
            nativeName: {
                fra: {
                    official: "Confédération suisse",
                    common: "Suisse",
                },
                gsw: {
                    official: "Schweizerische Eidgenossenschaft",
                    common: "Schweiz",
                },
                ita: {
                    official: "Confederazione Svizzera",
                    common: "Svizzera",
                },
                roh: {
                    official: "Confederaziun svizra",
                    common: "Svizra",
                },
            },
        },
        currencies: {
            CHF: {
                name: "Swiss franc",
                symbol: "Fr.",
            },
        },
        capital: ["Bern"],
        region: "Europe",
        flag: "🇨🇭",
    },
    {
        name: {
            common: "Eritrea",
            official: "State of Eritrea",
            nativeName: {
                ara: {
                    official: "دولة إرتريا",
                    common: "إرتريا\u200e",
                },
                eng: {
                    official: "State of Eritrea",
                    common: "Eritrea",
                },
                tir: {
                    official: "ሃገረ ኤርትራ",
                    common: "ኤርትራ",
                },
            },
        },
        currencies: {
            ERN: {
                name: "Eritrean nakfa",
                symbol: "Nfk",
            },
        },
        capital: ["Asmara"],
        region: "Africa",
        flag: "🇪🇷",
    },
    {
        name: {
            common: "French Southern and Antarctic Lands",
            official: "Territory of the French Southern and Antarctic Lands",
            nativeName: {
                fra: {
                    official:
                        "Territoire des Terres australes et antarctiques françaises",
                    common: "Terres australes et antarctiques françaises",
                },
            },
        },
        currencies: {
            EUR: {
                name: "Euro",
                symbol: "€",
            },
        },
        capital: ["Port-aux-Français"],
        region: "Antarctic",
        flag: "🇹🇫",
    },
    {
        name: {
            common: "Jersey",
            official: "Bailiwick of Jersey",
            nativeName: {
                eng: {
                    official: "Bailiwick of Jersey",
                    common: "Jersey",
                },
                fra: {
                    official: "Bailliage de Jersey",
                    common: "Jersey",
                },
                nrf: {
                    official: "Bailliage dé Jèrri",
                    common: "Jèrri",
                },
            },
        },
        currencies: {
            GBP: {
                name: "British pound",
                symbol: "£",
            },
            JEP: {
                name: "Jersey pound",
                symbol: "£",
            },
        },
        capital: ["Saint Helier"],
        region: "Europe",
        flag: "🇯🇪",
    },
    {
        name: {
            common: "Cambodia",
            official: "Kingdom of Cambodia",
            nativeName: {
                khm: {
                    official: "ព្រះរាជាណាចក្រកម្ពុជា",
                    common: "Kâmpŭchéa",
                },
            },
        },
        currencies: {
            KHR: {
                name: "Cambodian riel",
                symbol: "៛",
            },
            USD: {
                name: "United States dollar",
                symbol: "$",
            },
        },
        capital: ["Phnom Penh"],
        region: "Asia",
        flag: "🇰🇭",
    },
    {
        name: {
            common: "Saint Vincent and the Grenadines",
            official: "Saint Vincent and the Grenadines",
            nativeName: {
                eng: {
                    official: "Saint Vincent and the Grenadines",
                    common: "Saint Vincent and the Grenadines",
                },
            },
        },
        currencies: {
            XCD: {
                name: "Eastern Caribbean dollar",
                symbol: "$",
            },
        },
        capital: ["Kingstown"],
        region: "Americas",
        flag: "🇻🇨",
    },
    {
        name: {
            common: "Sint Maarten",
            official: "Sint Maarten",
            nativeName: {
                eng: {
                    official: "Sint Maarten",
                    common: "Sint Maarten",
                },
                fra: {
                    official: "Saint-Martin",
                    common: "Saint-Martin",
                },
                nld: {
                    official: "Sint Maarten",
                    common: "Sint Maarten",
                },
            },
        },
        currencies: {
            ANG: {
                name: "Netherlands Antillean guilder",
                symbol: "ƒ",
            },
        },
        capital: ["Philipsburg"],
        region: "Americas",
        flag: "🇸🇽",
    },
    {
        name: {
            common: "Vatican City",
            official: "Vatican City State",
            nativeName: {
                ita: {
                    official: "Stato della Città del Vaticano",
                    common: "Vaticano",
                },
                lat: {
                    official: "Status Civitatis Vaticanæ",
                    common: "Vaticanæ",
                },
            },
        },
        currencies: {
            EUR: {
                name: "Euro",
                symbol: "€",
            },
        },
        capital: ["Vatican City"],
        region: "Europe",
        flag: "🇻🇦",
    },
    {
        name: {
            common: "Uruguay",
            official: "Oriental Republic of Uruguay",
            nativeName: {
                spa: {
                    official: "República Oriental del Uruguay",
                    common: "Uruguay",
                },
            },
        },
        currencies: {
            UYU: {
                name: "Uruguayan peso",
                symbol: "$",
            },
        },
        capital: ["Montevideo"],
        region: "Americas",
        flag: "🇺🇾",
    },
    {
        name: {
            common: "Western Sahara",
            official: "Sahrawi Arab Democratic Republic",
            nativeName: {
                ber: {
                    official: "Sahrawi Arab Democratic Republic",
                    common: "Western Sahara",
                },
                mey: {
                    official: "الجمهورية العربية الصحراوية الديمقراطية",
                    common: "الصحراء الغربية",
                },
                spa: {
                    official: "República Árabe Saharaui Democrática",
                    common: "Sahara Occidental",
                },
            },
        },
        currencies: {
            DZD: {
                name: "Algerian dinar",
                symbol: "دج",
            },
            MAD: {
                name: "Moroccan dirham",
                symbol: "DH",
            },
            MRU: {
                name: "Mauritanian ouguiya",
                symbol: "UM",
            },
        },
        capital: ["El Aaiún"],
        region: "Africa",
        flag: "🇪🇭",
    },
    {
        name: {
            common: "Cape Verde",
            official: "Republic of Cabo Verde",
            nativeName: {
                por: {
                    official: "República de Cabo Verde",
                    common: "Cabo Verde",
                },
            },
        },
        currencies: {
            CVE: {
                name: "Cape Verdean escudo",
                symbol: "Esc",
            },
        },
        capital: ["Praia"],
        region: "Africa",
        flag: "🇨🇻",
    },
    {
        name: {
            common: "Italy",
            official: "Italian Republic",
            nativeName: {
                ita: {
                    official: "Repubblica italiana",
                    common: "Italia",
                },
            },
        },
        currencies: {
            EUR: {
                name: "Euro",
                symbol: "€",
            },
        },
        capital: ["Rome"],
        region: "Europe",
        flag: "🇮🇹",
    },
    {
        name: {
            common: "United Kingdom",
            official: "United Kingdom of Great Britain and Northern Ireland",
            nativeName: {
                eng: {
                    official: "United Kingdom of Great Britain and Northern Ireland",
                    common: "United Kingdom",
                },
            },
        },
        currencies: {
            GBP: {
                name: "British pound",
                symbol: "£",
            },
        },
        capital: ["London"],
        region: "Europe",
        flag: "🇬🇧",
    },
    {
        name: {
            common: "Macau",
            official:
                "Macao Special Administrative Region of the People's Republic of China",
            nativeName: {
                por: {
                    official:
                        "Região Administrativa Especial de Macau da República Popular da China",
                    common: "Macau",
                },
                zho: {
                    official: "中华人民共和国澳门特别行政区",
                    common: "澳门",
                },
            },
        },
        currencies: {
            MOP: {
                name: "Macanese pataca",
                symbol: "P",
            },
        },
        capital: [],
        region: "Asia",
        flag: "🇲🇴",
    },
    {
        name: {
            common: "Guyana",
            official: "Co-operative Republic of Guyana",
            nativeName: {
                eng: {
                    official: "Co-operative Republic of Guyana",
                    common: "Guyana",
                },
            },
        },
        currencies: {
            GYD: {
                name: "Guyanese dollar",
                symbol: "$",
            },
        },
        capital: ["Georgetown"],
        region: "Americas",
        flag: "🇬🇾",
    },
    {
        name: {
            common: "Norway",
            official: "Kingdom of Norway",
            nativeName: {
                nno: {
                    official: "Kongeriket Noreg",
                    common: "Noreg",
                },
                nob: {
                    official: "Kongeriket Norge",
                    common: "Norge",
                },
                smi: {
                    official: "Norgga gonagasriika",
                    common: "Norgga",
                },
            },
        },
        currencies: {
            NOK: {
                name: "Norwegian krone",
                symbol: "kr",
            },
        },
        capital: ["Oslo"],
        region: "Europe",
        flag: "🇳🇴",
    },
    {
        name: {
            common: "New Caledonia",
            official: "New Caledonia",
            nativeName: {
                fra: {
                    official: "Nouvelle-Calédonie",
                    common: "Nouvelle-Calédonie",
                },
            },
        },
        currencies: {
            XPF: {
                name: "CFP franc",
                symbol: "₣",
            },
        },
        capital: ["Nouméa"],
        region: "Oceania",
        flag: "🇳🇨",
    },
    {
        name: {
            common: "South Sudan",
            official: "Republic of South Sudan",
            nativeName: {
                eng: {
                    official: "Republic of South Sudan",
                    common: "South Sudan",
                },
            },
        },
        currencies: {
            SSP: {
                name: "South Sudanese pound",
                symbol: "£",
            },
        },
        capital: ["Juba"],
        region: "Africa",
        flag: "🇸🇸",
    },
    {
        name: {
            common: "Burkina Faso",
            official: "Burkina Faso",
            nativeName: {
                fra: {
                    official: "République du Burkina",
                    common: "Burkina Faso",
                },
            },
        },
        currencies: {
            XOF: {
                name: "West African CFA franc",
                symbol: "Fr",
            },
        },
        capital: ["Ouagadougou"],
        region: "Africa",
        flag: "🇧🇫",
    },
    {
        name: {
            common: "Guadeloupe",
            official: "Guadeloupe",
            nativeName: {
                fra: {
                    official: "Guadeloupe",
                    common: "Guadeloupe",
                },
            },
        },
        currencies: {
            EUR: {
                name: "Euro",
                symbol: "€",
            },
        },
        capital: ["Basse-Terre"],
        region: "Americas",
        flag: "🇬🇵",
    },
    {
        name: {
            common: "Lebanon",
            official: "Lebanese Republic",
            nativeName: {
                ara: {
                    official: "الجمهورية اللبنانية",
                    common: "لبنان",
                },
                fra: {
                    official: "République libanaise",
                    common: "Liban",
                },
            },
        },
        currencies: {
            LBP: {
                name: "Lebanese pound",
                symbol: "ل.ل",
            },
        },
        capital: ["Beirut"],
        region: "Asia",
        flag: "🇱🇧",
    },
    {
        name: {
            common: "Saint Kitts and Nevis",
            official: "Federation of Saint Christopher and Nevis",
            nativeName: {
                eng: {
                    official: "Federation of Saint Christopher and Nevis",
                    common: "Saint Kitts and Nevis",
                },
            },
        },
        currencies: {
            XCD: {
                name: "Eastern Caribbean dollar",
                symbol: "$",
            },
        },
        capital: ["Basseterre"],
        region: "Americas",
        flag: "🇰🇳",
    },
    {
        name: {
            common: "Kuwait",
            official: "State of Kuwait",
            nativeName: {
                ara: {
                    official: "دولة الكويت",
                    common: "الكويت",
                },
            },
        },
        currencies: {
            KWD: {
                name: "Kuwaiti dinar",
                symbol: "د.ك",
            },
        },
        capital: ["Kuwait City"],
        region: "Asia",
        flag: "🇰🇼",
    },
    {
        name: {
            common: "South Georgia",
            official: "South Georgia and the South Sandwich Islands",
            nativeName: {
                eng: {
                    official: "South Georgia and the South Sandwich Islands",
                    common: "South Georgia",
                },
            },
        },
        currencies: {
            SHP: {
                name: "Saint Helena pound",
                symbol: "£",
            },
        },
        capital: ["King Edward Point"],
        region: "Antarctic",
        flag: "🇬🇸",
    },
    {
        name: {
            common: "Luxembourg",
            official: "Grand Duchy of Luxembourg",
            nativeName: {
                deu: {
                    official: "Großherzogtum Luxemburg",
                    common: "Luxemburg",
                },
                fra: {
                    official: "Grand-Duché de Luxembourg",
                    common: "Luxembourg",
                },
                ltz: {
                    official: "Groussherzogtum Lëtzebuerg",
                    common: "Lëtzebuerg",
                },
            },
        },
        currencies: {
            EUR: {
                name: "Euro",
                symbol: "€",
            },
        },
        capital: ["Luxembourg"],
        region: "Europe",
        flag: "🇱🇺",
    },
    {
        name: {
            common: "Myanmar",
            official: "Republic of the Union of Myanmar",
            nativeName: {
                mya: {
                    official: "ပြည်ထောင်စု သမ္မတ မြန်မာနိုင်ငံတော်",
                    common: "မြန်မာ",
                },
            },
        },
        currencies: {
            MMK: {
                name: "Burmese kyat",
                symbol: "Ks",
            },
        },
        capital: ["Naypyidaw"],
        region: "Asia",
        flag: "🇲🇲",
    },
    {
        name: {
            common: "Israel",
            official: "State of Israel",
            nativeName: {
                ara: {
                    official: "دولة إسرائيل",
                    common: "إسرائيل",
                },
                heb: {
                    official: "מדינת ישראל",
                    common: "ישראל",
                },
            },
        },
        currencies: {
            ILS: {
                name: "Israeli new shekel",
                symbol: "₪",
            },
        },
        capital: ["Jerusalem"],
        region: "Asia",
        flag: "🇮🇱",
    },
    {
        name: {
            common: "Turkmenistan",
            official: "Turkmenistan",
            nativeName: {
                rus: {
                    official: "Туркменистан",
                    common: "Туркмения",
                },
                tuk: {
                    official: "Türkmenistan",
                    common: "Türkmenistan",
                },
            },
        },
        currencies: {
            TMT: {
                name: "Turkmenistan manat",
                symbol: "m",
            },
        },
        capital: ["Ashgabat"],
        region: "Asia",
        flag: "🇹🇲",
    },
    {
        name: {
            common: "Greece",
            official: "Hellenic Republic",
            nativeName: {
                ell: {
                    official: "Ελληνική Δημοκρατία",
                    common: "Ελλάδα",
                },
            },
        },
        currencies: {
            EUR: {
                name: "Euro",
                symbol: "€",
            },
        },
        capital: ["Athens"],
        region: "Europe",
        flag: "🇬🇷",
    },
    {
        name: {
            common: "Monaco",
            official: "Principality of Monaco",
            nativeName: {
                fra: {
                    official: "Principauté de Monaco",
                    common: "Monaco",
                },
            },
        },
        currencies: {
            EUR: {
                name: "Euro",
                symbol: "€",
            },
        },
        capital: ["Monaco"],
        region: "Europe",
        flag: "🇲🇨",
    },
    {
        name: {
            common: "Venezuela",
            official: "Bolivarian Republic of Venezuela",
            nativeName: {
                spa: {
                    official: "República Bolivariana de Venezuela",
                    common: "Venezuela",
                },
            },
        },
        currencies: {
            VES: {
                name: "Venezuelan bolívar soberano",
                symbol: "Bs.S.",
            },
        },
        capital: ["Caracas"],
        region: "Americas",
        flag: "🇻🇪",
    },
    {
        name: {
            common: "Republic of the Congo",
            official: "Republic of the Congo",
            nativeName: {
                fra: {
                    official: "République du Congo",
                    common: "République du Congo",
                },
                kon: {
                    official: "Repubilika ya Kongo",
                    common: "Repubilika ya Kongo",
                },
                lin: {
                    official: "Republíki ya Kongó",
                    common: "Republíki ya Kongó",
                },
            },
        },
        currencies: {
            XAF: {
                name: "Central African CFA franc",
                symbol: "Fr",
            },
        },
        capital: ["Brazzaville"],
        region: "Africa",
        flag: "🇨🇬",
    },
    {
        name: {
            common: "Spain",
            official: "Kingdom of Spain",
            nativeName: {
                spa: {
                    official: "Reino de España",
                    common: "España",
                },
            },
        },
        currencies: {
            EUR: {
                name: "Euro",
                symbol: "€",
            },
        },
        capital: ["Madrid"],
        region: "Europe",
        flag: "🇪🇸",
    },
    {
        name: {
            common: "Norfolk Island",
            official: "Territory of Norfolk Island",
            nativeName: {
                eng: {
                    official: "Territory of Norfolk Island",
                    common: "Norfolk Island",
                },
                pih: {
                    official: "Teratri of Norf'k Ailen",
                    common: "Norf'k Ailen",
                },
            },
        },
        currencies: {
            AUD: {
                name: "Australian dollar",
                symbol: "$",
            },
        },
        capital: ["Kingston"],
        region: "Oceania",
        flag: "🇳🇫",
    },
    {
        name: {
            common: "Dominica",
            official: "Commonwealth of Dominica",
            nativeName: {
                eng: {
                    official: "Commonwealth of Dominica",
                    common: "Dominica",
                },
            },
        },
        currencies: {
            XCD: {
                name: "Eastern Caribbean dollar",
                symbol: "$",
            },
        },
        capital: ["Roseau"],
        region: "Americas",
        flag: "🇩🇲",
    },
    {
        name: {
            common: "Tunisia",
            official: "Tunisian Republic",
            nativeName: {
                ara: {
                    official: "الجمهورية التونسية",
                    common: "تونس",
                },
            },
        },
        currencies: {
            TND: {
                name: "Tunisian dinar",
                symbol: "د.ت",
            },
        },
        capital: ["Tunis"],
        region: "Africa",
        flag: "🇹🇳",
    },
    {
        name: {
            common: "Turkey",
            official: "Republic of Turkey",
            nativeName: {
                tur: {
                    official: "Türkiye Cumhuriyeti",
                    common: "Türkiye",
                },
            },
        },
        currencies: {
            TRY: {
                name: "Turkish lira",
                symbol: "₺",
            },
        },
        capital: ["Ankara"],
        region: "Asia",
        flag: "🇹🇷",
    },
    {
        name: {
            common: "Colombia",
            official: "Republic of Colombia",
            nativeName: {
                spa: {
                    official: "República de Colombia",
                    common: "Colombia",
                },
            },
        },
        currencies: {
            COP: {
                name: "Colombian peso",
                symbol: "$",
            },
        },
        capital: ["Bogotá"],
        region: "Americas",
        flag: "🇨🇴",
    },
    {
        name: {
            common: "Comoros",
            official: "Union of the Comoros",
            nativeName: {
                ara: {
                    official: "الاتحاد القمري",
                    common: "القمر\u200e",
                },
                fra: {
                    official: "Union des Comores",
                    common: "Comores",
                },
                zdj: {
                    official: "Udzima wa Komori",
                    common: "Komori",
                },
            },
        },
        currencies: {
            KMF: {
                name: "Comorian franc",
                symbol: "Fr",
            },
        },
        capital: ["Moroni"],
        region: "Africa",
        flag: "🇰🇲",
    },
    {
        name: {
            common: "Solomon Islands",
            official: "Solomon Islands",
            nativeName: {
                eng: {
                    official: "Solomon Islands",
                    common: "Solomon Islands",
                },
            },
        },
        currencies: {
            SBD: {
                name: "Solomon Islands dollar",
                symbol: "$",
            },
        },
        capital: ["Honiara"],
        region: "Oceania",
        flag: "🇸🇧",
    },
    {
        name: {
            common: "Saint Barthélemy",
            official: "Collectivity of Saint Barthélemy",
            nativeName: {
                fra: {
                    official: "Collectivité de Saint-Barthélemy",
                    common: "Saint-Barthélemy",
                },
            },
        },
        currencies: {
            EUR: {
                name: "Euro",
                symbol: "€",
            },
        },
        capital: ["Gustavia"],
        region: "Americas",
        flag: "🇧🇱",
    },
    {
        name: {
            common: "Uzbekistan",
            official: "Republic of Uzbekistan",
            nativeName: {
                rus: {
                    official: "Республика Узбекистан",
                    common: "Узбекистан",
                },
                uzb: {
                    official: "O'zbekiston Respublikasi",
                    common: "O‘zbekiston",
                },
            },
        },
        currencies: {
            UZS: {
                name: "Uzbekistani soʻm",
                symbol: "so'm",
            },
        },
        capital: ["Tashkent"],
        region: "Asia",
        flag: "🇺🇿",
    },
    {
        name: {
            common: "Palestine",
            official: "State of Palestine",
            nativeName: {
                ara: {
                    official: "دولة فلسطين",
                    common: "فلسطين",
                },
            },
        },
        currencies: {
            EGP: {
                name: "Egyptian pound",
                symbol: "E£",
            },
            ILS: {
                name: "Israeli new shekel",
                symbol: "₪",
            },
            JOD: {
                name: "Jordanian dinar",
                symbol: "JD",
            },
        },
        capital: ["Ramallah", "Jerusalem"],
        region: "Asia",
        flag: "🇵🇸",
    },
    {
        name: {
            common: "Antarctica",
            official: "Antarctica",
            nativeName: {},
        },
        currencies: {},
        capital: [],
        region: "Antarctic",
        flag: "🇦🇶",
    },
    {
        name: {
            common: "Cuba",
            official: "Republic of Cuba",
            nativeName: {
                spa: {
                    official: "República de Cuba",
                    common: "Cuba",
                },
            },
        },
        currencies: {
            CUC: {
                name: "Cuban convertible peso",
                symbol: "$",
            },
            CUP: {
                name: "Cuban peso",
                symbol: "$",
            },
        },
        capital: ["Havana"],
        region: "Americas",
        flag: "🇨🇺",
    },
    {
        name: {
            common: "Gabon",
            official: "Gabonese Republic",
            nativeName: {
                fra: {
                    official: "République gabonaise",
                    common: "Gabon",
                },
            },
        },
        currencies: {
            XAF: {
                name: "Central African CFA franc",
                symbol: "Fr",
            },
        },
        capital: ["Libreville"],
        region: "Africa",
        flag: "🇬🇦",
    },
    {
        name: {
            common: "Kyrgyzstan",
            official: "Kyrgyz Republic",
            nativeName: {
                kir: {
                    official: "Кыргыз Республикасы",
                    common: "Кыргызстан",
                },
                rus: {
                    official: "Кыргызская Республика",
                    common: "Киргизия",
                },
            },
        },
        currencies: {
            KGS: {
                name: "Kyrgyzstani som",
                symbol: "с",
            },
        },
        capital: ["Bishkek"],
        region: "Asia",
        flag: "🇰🇬",
    },
    {
        name: {
            common: "Micronesia",
            official: "Federated States of Micronesia",
            nativeName: {
                eng: {
                    official: "Federated States of Micronesia",
                    common: "Micronesia",
                },
            },
        },
        currencies: {
            USD: {
                name: "United States dollar",
                symbol: "$",
            },
        },
        capital: ["Palikir"],
        region: "Oceania",
        flag: "🇫🇲",
    },
    {
        name: {
            common: "Sweden",
            official: "Kingdom of Sweden",
            nativeName: {
                swe: {
                    official: "Konungariket Sverige",
                    common: "Sverige",
                },
            },
        },
        currencies: {
            SEK: {
                name: "Swedish krona",
                symbol: "kr",
            },
        },
        capital: ["Stockholm"],
        region: "Europe",
        flag: "🇸🇪",
    },
    {
        name: {
            common: "Saint Martin",
            official: "Saint Martin",
            nativeName: {
                fra: {
                    official: "Saint-Martin",
                    common: "Saint-Martin",
                },
            },
        },
        currencies: {
            EUR: {
                name: "Euro",
                symbol: "€",
            },
        },
        capital: ["Marigot"],
        region: "Americas",
        flag: "🇲🇫",
    },
    {
        name: {
            common: "Slovakia",
            official: "Slovak Republic",
            nativeName: {
                slk: {
                    official: "Slovenská republika",
                    common: "Slovensko",
                },
            },
        },
        currencies: {
            EUR: {
                name: "Euro",
                symbol: "€",
            },
        },
        capital: ["Bratislava"],
        region: "Europe",
        flag: "🇸🇰",
    },
    {
        name: {
            common: "DR Congo",
            official: "Democratic Republic of the Congo",
            nativeName: {
                fra: {
                    official: "République démocratique du Congo",
                    common: "RD Congo",
                },
                kon: {
                    official: "Repubilika ya Kongo Demokratiki",
                    common: "Repubilika ya Kongo Demokratiki",
                },
                lin: {
                    official: "Republiki ya Kongó Demokratiki",
                    common: "Republiki ya Kongó Demokratiki",
                },
                lua: {
                    official: "Ditunga dia Kongu wa Mungalaata",
                    common: "Ditunga dia Kongu wa Mungalaata",
                },
                swa: {
                    official: "Jamhuri ya Kidemokrasia ya Kongo",
                    common: "Jamhuri ya Kidemokrasia ya Kongo",
                },
            },
        },
        currencies: {
            CDF: {
                name: "Congolese franc",
                symbol: "FC",
            },
        },
        capital: ["Kinshasa"],
        region: "Africa",
        flag: "🇨🇩",
    },
    {
        name: {
            common: "Montenegro",
            official: "Montenegro",
            nativeName: {
                cnr: {
                    official: "Црна Гора",
                    common: "Црна Гора",
                },
            },
        },
        currencies: {
            EUR: {
                name: "Euro",
                symbol: "€",
            },
        },
        capital: ["Podgorica"],
        region: "Europe",
        flag: "🇲🇪",
    },
    {
        name: {
            common: "Gibraltar",
            official: "Gibraltar",
            nativeName: {
                eng: {
                    official: "Gibraltar",
                    common: "Gibraltar",
                },
            },
        },
        currencies: {
            GIP: {
                name: "Gibraltar pound",
                symbol: "£",
            },
        },
        capital: ["Gibraltar"],
        region: "Europe",
        flag: "🇬🇮",
    },
    {
        name: {
            common: "Somalia",
            official: "Federal Republic of Somalia",
            nativeName: {
                ara: {
                    official: "جمهورية الصومال\u200e\u200e",
                    common: "الصومال\u200e\u200e",
                },
                som: {
                    official: "Jamhuuriyadda Federaalka Soomaaliya",
                    common: "Soomaaliya",
                },
            },
        },
        currencies: {
            SOS: {
                name: "Somali shilling",
                symbol: "Sh",
            },
        },
        capital: ["Mogadishu"],
        region: "Africa",
        flag: "🇸🇴",
    },
    {
        name: {
            common: "Sri Lanka",
            official: "Democratic Socialist Republic of Sri Lanka",
            nativeName: {
                sin: {
                    official: "ශ්\u200dරී ලංකා ප්\u200dරජාතාන්ත්\u200dරික සමාජවාදී ජනරජය",
                    common: "ශ්\u200dරී ලංකාව",
                },
                tam: {
                    official: "இலங்கை சனநாயக சோசலிசக் குடியரசு",
                    common: "இலங்கை",
                },
            },
        },
        currencies: {
            LKR: {
                name: "Sri Lankan rupee",
                symbol: "Rs  රු",
            },
        },
        capital: ["Sri Jayawardenepura Kotte"],
        region: "Asia",
        flag: "🇱🇰",
    },
    {
        name: {
            common: "Cyprus",
            official: "Republic of Cyprus",
            nativeName: {
                ell: {
                    official: "Δημοκρατία της Κύπρος",
                    common: "Κύπρος",
                },
                tur: {
                    official: "Kıbrıs Cumhuriyeti",
                    common: "Kıbrıs",
                },
            },
        },
        currencies: {
            EUR: {
                name: "Euro",
                symbol: "€",
            },
        },
        capital: ["Nicosia"],
        region: "Europe",
        flag: "🇨🇾",
    },
    {
        name: {
            common: "Laos",
            official: "Lao People's Democratic Republic",
            nativeName: {
                lao: {
                    official: "ສາທາລະນະ ຊາທິປະໄຕ ຄົນລາວ ຂອງ",
                    common: "ສປປລາວ",
                },
            },
        },
        currencies: {
            LAK: {
                name: "Lao kip",
                symbol: "₭",
            },
        },
        capital: ["Vientiane"],
        region: "Asia",
        flag: "🇱🇦",
    },
    {
        name: {
            common: "Morocco",
            official: "Kingdom of Morocco",
            nativeName: {
                ara: {
                    official: "المملكة المغربية",
                    common: "المغرب",
                },
                ber: {
                    official: "ⵜⴰⴳⵍⴷⵉⵜ ⵏ ⵍⵎⵖⵔⵉⴱ",
                    common: "ⵍⵎⴰⵖⵔⵉⴱ",
                },
            },
        },
        currencies: {
            MAD: {
                name: "Moroccan dirham",
                symbol: "د.م.",
            },
        },
        capital: ["Rabat"],
        region: "Africa",
        flag: "🇲🇦",
    },
    {
        name: {
            common: "Timor-Leste",
            official: "Democratic Republic of Timor-Leste",
            nativeName: {
                por: {
                    official: "República Democrática de Timor-Leste",
                    common: "Timor-Leste",
                },
                tet: {
                    official: "Repúblika Demokrátika Timór-Leste",
                    common: "Timór-Leste",
                },
            },
        },
        currencies: {
            USD: {
                name: "United States dollar",
                symbol: "$",
            },
        },
        capital: ["Dili"],
        region: "Asia",
        flag: "🇹🇱",
    },
    {
        name: {
            common: "Yemen",
            official: "Republic of Yemen",
            nativeName: {
                ara: {
                    official: "الجمهورية اليمنية",
                    common: "اليَمَن",
                },
            },
        },
        currencies: {
            YER: {
                name: "Yemeni rial",
                symbol: "﷼",
            },
        },
        capital: ["Sana'a"],
        region: "Asia",
        flag: "🇾🇪",
    },
    {
        name: {
            common: "Falkland Islands",
            official: "Falkland Islands",
            nativeName: {
                eng: {
                    official: "Falkland Islands",
                    common: "Falkland Islands",
                },
            },
        },
        currencies: {
            FKP: {
                name: "Falkland Islands pound",
                symbol: "£",
            },
        },
        capital: ["Stanley"],
        region: "Americas",
        flag: "🇫🇰",
    },
    {
        name: {
            common: "Equatorial Guinea",
            official: "Republic of Equatorial Guinea",
            nativeName: {
                fra: {
                    official: "République de la Guinée Équatoriale",
                    common: "Guinée équatoriale",
                },
                por: {
                    official: "República da Guiné Equatorial",
                    common: "Guiné Equatorial",
                },
                spa: {
                    official: "República de Guinea Ecuatorial",
                    common: "Guinea Ecuatorial",
                },
            },
        },
        currencies: {
            XAF: {
                name: "Central African CFA franc",
                symbol: "Fr",
            },
        },
        capital: ["Malabo"],
        region: "Africa",
        flag: "🇬🇶",
    },
    {
        name: {
            common: "Algeria",
            official: "People's Democratic Republic of Algeria",
            nativeName: {
                ara: {
                    official: "الجمهورية الديمقراطية الشعبية الجزائرية",
                    common: "الجزائر",
                },
            },
        },
        currencies: {
            DZD: {
                name: "Algerian dinar",
                symbol: "د.ج",
            },
        },
        capital: ["Algiers"],
        region: "Africa",
        flag: "🇩🇿",
    },
    {
        name: {
            common: "Zambia",
            official: "Republic of Zambia",
            nativeName: {
                eng: {
                    official: "Republic of Zambia",
                    common: "Zambia",
                },
            },
        },
        currencies: {
            ZMW: {
                name: "Zambian kwacha",
                symbol: "ZK",
            },
        },
        capital: ["Lusaka"],
        region: "Africa",
        flag: "🇿🇲",
    },
    {
        name: {
            common: "Serbia",
            official: "Republic of Serbia",
            nativeName: {
                srp: {
                    official: "Република Србија",
                    common: "Србија",
                },
            },
        },
        currencies: {
            RSD: {
                name: "Serbian dinar",
                symbol: "дин.",
            },
        },
        capital: ["Belgrade"],
        region: "Europe",
        flag: "🇷🇸",
    },
    {
        name: {
            common: "Andorra",
            official: "Principality of Andorra",
            nativeName: {
                cat: {
                    official: "Principat d'Andorra",
                    common: "Andorra",
                },
            },
        },
        currencies: {
            EUR: {
                name: "Euro",
                symbol: "€",
            },
        },
        capital: ["Andorra la Vella"],
        region: "Europe",
        flag: "🇦🇩",
    },
    {
        name: {
            common: "São Tomé and Príncipe",
            official: "Democratic Republic of São Tomé and Príncipe",
            nativeName: {
                por: {
                    official: "República Democrática do São Tomé e Príncipe",
                    common: "São Tomé e Príncipe",
                },
            },
        },
        currencies: {
            STN: {
                name: "São Tomé and Príncipe dobra",
                symbol: "Db",
            },
        },
        capital: ["São Tomé"],
        region: "Africa",
        flag: "🇸🇹",
    },
    {
        name: {
            common: "Djibouti",
            official: "Republic of Djibouti",
            nativeName: {
                ara: {
                    official: "جمهورية جيبوتي",
                    common: "جيبوتي\u200e",
                },
                fra: {
                    official: "République de Djibouti",
                    common: "Djibouti",
                },
            },
        },
        currencies: {
            DJF: {
                name: "Djiboutian franc",
                symbol: "Fr",
            },
        },
        capital: ["Djibouti"],
        region: "Africa",
        flag: "🇩🇯",
    },
    {
        name: {
            common: "Bulgaria",
            official: "Republic of Bulgaria",
            nativeName: {
                bul: {
                    official: "Република България",
                    common: "България",
                },
            },
        },
        currencies: {
            BGN: {
                name: "Bulgarian lev",
                symbol: "лв",
            },
        },
        capital: ["Sofia"],
        region: "Europe",
        flag: "🇧🇬",
    },
    {
        name: {
            common: "United States Virgin Islands",
            official: "Virgin Islands of the United States",
            nativeName: {
                eng: {
                    official: "Virgin Islands of the United States",
                    common: "United States Virgin Islands",
                },
            },
        },
        currencies: {
            USD: {
                name: "United States dollar",
                symbol: "$",
            },
        },
        capital: ["Charlotte Amalie"],
        region: "Americas",
        flag: "🇻🇮",
    },
    {
        name: {
            common: "Argentina",
            official: "Argentine Republic",
            nativeName: {
                grn: {
                    official: "Argentine Republic",
                    common: "Argentina",
                },
                spa: {
                    official: "República Argentina",
                    common: "Argentina",
                },
            },
        },
        currencies: {
            ARS: {
                name: "Argentine peso",
                symbol: "$",
            },
        },
        capital: ["Buenos Aires"],
        region: "Americas",
        flag: "🇦🇷",
    },
    {
        name: {
            common: "Nigeria",
            official: "Federal Republic of Nigeria",
            nativeName: {
                eng: {
                    official: "Federal Republic of Nigeria",
                    common: "Nigeria",
                },
            },
        },
        currencies: {
            NGN: {
                name: "Nigerian naira",
                symbol: "₦",
            },
        },
        capital: ["Abuja"],
        region: "Africa",
        flag: "🇳🇬",
    },
    {
        name: {
            common: "Rwanda",
            official: "Republic of Rwanda",
            nativeName: {
                eng: {
                    official: "Republic of Rwanda",
                    common: "Rwanda",
                },
                fra: {
                    official: "République rwandaise",
                    common: "Rwanda",
                },
                kin: {
                    official: "Repubulika y'u Rwanda",
                    common: "Rwanda",
                },
            },
        },
        currencies: {
            RWF: {
                name: "Rwandan franc",
                symbol: "Fr",
            },
        },
        capital: ["Kigali"],
        region: "Africa",
        flag: "🇷🇼",
    },
    {
        name: {
            common: "Saint Helena, Ascension and Tristan da Cunha",
            official: "Saint Helena, Ascension and Tristan da Cunha",
            nativeName: {
                eng: {
                    official: "Saint Helena, Ascension and Tristan da Cunha",
                    common: "Saint Helena, Ascension and Tristan da Cunha",
                },
            },
        },
        currencies: {
            GBP: {
                name: "Pound sterling",
                symbol: "£",
            },
            SHP: {
                name: "Saint Helena pound",
                symbol: "£",
            },
        },
        capital: ["Jamestown"],
        region: "Africa",
        flag: "🇸🇭",
    },
    {
        name: {
            common: "Canada",
            official: "Canada",
            nativeName: {
                eng: {
                    official: "Canada",
                    common: "Canada",
                },
                fra: {
                    official: "Canada",
                    common: "Canada",
                },
            },
        },
        currencies: {
            CAD: {
                name: "Canadian dollar",
                symbol: "$",
            },
        },
        capital: ["Ottawa"],
        region: "Americas",
        flag: "🇨🇦",
    },
    {
        name: {
            common: "North Korea",
            official: "Democratic People's Republic of Korea",
            nativeName: {
                kor: {
                    official: "조선민주주의인민공화국",
                    common: "조선",
                },
            },
        },
        currencies: {
            KPW: {
                name: "North Korean won",
                symbol: "₩",
            },
        },
        capital: ["Pyongyang"],
        region: "Asia",
        flag: "🇰🇵",
    },
    {
        name: {
            common: "Åland Islands",
            official: "Åland Islands",
            nativeName: {
                swe: {
                    official: "Landskapet Åland",
                    common: "Åland",
                },
            },
        },
        currencies: {
            EUR: {
                name: "Euro",
                symbol: "€",
            },
        },
        capital: ["Mariehamn"],
        region: "Europe",
        flag: "🇦🇽",
    },
    {
        name: {
            common: "North Macedonia",
            official: "Republic of North Macedonia",
            nativeName: {
                mkd: {
                    official: "Република Северна Македонија",
                    common: "Македонија",
                },
            },
        },
        currencies: {
            MKD: {
                name: "denar",
                symbol: "den",
            },
        },
        capital: ["Skopje"],
        region: "Europe",
        flag: "🇲🇰",
    },
    {
        name: {
            common: "Netherlands",
            official: "Kingdom of the Netherlands",
            nativeName: {
                nld: {
                    official: "Koninkrijk der Nederlanden",
                    common: "Nederland",
                },
            },
        },
        currencies: {
            EUR: {
                name: "Euro",
                symbol: "€",
            },
        },
        capital: ["Amsterdam"],
        region: "Europe",
        flag: "🇳🇱",
    },
    {
        name: {
            common: "Niger",
            official: "Republic of Niger",
            nativeName: {
                fra: {
                    official: "République du Niger",
                    common: "Niger",
                },
            },
        },
        currencies: {
            XOF: {
                name: "West African CFA franc",
                symbol: "Fr",
            },
        },
        capital: ["Niamey"],
        region: "Africa",
        flag: "🇳🇪",
    },
    {
        name: {
            common: "Singapore",
            official: "Republic of Singapore",
            nativeName: {
                zho: {
                    official: "新加坡共和国",
                    common: "新加坡",
                },
                eng: {
                    official: "Republic of Singapore",
                    common: "Singapore",
                },
                msa: {
                    official: "Republik Singapura",
                    common: "Singapura",
                },
                tam: {
                    official: "சிங்கப்பூர் குடியரசு",
                    common: "சிங்கப்பூர்",
                },
            },
        },
        currencies: {
            SGD: {
                name: "Singapore dollar",
                symbol: "$",
            },
        },
        capital: ["Singapore"],
        region: "Asia",
        flag: "🇸🇬",
    },
    {
        name: {
            common: "Chad",
            official: "Republic of Chad",
            nativeName: {
                ara: {
                    official: "جمهورية تشاد",
                    common: "تشاد\u200e",
                },
                fra: {
                    official: "République du Tchad",
                    common: "Tchad",
                },
            },
        },
        currencies: {
            XAF: {
                name: "Central African CFA franc",
                symbol: "Fr",
            },
        },
        capital: ["N'Djamena"],
        region: "Africa",
        flag: "🇹🇩",
    },
    {
        name: {
            common: "Curaçao",
            official: "Country of Curaçao",
            nativeName: {
                eng: {
                    official: "Country of Curaçao",
                    common: "Curaçao",
                },
                nld: {
                    official: "Land Curaçao",
                    common: "Curaçao",
                },
                pap: {
                    official: "Pais Kòrsou",
                    common: "Pais Kòrsou",
                },
            },
        },
        currencies: {
            ANG: {
                name: "Netherlands Antillean guilder",
                symbol: "ƒ",
            },
        },
        capital: ["Willemstad"],
        region: "Americas",
        flag: "🇨🇼",
    },
    {
        name: {
            common: "Niue",
            official: "Niue",
            nativeName: {
                eng: {
                    official: "Niue",
                    common: "Niue",
                },
                niu: {
                    official: "Niuē",
                    common: "Niuē",
                },
            },
        },
        currencies: {
            NZD: {
                name: "New Zealand dollar",
                symbol: "$",
            },
        },
        capital: ["Alofi"],
        region: "Oceania",
        flag: "🇳🇺",
    },
    {
        name: {
            common: "Guinea-Bissau",
            official: "Republic of Guinea-Bissau",
            nativeName: {
                por: {
                    official: "República da Guiné-Bissau",
                    common: "Guiné-Bissau",
                },
                pov: {
                    official: "República da Guiné-Bissau",
                    common: "Guiné-Bissau",
                },
            },
        },
        currencies: {
            XOF: {
                name: "West African CFA franc",
                symbol: "Fr",
            },
        },
        capital: ["Bissau"],
        region: "Africa",
        flag: "🇬🇼",
    },
    {
        name: {
            common: "Nauru",
            official: "Republic of Nauru",
            nativeName: {
                eng: {
                    official: "Republic of Nauru",
                    common: "Nauru",
                },
                nau: {
                    official: "Republic of Nauru",
                    common: "Nauru",
                },
            },
        },
        currencies: {
            AUD: {
                name: "Australian dollar",
                symbol: "$",
            },
        },
        capital: ["Yaren"],
        region: "Oceania",
        flag: "🇳🇷",
    },
    {
        name: {
            common: "Zimbabwe",
            official: "Republic of Zimbabwe",
            nativeName: {
                bwg: {
                    official: "Republic of Zimbabwe",
                    common: "Zimbabwe",
                },
                eng: {
                    official: "Republic of Zimbabwe",
                    common: "Zimbabwe",
                },
                kck: {
                    official: "Republic of Zimbabwe",
                    common: "Zimbabwe",
                },
                khi: {
                    official: "Republic of Zimbabwe",
                    common: "Zimbabwe",
                },
                ndc: {
                    official: "Republic of Zimbabwe",
                    common: "Zimbabwe",
                },
                nde: {
                    official: "Republic of Zimbabwe",
                    common: "Zimbabwe",
                },
                nya: {
                    official: "Republic of Zimbabwe",
                    common: "Zimbabwe",
                },
                sna: {
                    official: "Republic of Zimbabwe",
                    common: "Zimbabwe",
                },
                sot: {
                    official: "Republic of Zimbabwe",
                    common: "Zimbabwe",
                },
                toi: {
                    official: "Republic of Zimbabwe",
                    common: "Zimbabwe",
                },
                tsn: {
                    official: "Republic of Zimbabwe",
                    common: "Zimbabwe",
                },
                tso: {
                    official: "Republic of Zimbabwe",
                    common: "Zimbabwe",
                },
                ven: {
                    official: "Republic of Zimbabwe",
                    common: "Zimbabwe",
                },
                xho: {
                    official: "Republic of Zimbabwe",
                    common: "Zimbabwe",
                },
                zib: {
                    official: "Republic of Zimbabwe",
                    common: "Zimbabwe",
                },
            },
        },
        currencies: {
            ZWL: {
                name: "Zimbabwean dollar",
                symbol: "$",
            },
        },
        capital: ["Harare"],
        region: "Africa",
        flag: "🇿🇼",
    },
    {
        name: {
            common: "China",
            official: "People's Republic of China",
            nativeName: {
                zho: {
                    official: "中华人民共和国",
                    common: "中国",
                },
            },
        },
        currencies: {
            CNY: {
                name: "Chinese yuan",
                symbol: "¥",
            },
        },
        capital: ["Beijing"],
        region: "Asia",
        flag: "🇨🇳",
    },
    {
        name: {
            common: "Christmas Island",
            official: "Territory of Christmas Island",
            nativeName: {
                eng: {
                    official: "Territory of Christmas Island",
                    common: "Christmas Island",
                },
            },
        },
        currencies: {
            AUD: {
                name: "Australian dollar",
                symbol: "$",
            },
        },
        capital: ["Flying Fish Cove"],
        region: "Oceania",
        flag: "🇨🇽",
    },
    {
        name: {
            common: "Puerto Rico",
            official: "Commonwealth of Puerto Rico",
            nativeName: {
                eng: {
                    official: "Commonwealth of Puerto Rico",
                    common: "Puerto Rico",
                },
                spa: {
                    official: "Estado Libre Asociado de Puerto Rico",
                    common: "Puerto Rico",
                },
            },
        },
        currencies: {
            USD: {
                name: "United States dollar",
                symbol: "$",
            },
        },
        capital: ["San Juan"],
        region: "Americas",
        flag: "🇵🇷",
    },
    {
        name: {
            common: "Ethiopia",
            official: "Federal Democratic Republic of Ethiopia",
            nativeName: {
                amh: {
                    official: "የኢትዮጵያ ፌዴራላዊ ዲሞክራሲያዊ ሪፐብሊክ",
                    common: "ኢትዮጵያ",
                },
            },
        },
        currencies: {
            ETB: {
                name: "Ethiopian birr",
                symbol: "Br",
            },
        },
        capital: ["Addis Ababa"],
        region: "Africa",
        flag: "🇪🇹",
    },
    {
        name: {
            common: "Grenada",
            official: "Grenada",
            nativeName: {
                eng: {
                    official: "Grenada",
                    common: "Grenada",
                },
            },
        },
        currencies: {
            XCD: {
                name: "Eastern Caribbean dollar",
                symbol: "$",
            },
        },
        capital: ["St. George's"],
        region: "Americas",
        flag: "🇬🇩",
    },
    {
        name: {
            common: "Finland",
            official: "Republic of Finland",
            nativeName: {
                fin: {
                    official: "Suomen tasavalta",
                    common: "Suomi",
                },
                swe: {
                    official: "Republiken Finland",
                    common: "Finland",
                },
            },
        },
        currencies: {
            EUR: {
                name: "Euro",
                symbol: "€",
            },
        },
        capital: ["Helsinki"],
        region: "Europe",
        flag: "🇫🇮",
    },
    {
        name: {
            common: "Turks and Caicos Islands",
            official: "Turks and Caicos Islands",
            nativeName: {
                eng: {
                    official: "Turks and Caicos Islands",
                    common: "Turks and Caicos Islands",
                },
            },
        },
        currencies: {
            USD: {
                name: "United States dollar",
                symbol: "$",
            },
        },
        capital: ["Cockburn Town"],
        region: "Americas",
        flag: "🇹🇨",
    },
    {
        name: {
            common: "Burundi",
            official: "Republic of Burundi",
            nativeName: {
                fra: {
                    official: "République du Burundi",
                    common: "Burundi",
                },
                run: {
                    official: "Republika y'Uburundi ",
                    common: "Uburundi",
                },
            },
        },
        currencies: {
            BIF: {
                name: "Burundian franc",
                symbol: "Fr",
            },
        },
        capital: ["Gitega"],
        region: "Africa",
        flag: "🇧🇮",
    },
    {
        name: {
            common: "Guam",
            official: "Guam",
            nativeName: {
                cha: {
                    official: "Guåhån",
                    common: "Guåhån",
                },
                eng: {
                    official: "Guam",
                    common: "Guam",
                },
                spa: {
                    official: "Guam",
                    common: "Guam",
                },
            },
        },
        currencies: {
            USD: {
                name: "United States dollar",
                symbol: "$",
            },
        },
        capital: ["Hagåtña"],
        region: "Oceania",
        flag: "🇬🇺",
    },
    {
        name: {
            common: "Jordan",
            official: "Hashemite Kingdom of Jordan",
            nativeName: {
                ara: {
                    official: "المملكة الأردنية الهاشمية",
                    common: "الأردن",
                },
            },
        },
        currencies: {
            JOD: {
                name: "Jordanian dinar",
                symbol: "د.ا",
            },
        },
        capital: ["Amman"],
        region: "Asia",
        flag: "🇯🇴",
    },
    {
        name: {
            common: "Mali",
            official: "Republic of Mali",
            nativeName: {
                fra: {
                    official: "République du Mali",
                    common: "Mali",
                },
            },
        },
        currencies: {
            XOF: {
                name: "West African CFA franc",
                symbol: "Fr",
            },
        },
        capital: ["Bamako"],
        region: "Africa",
        flag: "🇲🇱",
    },
    {
        name: {
            common: "Ukraine",
            official: "Ukraine",
            nativeName: {
                ukr: {
                    official: "Україна",
                    common: "Україна",
                },
            },
        },
        currencies: {
            UAH: {
                name: "Ukrainian hryvnia",
                symbol: "₴",
            },
        },
        capital: ["Kyiv"],
        region: "Europe",
        flag: "🇺🇦",
    },
    {
        name: {
            common: "Réunion",
            official: "Réunion Island",
            nativeName: {
                fra: {
                    official: "Ile de la Réunion",
                    common: "La Réunion",
                },
            },
        },
        currencies: {
            EUR: {
                name: "Euro",
                symbol: "€",
            },
        },
        capital: ["Saint-Denis"],
        region: "Africa",
        flag: "🇷🇪",
    },
    {
        name: {
            common: "Svalbard and Jan Mayen",
            official: "Svalbard og Jan Mayen",
            nativeName: {
                nor: {
                    official: "Svalbard og Jan Mayen",
                    common: "Svalbard og Jan Mayen",
                },
            },
        },
        currencies: {
            NOK: {
                name: "krone",
                symbol: "kr",
            },
        },
        capital: ["Longyearbyen"],
        region: "Europe",
        flag: "🇸🇯",
    },
    {
        name: {
            common: "Cocos (Keeling) Islands",
            official: "Territory of the Cocos (Keeling) Islands",
            nativeName: {
                eng: {
                    official: "Territory of the Cocos (Keeling) Islands",
                    common: "Cocos (Keeling) Islands",
                },
            },
        },
        currencies: {
            AUD: {
                name: "Australian dollar",
                symbol: "$",
            },
        },
        capital: ["West Island"],
        region: "Oceania",
        flag: "🇨🇨",
    },
    {
        name: {
            common: "Tanzania",
            official: "United Republic of Tanzania",
            nativeName: {
                eng: {
                    official: "United Republic of Tanzania",
                    common: "Tanzania",
                },
                swa: {
                    official: "Jamhuri ya Muungano wa Tanzania",
                    common: "Tanzania",
                },
            },
        },
        currencies: {
            TZS: {
                name: "Tanzanian shilling",
                symbol: "Sh",
            },
        },
        capital: ["Dodoma"],
        region: "Africa",
        flag: "🇹🇿",
    },
    {
        name: {
            common: "Qatar",
            official: "State of Qatar",
            nativeName: {
                ara: {
                    official: "دولة قطر",
                    common: "قطر",
                },
            },
        },
        currencies: {
            QAR: {
                name: "Qatari riyal",
                symbol: "ر.ق",
            },
        },
        capital: ["Doha"],
        region: "Asia",
        flag: "🇶🇦",
    },
    {
        name: {
            common: "Brazil",
            official: "Federative Republic of Brazil",
            nativeName: {
                por: {
                    official: "República Federativa do Brasil",
                    common: "Brasil",
                },
            },
        },
        currencies: {
            BRL: {
                name: "Brazilian real",
                symbol: "R$",
            },
        },
        capital: ["Brasília"],
        region: "Americas",
        flag: "🇧🇷",
    },
    {
        name: {
            common: "Sudan",
            official: "Republic of the Sudan",
            nativeName: {
                ara: {
                    official: "جمهورية السودان",
                    common: "السودان",
                },
                eng: {
                    official: "Republic of the Sudan",
                    common: "Sudan",
                },
            },
        },
        currencies: {
            SDG: {
                name: "Sudanese pound",
                symbol: "",
            },
        },
        capital: ["Khartoum"],
        region: "Africa",
        flag: "🇸🇩",
    },
    {
        name: {
            common: "Romania",
            official: "Romania",
            nativeName: {
                ron: {
                    official: "România",
                    common: "România",
                },
            },
        },
        currencies: {
            RON: {
                name: "Romanian leu",
                symbol: "lei",
            },
        },
        capital: ["Bucharest"],
        region: "Europe",
        flag: "🇷🇴",
    },
    {
        name: {
            common: "Anguilla",
            official: "Anguilla",
            nativeName: {
                eng: {
                    official: "Anguilla",
                    common: "Anguilla",
                },
            },
        },
        currencies: {
            XCD: {
                name: "Eastern Caribbean dollar",
                symbol: "$",
            },
        },
        capital: ["The Valley"],
        region: "Americas",
        flag: "🇦🇮",
    },
    {
        name: {
            common: "Iraq",
            official: "Republic of Iraq",
            nativeName: {
                ara: {
                    official: "جمهورية العراق",
                    common: "العراق",
                },
                arc: {
                    official: "ܩܘܼܛܢܵܐ ܐܝܼܪܲܩ",
                    common: "ܩܘܼܛܢܵܐ",
                },
                ckb: {
                    official: "کۆماری عێراق",
                    common: "کۆماری",
                },
            },
        },
        currencies: {
            IQD: {
                name: "Iraqi dinar",
                symbol: "ع.د",
            },
        },
        capital: ["Baghdad"],
        region: "Asia",
        flag: "🇮🇶",
    },
    {
        name: {
            common: "Bhutan",
            official: "Kingdom of Bhutan",
            nativeName: {
                dzo: {
                    official: "འབྲུག་རྒྱལ་ཁབ་",
                    common: "འབྲུག་ཡུལ་",
                },
            },
        },
        currencies: {
            BTN: {
                name: "Bhutanese ngultrum",
                symbol: "Nu.",
            },
            INR: {
                name: "Indian rupee",
                symbol: "₹",
            },
        },
        capital: ["Thimphu"],
        region: "Asia",
        flag: "🇧🇹",
    },
    {
        name: {
            common: "Honduras",
            official: "Republic of Honduras",
            nativeName: {
                spa: {
                    official: "República de Honduras",
                    common: "Honduras",
                },
            },
        },
        currencies: {
            HNL: {
                name: "Honduran lempira",
                symbol: "L",
            },
        },
        capital: ["Tegucigalpa"],
        region: "Americas",
        flag: "🇭🇳",
    },
    {
        name: {
            common: "Namibia",
            official: "Republic of Namibia",
            nativeName: {
                afr: {
                    official: "Republiek van Namibië",
                    common: "Namibië",
                },
                deu: {
                    official: "Republik Namibia",
                    common: "Namibia",
                },
                eng: {
                    official: "Republic of Namibia",
                    common: "Namibia",
                },
                her: {
                    official: "Republic of Namibia",
                    common: "Namibia",
                },
                hgm: {
                    official: "Republic of Namibia",
                    common: "Namibia",
                },
                kwn: {
                    official: "Republic of Namibia",
                    common: "Namibia",
                },
                loz: {
                    official: "Republic of Namibia",
                    common: "Namibia",
                },
                ndo: {
                    official: "Republic of Namibia",
                    common: "Namibia",
                },
                tsn: {
                    official: "Lefatshe la Namibia",
                    common: "Namibia",
                },
            },
        },
        currencies: {
            NAD: {
                name: "Namibian dollar",
                symbol: "$",
            },
            ZAR: {
                name: "South African rand",
                symbol: "R",
            },
        },
        capital: ["Windhoek"],
        region: "Africa",
        flag: "🇳🇦",
    },
    {
        name: {
            common: "Slovenia",
            official: "Republic of Slovenia",
            nativeName: {
                slv: {
                    official: "Republika Slovenija",
                    common: "Slovenija",
                },
            },
        },
        currencies: {
            EUR: {
                name: "Euro",
                symbol: "€",
            },
        },
        capital: ["Ljubljana"],
        region: "Europe",
        flag: "🇸🇮",
    },
    {
        name: {
            common: "Haiti",
            official: "Republic of Haiti",
            nativeName: {
                fra: {
                    official: "République d'Haïti",
                    common: "Haïti",
                },
                hat: {
                    official: "Repiblik Ayiti",
                    common: "Ayiti",
                },
            },
        },
        currencies: {
            HTG: {
                name: "Haitian gourde",
                symbol: "G",
            },
        },
        capital: ["Port-au-Prince"],
        region: "Americas",
        flag: "🇭🇹",
    },
    {
        name: {
            common: "Bosnia and Herzegovina",
            official: "Bosnia and Herzegovina",
            nativeName: {
                bos: {
                    official: "Bosna i Hercegovina",
                    common: "Bosna i Hercegovina",
                },
                hrv: {
                    official: "Bosna i Hercegovina",
                    common: "Bosna i Hercegovina",
                },
                srp: {
                    official: "Босна и Херцеговина",
                    common: "Босна и Херцеговина",
                },
            },
        },
        currencies: {
            BAM: {
                name: "Bosnia and Herzegovina convertible mark",
                symbol: "",
            },
        },
        capital: ["Sarajevo"],
        region: "Europe",
        flag: "🇧🇦",
    },
    {
        name: {
            common: "Greenland",
            official: "Greenland",
            nativeName: {
                kal: {
                    official: "Kalaallit Nunaat",
                    common: "Kalaallit Nunaat",
                },
            },
        },
        currencies: {
            DKK: {
                name: "krone",
                symbol: "kr.",
            },
        },
        capital: ["Nuuk"],
        region: "Americas",
        flag: "🇬🇱",
    },
    {
        name: {
            common: "Jamaica",
            official: "Jamaica",
            nativeName: {
                eng: {
                    official: "Jamaica",
                    common: "Jamaica",
                },
                jam: {
                    official: "Jamaica",
                    common: "Jamaica",
                },
            },
        },
        currencies: {
            JMD: {
                name: "Jamaican dollar",
                symbol: "$",
            },
        },
        capital: ["Kingston"],
        region: "Americas",
        flag: "🇯🇲",
    },
    {
        name: {
            common: "Malta",
            official: "Republic of Malta",
            nativeName: {
                eng: {
                    official: "Republic of Malta",
                    common: "Malta",
                },
                mlt: {
                    official: "Repubblika ta ' Malta",
                    common: "Malta",
                },
            },
        },
        currencies: {
            EUR: {
                name: "Euro",
                symbol: "€",
            },
        },
        capital: ["Valletta"],
        region: "Europe",
        flag: "🇲🇹",
    },
    {
        name: {
            common: "Bolivia",
            official: "Plurinational State of Bolivia",
            nativeName: {
                aym: {
                    official: "Wuliwya Suyu",
                    common: "Wuliwya",
                },
                grn: {
                    official: "Tetã Volívia",
                    common: "Volívia",
                },
                que: {
                    official: "Buliwya Mamallaqta",
                    common: "Buliwya",
                },
                spa: {
                    official: "Estado Plurinacional de Bolivia",
                    common: "Bolivia",
                },
            },
        },
        currencies: {
            BOB: {
                name: "Bolivian boliviano",
                symbol: "Bs.",
            },
        },
        capital: ["Sucre"],
        region: "Americas",
        flag: "🇧🇴",
    },
];



function MainSection() {
    return (
        <>


            <main class="site-main">
                <div class="container">
                    <div class="site-main__top ">
                        <div class="site-main__input-wrapper">


                            <span class="site-main__input-icon">
                                <img src="./svg/searcher.svg" alt="" />

                            </span>
                            <form id="form" action="#">
                                <input class="site-main___top-input" name="search" type="text"
                                    placeholder="Search for a contriy..." />
                            </form>


                        </div>
                        <select class="site-main__select" name="regions">
                            <option value="Africa">Africa</option>
                            <option value="America">America</option>
                            <option value=">Asia">Asia</option>
                            <option value="Europe">Europe</option>
                            <option value="Oceania">Oceania</option>


                        </select>
                    </div>
                </div>
                <section class="country">
                    <div class="contries__container container">
                        <ul className="contries__list">
                            {
                                countries.map(el => {
                                    return (
                                        <Card
                                            name={el.name.official}
                                            region={el.region}
                                            capital={el.capital}>
                                        </Card>
                                    );

                                })
                            }
                        </ul>


                    </div>

                </section>
            </main>


        </>
    );


}
export default MainSection;