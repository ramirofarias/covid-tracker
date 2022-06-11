export interface Cases {
  Global: Global;
}

export interface Global {
  All: AllCases;
}

export interface AllCases {
  population: number;
  confirmed: number;
  recovered: number;
  deaths: number;
}

export interface CountryCases extends AllCases {
  abbreviation: string;
  capital_city: string;
  continent: string;
  country: string;
  elevation_in_meters: number;
  iso: number;
  lat: string;
  life_expectancy: string;
  location: string;
  long: string;
  sq_km_area: number;
  updated: string;
}
