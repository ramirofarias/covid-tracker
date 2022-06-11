export interface Vaccines {
  Afghanistan: Country;
  Albania: Country;
  Algeria: Country;
  Andorra: Country;
  Angola: Country;
  'Antigua and Barbuda': Country;
  Argentina: Argentina;
  Armenia: Country;
  Australia: Australia;
  Austria: Country;
  Azerbaijan: Country;
  Bahamas: Country;
  Bahrein: Country;
  Barbados: Country;
  Belarus: Country;
  Belgium: Country;
  Belize: Country;
  Benin: Country;
  Bhutan: Country;
  Bolivia: Country;
  'Bosnia and Herzegovina': Country;
  Botswana: Country;
  Brazil: Country;
  Brunei: Country;
  Bulgaria: Country;
  'Burkina Faso': Country;
  Vaccinations: Country;
  Burundi: Country;
  'Cabo Verde': Country;
  Cambodia: Country;
  Cameroon: Country;
  Canada: Canada;
  'Central African Republic': Country;
  Chad: Country;
  Chile: Country;
  China: China;
  Colombia: Colombia;
  Comoros: Country;
  'Congo (Brazzaville)': Country;
  'Congo (Kinshasa)': Country;
  'Costa Rica': Country;
  "Cote d'Ivoire": Country;
  Croatia: Country;
  Cuba: Country;
  Cyprus: Country;
  Czechia: Czechia;
  Denmark: Denmark;
  Djibouti: Country;
  Dominica: Country;
  'Dominican Republic': Country;
  Ecuador: Country;
  Egypt: Country;
  'El Salvador': Country;
  'Equatorial Guinea': Country;
  Estonia: Estonia;
  Eswatini: Country;
  Ethiopia: Country;
  Fiji: Country;
  Finland: Country;
  France: France;
  Gabon: Country;
  Gambia: Country;
  Georgia: Country;
  Germany: Germany;
  Ghana: Country;
  Greece: Country;
  Grenada: Country;
  Guatemala: Country;
  Guinea: Country;
  'Guinea-Bissau': Country;
  Guyana: Country;
  Haiti: Country;
  Honduras: Country;
  Hungary: Country;
  Iceland: Country;
  India: India;
  Indonesia: Indonesia;
  Iran: Country;
  Iraq: Country;
  Ireland: Country;
  Israel: Country;
  Italy: Italy;
  Jamaica: Country;
  Japan: Country;
  Jordan: Country;
  Kazakhstan: Kazakhstan;
  Kenya: Country;
  Kiribati: Country;
  'Korea, South': Country;
  Kosovo: Country;
  Kuwait: Country;
  Kyrgyzstan: Country;
  Laos: Country;
  Latvia: Country;
  Lesotho: Country;
  Liberia: Country;
  Libya: Country;
  Liechtenstein: Country;
  Lithuania: Lithuania;
  Luxembourg: Country;
  Madagascar: Country;
  Malawi: Country;
  Malaysia: Malaysia;
  Maldives: Country;
  Mali: Country;
  Malta: Country;
  'Marshall Islands': Country;
  Mauritania: Country;
  Mauritius: Country;
  Mexico: Country;
  Micronesia: Country;
  Moldova: Country;
  Monaco: Country;
  Mongolia: Country;
  Montenegro: Country;
  Morocco: Country;
  Mozambique: Country;
  Namibia: Country;
  Netherlands: Netherlands;
  'New Zealand': NewZealand;
  Nicaragua: Country;
  Niger: Country;
  Nigeria: Country;
  'North Macedonia': Country;
  Norway: Country;
  Oman: Country;
  Pakistan: Country;
  Palau: Country;
  Panama: Country;
  'Papua New Guinea': Country;
  Paraguay: Country;
  Peru: Country;
  Philippines: Country;
  Poland: Poland;
  Portugal: Country;
  Qatar: Country;
  Romania: Country;
  Russia: Russia;
  Rwanda: Country;
  'Saint Kitts and Nevis': Country;
  'Saint Lucia': Country;
  'Saint Vincent and the Grenadines': Country;
  Samoa: Country;
  'San Marino': Country;
  'Sao Tome and Principe': Country;
  'Saudi Arabia': Country;
  Senegal: Country;
  Serbia: Country;
  Seychelles: Country;
  'Sierra Leone': Country;
  Singapore: Country;
  Slovakia: Country;
  Slovenia: Slovenia;
  'Solomon Islands': Country;
  Somalia: Country;
  'South Africa': Country;
  'South Sudan': Country;
  Spain: Spain;
  'Sri Lanka': Country;
  Sudan: Country;
  Suriname: Country;
  Sweden: Sweden;
  Switzerland: Switzerland;
  Syria: Country;
  'Taiwan*': Country;
  Tajikistan: Country;
  Tanzania: Country;
  Thailand: Country;
  'Timor-Leste': Country;
  Togo: Country;
  'Trinidad and Tobago': Country;
  Tunisia: Country;
  Turkey: Country;
  US: Country;
  'US (Aggregate)': Country;
  Uganda: Country;
  'United Arab Emirates': Country;
  'United Kingdom': UnitedKingdom;
  Uruguay: Country;
  Uzbekistan: Country;
  Vanuatu: Country;
  Venezuela: Country;
  Vietnam: Country;
  'West Bank and Gaza': Country;
  World: Vaccinations;
  Yemen: Country;
  Zambia: Country;
  Zimbabwe: Country;
  Global: Vaccinations;
}

