import React, { useEffect, useState } from 'react'
import apiClient from '../Services/api-client'
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../Hooks/UseGames';
import GameCard from './GameCard';

const GameGrid = () => {

  const { games, error} = useGames(); //kidn of like a useState but we created instead of from react

  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5}} padding={'20px'} spacing={10}>
    {games.map(game => <GameCard key={game.id} game = {game}></GameCard>)}      
    </SimpleGrid>
    </>
  )
}

export default GameGrid
