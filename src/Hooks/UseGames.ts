import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { CanceledError } from "axios";
import useData from "./UseData";
import { Genre } from "./UseGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

// interface FetchGameResponse {
//   id: number;
//   results: Game[];
// }


const useGames = (selectGenre: Genre | null, selectedPlatform: Platform | null) => useData<Game>('/games', {params: {genres: selectGenre?.id, parent_platforms: selectedPlatform?.id}}, [selectGenre?.id,])
// {
//   const [games, setGames] = useState<Game[]>([]); //<Game[]> sets type for setGames, ([]) sets type for games
//   const [error, setError] = useState(""); //can either define like useState<string>() or useState('') to define it as a string
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const controller = new AbortController(); //disconnects from API since we don't want to stay connected the whole time (saves memory)

//     setIsLoading(true);

//     apiClient
//       .get<FetchGameResponse>("/games", { signal: controller.signal })
//       .then((response) => {
//         setGames(response.data.results);
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

//   return { games, error, isLoading };
// };

export default useGames;