export interface Country {
  All: Vaccinations;
}

export interface Vaccinations {
  administered: number;
  people_vaccinated: number;
  people_partially_vaccinated: number;
  country: string;
  population: number;
  sq_km_area?: number;
  life_expectancy: null | string;
  elevation_in_meters: ElevationInMeters;
  continent?: Continent;
  abbreviation?: string;
  location: null | string;
  iso: number | null;
  capital_city: null | string;
  updated: string;
}

export enum Continent {
  Africa = 'Africa',
  Asia = 'Asia',
  Europe = 'Europe',
  NorthAmerica = 'North America',
  Oceania = 'Oceania',
  SouthAmerica = 'South America',
}

export type ElevationInMeters = number | null | string;

export interface Argentina {
  All: Vaccinations;
  'Autonomous City of Buenos Aires': StateVaccinations;
  'Buenos Aires': StateVaccinations;
  Catamarca: StateVaccinations;
  Chaco: StateVaccinations;
  Chubut: StateVaccinations;
  Cordoba: StateVaccinations;
  Corrientes: StateVaccinations;
  'Entre Rios': StateVaccinations;
  Formosa: StateVaccinations;
  Jujuy: StateVaccinations;
  'La Pampa': StateVaccinations;
  'La Rioja': StateVaccinations;
  Mendoza: StateVaccinations;
  Misiones: StateVaccinations;
  Neuquen: StateVaccinations;
  'Rio Negro': StateVaccinations;
  Salta: StateVaccinations;
  'San Juan': StateVaccinations;
  'San Luis': StateVaccinations;
  'Santa Cruz': StateVaccinations;
  'Santa Fe': StateVaccinations;
  'Santiago del Estero': StateVaccinations;
  'Tierra del Fuego': StateVaccinations;
  Tucuman: StateVaccinations;
}

export interface StateVaccinations {
  administered: number;
  people_vaccinated: number;
  people_partially_vaccinated: number;
  updated?: string;
  population?: number;
}

export interface Australia {
  All: Vaccinations;
  'Australian Capital Territory': StateVaccinations;
  'New South Wales': StateVaccinations;
  'Northern Territory': StateVaccinations;
  Queensland: StateVaccinations;
  'South Australia': StateVaccinations;
  Tasmania: StateVaccinations;
  Unknown: StateVaccinations;
  Victoria: StateVaccinations;
  'Western Australia': StateVaccinations;
}

export interface Canada {
  All: Vaccinations;
  Alberta: StateVaccinations;
  'British Columbia': StateVaccinations;
  Manitoba: StateVaccinations;
  'New Brunswick': StateVaccinations;
  'Newfoundland and Labrador': StateVaccinations;
  'Northwest Territories': StateVaccinations;
  'Nova Scotia': StateVaccinations;
  Nunavut: StateVaccinations;
  Ontario: StateVaccinations;
  'Prince Edward Island': StateVaccinations;
  Quebec: StateVaccinations;
  Saskatchewan: StateVaccinations;
  Yukon: StateVaccinations;
}

