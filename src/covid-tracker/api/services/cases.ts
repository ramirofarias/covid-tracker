import { api } from '../useFetch';

export const getCases = () => {
  return api.get(`cases`).then((res) => res.data);
};
