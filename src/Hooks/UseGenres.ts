import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { CanceledError } from "axios";
import useData from "./UseData";

export interface Genre {
  id: number;
  name: string;
  image_background: string
}

interface FetchGenreResponse {
  id: number;
  results: Genre[];
}

const useGenres = () => useData<Genre>('/genres')
// {
//   const [genres, setGenres] = useState<Genre[]>([]); //<Genre[]> sets type for setGenres, ([]) sets type for genres
//   const [error, setError] = useState(""); //can either define like useState<string>() or useState('') to define it as a string
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const controller = new AbortController(); //disconnects from API since we don't want to stay connected the whole time (saves memory)

//     setIsLoading(true);

//     apiClient
//       .get<FetchGenreResponse>("/genres", { signal: controller.signal })
//       .then((response) => {
//         setGenres(response.data.results);
//         setIsLoading(false);
//       })

//       .catch((error) => {
//         if (error instanceof CanceledError) return; // this gets rid of the 'canceled' tht shows up on top of the page
//         setError(error.message);
//       });
//     setIsLoading(false);

//     return () => controller.abort();
//   }, []);

//   useEffect(() => {}, []);

//   return { genres, error, isLoading };
// };

export default useGenres;