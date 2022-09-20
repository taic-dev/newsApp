import axios from 'axios';
import { useState } from 'react';

const useApi = (url, method = "get") => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetch = async () => {
    try {
      setError(null);
      setData(null);
      setLoading(true);
      const response = await axios[method](url);
      setData(response.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  return {data, loading, error, fetch};
};

export default useApi;
