import React from 'react'
import useGenres, { Genre } from '../Hooks/UseGenres'
import useData from '../Hooks/UseData';

const GenreList = () => {
    const { data } = useData<Genre>('/genres');
  return (
    <ul>
        {data.map(genre => <li key={genre.id}>{genre.name}</li>)}      
    </ul>
  )
}

export default GenreList
