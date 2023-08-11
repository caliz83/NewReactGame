import React, { useEffect, useState } from 'react'
import apiClient from '../Services/api-client'
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../Hooks/UseGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

const GameGrid = () => {

  const { games, error, isLoading} = useGames(); //kind of like a useState but we created it instead of from react
  const skeleton = [1, 2, 3, 4, 5, 6]

  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5}} padding={'20px'} spacing={10}>
      {isLoading && skeleton.map(skeleton => <GameCardSkeleton key={skeleton} />)}
    {games.map(game => <GameCard key={game.id} game={game}></GameCard>)}      
    </SimpleGrid>
    </>
  )
}

export default GameGrid
