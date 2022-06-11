import axios from 'axios';

const API_URL = 'https://covid-api.mmediagroup.fr/v1';

export const api = axios.create({
  baseURL: `${API_URL}/`,
});