export interface China {
  All: Vaccinations;
  'Hong Kong': StateVaccinations;
  Macau: StateVaccinations;
}

export interface Colombia {
  All: Vaccinations;
  Amazonas: StateVaccinations;
  Antioquia: StateVaccinations;
  Arauca: StateVaccinations;
  Atlantico: StateVaccinations;
  Bolivar: StateVaccinations;
  Boyaca: StateVaccinations;
  Caldas: StateVaccinations;
  'Capital District': StateVaccinations;
  Caqueta: StateVaccinations;
  Casanare: StateVaccinations;
  Cauca: StateVaccinations;
  Cesar: StateVaccinations;
  Choco: StateVaccinations;
  Cordoba: StateVaccinations;
  Cundinamarca: StateVaccinations;
  Guainia: StateVaccinations;
  Guaviare: StateVaccinations;
  Huila: StateVaccinations;
  'La Guajira': StateVaccinations;
  Magdalena: StateVaccinations;
  Meta: StateVaccinations;
  Narino: StateVaccinations;
  'Norte de Santander': StateVaccinations;
  Putumayo: StateVaccinations;
  Quindio: StateVaccinations;
  Risaralda: StateVaccinations;
  'San Andres y Providencia': StateVaccinations;
  Santander: StateVaccinations;
  Sucre: StateVaccinations;
  Tolima: StateVaccinations;
  Unknown: StateVaccinations;
  'Valle del Cauca': StateVaccinations;
  Vaupes: StateVaccinations;
  Vichada: StateVaccinations;
}

export interface Czechia {
  All: Vaccinations;
  Jihocesky: StateVaccinations;
  Jihomoravsky: StateVaccinations;
  Karlovarsky: StateVaccinations;
  Kralovehradecky: StateVaccinations;
  Liberecky: StateVaccinations;
  Moravskoslezsky: StateVaccinations;
  Olomoucky: StateVaccinations;
  Pardubicky: StateVaccinations;
  Plzensky: StateVaccinations;
  Prague: StateVaccinations;
  Stredocesky: StateVaccinations;
  Unknown: StateVaccinations;
  Ustecky: StateVaccinations;
  Vysocina: StateVaccinations;
  Zlinsky: StateVaccinations;
}

export interface Denmark {
  All: Vaccinations;
  'Faroe Islands': StateVaccinations;
  Greenland: StateVaccinations;
}

export interface Estonia {
  All: Vaccinations;
  Harju: StateVaccinations;
  Hiiu: StateVaccinations;
  'Ida-Viru': StateVaccinations;
  Jarva: StateVaccinations;
  Jogeva: StateVaccinations;
  Laane: StateVaccinations;
  'Laane-Viru': StateVaccinations;
  Parnu: StateVaccinations;
  Polva: StateVaccinations;
  Rapla: StateVaccinations;
  Saare: StateVaccinations;
  Tartu: StateVaccinations;
  Unknown: StateVaccinations;
  Valga: StateVaccinations;
  Viljandi: StateVaccinations;
  Voru: StateVaccinations;
}

export interface France {
  All: Vaccinations;
  'Auvergne-Rhone Alps': StateVaccinations;
  Brittany: StateVaccinations;
  'Burgundy-Free County': StateVaccinations;
  'Centre-Loire Valley': StateVaccinations;
  Corsica: StateVaccinations;
  'French Guiana': StateVaccinations;
  'French Polynesia': StateVaccinations;
  'Great East': StateVaccinations;
  Guadeloupe: StateVaccinations;
  'Island of France': StateVaccinations;
  'Loire Countries': StateVaccinations;
  Martinique: StateVaccinations;
  'New Aquitaine': StateVaccinations;
  'New Caledonia': StateVaccinations;
  Normandy: StateVaccinations;
  Occitania: StateVaccinations;
  'Provence-Alps-Azure Coast': StateVaccinations;
  Unknown: StateVaccinations;
  'Upper France': StateVaccinations;
  'Wallis and Futuna': StateVaccinations;
}

