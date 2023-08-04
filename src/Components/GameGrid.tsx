import React, { useEffect, useState } from 'react'
import apiClient from '../Services/api-client'

interface Game {
    id: number;
    name: string;
}

interface FetchGameResponse {
    id: number;
    results: Game []
}

const GameGrid = () => {

    const [games, setGames] = useState<Game[]>([]); //<Game[]> sets type for setGames, ([]) sets type for games
    const [error, setError] = useState('') //can either define like useState<string>() or useState('') to define it as a string

    useEffect(() => {
        apiClient.get<FetchGameResponse>('/games')  
        .then(response => setGames(response.data.results))
        .catch(error => setError(error.message))  
    }, [])

  return (
    <ul>
    {games.map(game => <li key={game.id}>{game.name}</li>)}      
    </ul>
  )
}

export default GameGrid
