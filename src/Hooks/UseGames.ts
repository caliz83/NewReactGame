import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { CanceledError } from "axios";
import useData from "./UseData";
import { Genre } from "./UseGenres";
import { GameQuery } from "../App";

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

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText
      },
    },
    [gameQuery.genre?.id]
  );
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
