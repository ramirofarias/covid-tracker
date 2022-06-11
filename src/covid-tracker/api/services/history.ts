import { api } from '../index';

export const getHistory = (params?: any) => {
  return api
    .get(`history`, {
      params,
    })
    .then((res) => res.data);
};
