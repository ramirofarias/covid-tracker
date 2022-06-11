import { api } from '../useFetch';

export const getVaccines = () => {
  return api.get(`vaccines`).then((res) => res.data);
};
