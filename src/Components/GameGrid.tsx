import React, { useEffect, useState } from 'react'
import apiClient from '../Services/api-client'
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../Hooks/UseGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';

const GameGrid = () => {

  const { games, error, isLoading} = useGames(); //kind of like a useState but we created it instead of from react
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5}} padding={'20px'} spacing={10}>
      {isLoading && skeleton.map(skeleton => 
      <GameCardContainer>
      <GameCardSkeleton key={skeleton} />
      </GameCardContainer>
      )}
    {games.map(game => 
    <GameCardContainer>
      <GameCard key={game.id} game={game} />
    </GameCardContainer>
    )}      
    </SimpleGrid>
    </>
  )
}

export default GameGrid
