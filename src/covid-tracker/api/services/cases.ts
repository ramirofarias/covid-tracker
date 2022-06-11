import { api } from '../index';

export const getCases = () => {
  return api.get(`cases`).then((res) => res.data);
};
