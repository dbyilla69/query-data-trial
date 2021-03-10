import { useState, useEffect } from 'react';
import axios from 'axios';

const username = '8d5243ad-bd42-48dc-860b-3b58af';
const password = 'MYSPORTSFEEDS';

// export default function useFetch(url) {
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     isMounted.current = true;
  //     const init = async () => {
  //       try {
  //         const apiUrl =
  //           'https://api.mysportsfeeds.com/v2.1/pull/nfl/2019-2020-regular/player_stats_totals.json';

  //         const response = await axios.get(
  //           apiUrl,
  //           {
  //             headers: {
  //               Authorization: 'Basic ' + btoa(username + ':' + password)
  //             }
  //           } + url
  //         );
  //         if (response.ok) {
  //           const json = await response.json();
  //           if (isMounted.current) setData(json);
  //         } else {
  //           throw response;
  //         }
  //       } catch (e) {
  //         if (isMounted.current) setError(e);
  //       } finally {
  //         if (isMounted.current) setLoading(false);
  //       }
  //     };
  //     init();

  //     return () => {
  //       isMounted.current = false;
  //     };
  //   }, [url]);

  useEffect(() => {
    // const source = axios.CancelToken.source();
    const handleFetch = async () => {
      setLoading(true);
      try {
        // const apiUrl = `https://api.mysportsfeeds.com/v2.1/pull/nfl/players.json?team=was&limit=10`;
        const apiUrl = `https://api.mysportsfeeds.com/v2.1/pull/nfl`;
        const result = await axios.get(apiUrl + url, {
          headers: {
            Authorization: 'Basic ' + btoa(username + ':' + password)
          }
        });
        // const res = await axios.get(
        //   `${_URL_}players.json?season=${values.season}&team=${values.team}&rosterstatus=assigned-to-roster&sort=player.lastname.A`,
        //   {
        //     cancelToken: source.token
        //   }
        // );
        setData(result.data);
        setLoading(false);
      } catch (error) {
        console.log(setError(error));
      }
    };
    handleFetch();
    // return () => source.cancel('Cancelling TeamRoster request');
  }, [url]);

  return { data, error, loading };
};
export default useFetch;

