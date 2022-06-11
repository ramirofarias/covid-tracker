import { api } from '../index';

export const getVaccines = () => {
  return api.get(`vaccines`).then((res) => res.data);
};