export interface Germany {
  All: Vaccinations;
  'Baden-Wurttemberg': StateVaccinations;
  Bayern: StateVaccinations;
  Berlin: StateVaccinations;
  Brandenburg: StateVaccinations;
  Bremen: StateVaccinations;
  Hamburg: StateVaccinations;
  Hessen: StateVaccinations;
  'Mecklenburg-Vorpommern': StateVaccinations;
  Niedersachsen: StateVaccinations;
  'Nordrhein-Westfalen': StateVaccinations;
  'Rheinland-Pfalz': StateVaccinations;
  Saarland: StateVaccinations;
  Sachsen: StateVaccinations;
  'Sachsen-Anhalt': StateVaccinations;
  'Schleswig-Holstein': StateVaccinations;
  Thuringen: StateVaccinations;
  Unknown: StateVaccinations;
}

export interface India {
  All: Vaccinations;
  'Andaman and Nicobar Islands': StateVaccinations;
  'Andhra Pradesh': StateVaccinations;
  'Arunachal Pradesh': StateVaccinations;
  Assam: StateVaccinations;
  Bihar: StateVaccinations;
  Chandigarh: StateVaccinations;
  Chhattisgarh: StateVaccinations;
  'Dadra and Nagar Haveli and Daman and Diu': StateVaccinations;
  Delhi: StateVaccinations;
  Goa: StateVaccinations;
  Gujarat: StateVaccinations;
  Haryana: StateVaccinations;
  'Himachal Pradesh': StateVaccinations;
  'Jammu and Kashmir': StateVaccinations;
  Jharkhand: StateVaccinations;
  Karnataka: StateVaccinations;
  Kerala: StateVaccinations;
  Ladakh: StateVaccinations;
  Lakshadweep: StateVaccinations;
  'Madhya Pradesh': StateVaccinations;
  Maharashtra: StateVaccinations;
  Manipur: StateVaccinations;
  Meghalaya: StateVaccinations;
  Mizoram: StateVaccinations;
  Nagaland: StateVaccinations;
  Odisha: StateVaccinations;
  Puducherry: StateVaccinations;
  Punjab: StateVaccinations;
  Rajasthan: StateVaccinations;
  Sikkim: StateVaccinations;
  'Tamil Nadu': StateVaccinations;
  Telangana: StateVaccinations;
  Tripura: StateVaccinations;
  Unknown: StateVaccinations;
  'Uttar Pradesh': StateVaccinations;
  Uttarakhand: StateVaccinations;
  'West Bengal': StateVaccinations;
}

export interface Indonesia {
  All: Vaccinations;
  Aceh: StateVaccinations;
  Bali: StateVaccinations;
  'Bangka Belitung Islands': StateVaccinations;
  Banten: StateVaccinations;
  Bengkulu: StateVaccinations;
  'Central Java': StateVaccinations;
  'Central Kalimantan': StateVaccinations;
  'Central Sulawesi': StateVaccinations;
  'East Java': StateVaccinations;
  'East Kalimantan': StateVaccinations;
  'East Nusa Tenggara': StateVaccinations;
  Gorontalo: StateVaccinations;
  Jambi: StateVaccinations;
  Lampung: StateVaccinations;
  Maluku: StateVaccinations;
  'North Kalimantan': StateVaccinations;
  'North Maluku': StateVaccinations;
  'North Sulawesi': StateVaccinations;
  'North Sumatra': StateVaccinations;
  Papua: StateVaccinations;
  Riau: StateVaccinations;
  'Riau Islands': StateVaccinations;
  'South Kalimantan': StateVaccinations;
  'South Sulawesi': StateVaccinations;
  'South Sumatra': StateVaccinations;
  'Southeast Sulawesi': StateVaccinations;
  'Special Capital Region of Jakarta': StateVaccinations;
  'Special Region of Yogyakarta': StateVaccinations;
  Unknown: StateVaccinations;
  'West Java': StateVaccinations;
  'West Kalimantan': StateVaccinations;
  'West Nusa Tenggara': StateVaccinations;
  'West Papua': StateVaccinations;
  'West Sulawesi': StateVaccinations;
  'West Sumatra': StateVaccinations;
}

