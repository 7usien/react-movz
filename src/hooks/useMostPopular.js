import axios from 'axios';
import { useEffect, useState } from 'react';

function useMostPopular(type) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/${type}/popular?language=en-US&page=1`,
        {
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_APP_TOKEN}`,
          },
        }
      );
      response.data.results ? setLoading(false) : setLoading(false);

      return setData(response.data.results);
    };

    fetchData();
  }, [type]);

  return { data, loading };
}

export default useMostPopular;
