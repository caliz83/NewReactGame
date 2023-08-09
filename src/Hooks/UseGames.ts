import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { CanceledError } from "axios";

export interface Game {
    id: number;
    name: string;
    background_image: string
}

interface FetchGameResponse {
    id: number;
    results: Game []
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]); //<Game[]> sets type for setGames, ([]) sets type for games
    const [error, setError] = useState('') //can either define like useState<string>() or useState('') to define it as a string

    useEffect(() => {

        const controller = new AbortController(); //disconnects from API since we don't want to stay connected the whole time (saves memory)

        apiClient.get<FetchGameResponse>('/games', {signal: controller.signal})  
        .then(response => setGames(response.data.results))
        .catch(error => {
            if(error instanceof CanceledError) return; // this gets rid of the 'canceled' tht shows up on top of the page
            setError(error.message)})  

        return () => controller.abort();
    }, []);

    return { games, error }
}

export default useGames;