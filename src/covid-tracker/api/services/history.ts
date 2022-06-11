import { api } from '../useFetch';

export const getHistory = (params?: any) => {
  return api
    .get(`history`, {
      params,
    })
    .then((res) => res.data);
};