export interface Italy {
  All: Vaccinations;
  Abruzzo: StateVaccinations;
  Basilicata: StateVaccinations;
  Calabria: StateVaccinations;
  Campania: StateVaccinations;
  'Emilia-Romagna': StateVaccinations;
  'Friuli Venezia Giulia': StateVaccinations;
  Lazio: StateVaccinations;
  Liguria: StateVaccinations;
  Lombardia: StateVaccinations;
  Marche: StateVaccinations;
  Molise: StateVaccinations;
  'P.A. Bolzano': StateVaccinations;
  'P.A. Trento': StateVaccinations;
  Piemonte: StateVaccinations;
  Puglia: StateVaccinations;
  Sardegna: StateVaccinations;
  Sicilia: StateVaccinations;
  Toscana: StateVaccinations;
  Umbria: StateVaccinations;
  "Valle d'Aosta": StateVaccinations;
  Veneto: StateVaccinations;
}

export interface Kazakhstan {
  All: Vaccinations;
  Aktobe: StateVaccinations;
  Almaty: StateVaccinations;
  'Almaty City': StateVaccinations;
  Aqmola: StateVaccinations;
  Atyrau: StateVaccinations;
  'East Kazakhstan': StateVaccinations;
  Jambyl: StateVaccinations;
  Mangystau: StateVaccinations;
  'North Kazakhstan': StateVaccinations;
  'Nur-Sultan': StateVaccinations;
  Pavlodar: StateVaccinations;
  Qaraghandy: StateVaccinations;
  Qostanay: StateVaccinations;
  Qyzylorda: StateVaccinations;
  Shymkent: StateVaccinations;
  Turkistan: StateVaccinations;
  'West Kazakhstan': StateVaccinations;
}

export interface Lithuania {
  All: Vaccinations;
  Alytus: StateVaccinations;
  Kaunas: StateVaccinations;
  Klaipeda: StateVaccinations;
  Marijampole: StateVaccinations;
  Panevezys: StateVaccinations;
  Siauliai: StateVaccinations;
  Taurage: StateVaccinations;
  Telsiai: StateVaccinations;
  Unknown: StateVaccinations;
  Utena: StateVaccinations;
  Vilnius: StateVaccinations;
}

export interface Malaysia {
  All: Vaccinations;
  Johor: StateVaccinations;
  Kedah: StateVaccinations;
  Kelantan: StateVaccinations;
  Melaka: StateVaccinations;
  'Negeri Sembilan': StateVaccinations;
  Pahang: StateVaccinations;
  Perak: StateVaccinations;
  Perlis: StateVaccinations;
  'Pulau Pinang': StateVaccinations;
  Sabah: StateVaccinations;
  Sarawak: StateVaccinations;
  Selangor: StateVaccinations;
  Terengganu: StateVaccinations;
  Unknown: StateVaccinations;
  'W.P. Kuala Lumpur': StateVaccinations;
  'W.P. Labuan': StateVaccinations;
  'W.P. Putrajaya': StateVaccinations;
}

export interface Netherlands {
  All: Vaccinations;
  Aruba: StateVaccinations;
  'Bonaire, Sint Eustatius and Saba': StateVaccinations;
  Curacao: StateVaccinations;
  'Sint Maarten': StateVaccinations;
}

export interface NewZealand {
  All: Vaccinations;
  'Cook Islands': StateVaccinations;
}

export interface Poland {
  All: Vaccinations;
  Dolnoslaskie: StateVaccinations;
  'Kujawsko-Pomorskie': StateVaccinations;
  Lodzkie: StateVaccinations;
  Lubelskie: StateVaccinations;
  Lubuskie: StateVaccinations;
  Malopolskie: StateVaccinations;
  Mazowieckie: StateVaccinations;
  Opolskie: StateVaccinations;
  Podkarpackie: StateVaccinations;
  Podlaskie: StateVaccinations;
  Pomorskie: StateVaccinations;
  Slaskie: StateVaccinations;
  Swietokrzyskie: StateVaccinations;
  Unknown: StateVaccinations;
  'Warminsko-mazurskie': StateVaccinations;
  Wielkopolskie: StateVaccinations;
  Zachodniopomorskie: StateVaccinations;
}

