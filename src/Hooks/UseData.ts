import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { Axios, AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
  id: number;
  results: T[];
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, dep?: any) => {
  const [data, setData] = useState<T[]>([]); //<Genre[]> sets type for setGenres, ([]) sets type for genres
  const [error, setError] = useState(""); //can either define like useState<string>() or useState('') to define it as a string
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController(); //disconnects from API since we don't want to stay connected the whole time (saves memory)

    setIsLoading(true);

    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
      .then((response) => {
        setData(response.data.results);
        setIsLoading(false);
      })

      .catch((error) => {
        if (error instanceof CanceledError) return; // this gets rid of the 'canceled' tht shows up on top of the page
        setError(error.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, deps?[...deps]:[]);

  useEffect(() => {}, []);

  return { data, error, isLoading };
};

export default useData;