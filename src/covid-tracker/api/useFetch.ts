import axios from 'axios';
import { useEffect, useState } from 'react';

const API_URL = 'https://covid-api.mmediagroup.fr/v1';
type Endpoint = 'cases' | 'history' | 'vaccines';

export const useFetch = (endpoint: Endpoint, params?: any, deps: any[] = []) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_URL}/${endpoint}`, { params })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [endpoint, ...deps]);

  return [data, error, loading];
};