export interface Russia {
  All: Vaccinations;
  'Adygea Republic': StateVaccinations;
  'Altai Krai': StateVaccinations;
  'Amur Oblast': StateVaccinations;
  'Arkhangelsk Oblast': StateVaccinations;
  'Astrakhan Oblast': StateVaccinations;
  'Bashkortostan Republic': StateVaccinations;
  'Belgorod Oblast': StateVaccinations;
  'Bryansk Oblast': StateVaccinations;
  'Buryatia Republic': StateVaccinations;
  'Chechen Republic': StateVaccinations;
  'Chelyabinsk Oblast': StateVaccinations;
  'Chukotka Autonomous Okrug': StateVaccinations;
  'Chuvashia Republic': StateVaccinations;
  'Ingushetia Republic': StateVaccinations;
  'Irkutsk Oblast': StateVaccinations;
  'Ivanovo Oblast': StateVaccinations;
  'Jewish Autonomous Okrug': StateVaccinations;
  'Kabardino-Balkarian Republic': StateVaccinations;
  'Kaliningrad Oblast': StateVaccinations;
  'Kalmykia Republic': StateVaccinations;
  'Kaluga Oblast': StateVaccinations;
  'Karachay-Cherkess Republic': StateVaccinations;
  'Karelia Republic': StateVaccinations;
  'Kemerovo Oblast': StateVaccinations;
  'Khabarovsk Krai': StateVaccinations;
  'Khakassia Republic': StateVaccinations;
  'Khanty-Mansi Autonomous Okrug': StateVaccinations;
  'Kirov Oblast': StateVaccinations;
  'Komi Republic': StateVaccinations;
  'Kostroma Oblast': StateVaccinations;
  'Krasnodar Krai': StateVaccinations;
  'Krasnoyarsk Krai': StateVaccinations;
  'Kurgan Oblast': StateVaccinations;
  'Kursk Oblast': StateVaccinations;
  'Leningrad Oblast': StateVaccinations;
  'Lipetsk Oblast': StateVaccinations;
  'Magadan Oblast': StateVaccinations;
  'Mari El Republic': StateVaccinations;
  'Mordovia Republic': StateVaccinations;
  Moscow: StateVaccinations;
  'Moscow Oblast': StateVaccinations;
  'Murmansk Oblast': StateVaccinations;
  'Nenets Autonomous Okrug': StateVaccinations;
  'Nizhny Novgorod Oblast': StateVaccinations;
  'Novosibirsk Oblast': StateVaccinations;
  'Omsk Oblast': StateVaccinations;
  'Orel Oblast': StateVaccinations;
  'Orenburg Oblast': StateVaccinations;
  'Penza Oblast': StateVaccinations;
  'Perm Krai': StateVaccinations;
  'Primorsky Krai': StateVaccinations;
  'Pskov Oblast': StateVaccinations;
  'Rostov Oblast': StateVaccinations;
  'Ryazan Oblast': StateVaccinations;
  'Saint Petersburg': StateVaccinations;
  'Sakha (Yakutiya) Republic': StateVaccinations;
  'Sakhalin Oblast': StateVaccinations;
  'Samara Oblast': StateVaccinations;
  'Saratov Oblast': StateVaccinations;
  'Smolensk Oblast': StateVaccinations;
  'Sverdlovsk Oblast': StateVaccinations;
  'Tambov Oblast': StateVaccinations;
  'Tatarstan Republic': StateVaccinations;
  'Tomsk Oblast': StateVaccinations;
  'Tula Oblast': StateVaccinations;
  'Tver Oblast': StateVaccinations;
  'Tyumen Oblast': StateVaccinations;
  'Tyva Republic': StateVaccinations;
  'Udmurt Republic': StateVaccinations;
  'Ulyanovsk Oblast': StateVaccinations;
  Unknown: StateVaccinations;
  'Vladimir Oblast': StateVaccinations;
  'Volgograd Oblast': StateVaccinations;
  'Vologda Oblast': StateVaccinations;
  'Voronezh Oblast': StateVaccinations;
  'Yamalo-Nenets Autonomous Okrug': StateVaccinations;
  'Yaroslavl Oblast': StateVaccinations;
  'Zabaykalsky Krai': StateVaccinations;
}

