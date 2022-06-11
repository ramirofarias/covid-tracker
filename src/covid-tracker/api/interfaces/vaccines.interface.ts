export interface Vaccinations {
  administered: number;
  people_vaccinated: number;
  people_partially_vaccinated: number;
  country: string;
  population: number;
  sq_km_area?: number;
  life_expectancy: null | string;
  elevation_in_meters: string;
  continent?: string;
  abbreviation?: string;
  location: null | string;
  iso: number | null;
  capital_city: null | string;
  updated: string;
}
