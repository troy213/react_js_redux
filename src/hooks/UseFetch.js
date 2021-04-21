import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);

  // const getData = async () => {
  //   const res = await fetch(url);
  //   const data = await res.json();
  //   setData(data);
  //   setIsLoading(false);
  // }
  //
  // useEffect(() => {
  //   getData();
  // }, [url]);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json();
        } else {
          setIsLoading(false);
          setIsError(true);
        }
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [url])

  return { isLoading, isError, data };
}