export interface Slovenia {
  All: Vaccinations;
  Gorenjska: StateVaccinations;
  Goriska: StateVaccinations;
  'Jugovzhodna Slovenija': StateVaccinations;
  Koroska: StateVaccinations;
  'Obalno-kraska': StateVaccinations;
  Osrednjeslovenska: StateVaccinations;
  Podravska: StateVaccinations;
  Pomurska: StateVaccinations;
  Posavska: StateVaccinations;
  'Primorsko-notranjska': StateVaccinations;
  Savinjska: StateVaccinations;
  Unknown: StateVaccinations;
  Zasavska: StateVaccinations;
}

export interface Spain {
  All: Vaccinations;
  Andalusia: StateVaccinations;
  Aragon: StateVaccinations;
  Asturias: StateVaccinations;
  Baleares: StateVaccinations;
  'C. Valenciana': StateVaccinations;
  Canarias: StateVaccinations;
  Cantabria: StateVaccinations;
  'Castilla - La Mancha': StateVaccinations;
  'Castilla y Leon': StateVaccinations;
  Catalonia: StateVaccinations;
  Ceuta: StateVaccinations;
  Extremadura: StateVaccinations;
  Galicia: StateVaccinations;
  'La Rioja': StateVaccinations;
  Madrid: StateVaccinations;
  Melilla: StateVaccinations;
  Murcia: StateVaccinations;
  Navarra: StateVaccinations;
  'Pais Vasco': StateVaccinations;
  Unknown: StateVaccinations;
}

export interface Sweden {
  All: Vaccinations;
  Blekinge: StateVaccinations;
  Dalarna: StateVaccinations;
  Gavleborg: StateVaccinations;
  Gotland: StateVaccinations;
  Halland: StateVaccinations;
  'Jamtland Harjedalen': StateVaccinations;
  Jonkoping: StateVaccinations;
  Kalmar: StateVaccinations;
  Kronoberg: StateVaccinations;
  Norrbotten: StateVaccinations;
  Orebro: StateVaccinations;
  Ostergotland: StateVaccinations;
  Skane: StateVaccinations;
  Sormland: StateVaccinations;
  Stockholm: StateVaccinations;
  Uppsala: StateVaccinations;
  Varmland: StateVaccinations;
  Vasterbotten: StateVaccinations;
  Vasternorrland: StateVaccinations;
  Vastmanland: StateVaccinations;
  'Vastra Gotaland': StateVaccinations;
}

export interface Switzerland {
  All: Vaccinations;
  Aargau: StateVaccinations;
  'Appenzell Ausserrhoden': StateVaccinations;
  'Appenzell Innerrhoden': StateVaccinations;
  'Basel-Landschaft': StateVaccinations;
  'Basel-Stadt': StateVaccinations;
  Berne: StateVaccinations;
  Fribourg: StateVaccinations;
  Geneva: StateVaccinations;
  Glarus: StateVaccinations;
  Grisons: StateVaccinations;
  Jura: StateVaccinations;
  Lucerne: StateVaccinations;
  Neuchatel: StateVaccinations;
  Nidwalden: StateVaccinations;
  Obwalden: StateVaccinations;
  Schaffhausen: StateVaccinations;
  Schwyz: StateVaccinations;
  Solothurn: StateVaccinations;
  'St. Gallen': StateVaccinations;
  Thurgau: StateVaccinations;
  Ticino: StateVaccinations;
  Unknown: StateVaccinations;
  Uri: StateVaccinations;
  Valais: StateVaccinations;
  Vaud: StateVaccinations;
  Zug: StateVaccinations;
  Zurich: StateVaccinations;
}

export interface UnitedKingdom {
  All: Vaccinations;
  Anguilla: StateVaccinations;
  Bermuda: StateVaccinations;
  'British Virgin Islands': StateVaccinations;
  'Cayman Islands': StateVaccinations;
  'Channel Islands': StateVaccinations;
  England: StateVaccinations;
  'Falkland Islands (Malvinas)': StateVaccinations;
  Gibraltar: StateVaccinations;
  'Isle of Man': StateVaccinations;
  Montserrat: StateVaccinations;
  'Northern Ireland': StateVaccinations;
  'Saint Helena, Ascension and Tristan da Cunha': StateVaccinations;
  Scotland: StateVaccinations;
  'Turks and Caicos Islands': StateVaccinations;
  Wales: StateVaccinations;
}
