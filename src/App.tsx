//to open from cmd prompt:
//npm create vite@4.1.0
//name it
//choose React
//choose typescript
//cd {file name}
//npm install
//npm run dev

//type 'o' to open in browser
//type 'q'  to be able to type in terminal again

//code . to open in vs code

//to save to github: git init
// git add .
// git commit -m 'initial commit'

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Box, Button, ButtonGroup, Grid, GridItem, HStack, Show, useLatestRef } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import ColorModeSwitch from "./Components/ColorModeSwitch";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { Genre } from "./Hooks/UseGenres";
import PlatformSelector from "./Components/PlatformSelector";
import { Platform } from "./Hooks/UseGames";
import SortSelector from "./Components/SortSelector";
import GameHeading from "./Components/GameHeading";

//Query Object Pattern - instead of adding multiple UseStates, put them all in here
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string
  
}

function App() {

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery) //doesn't like the blank {} so have to add the 'as GameQuery' to make it okay

  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null); these are now taken over by the GameQuery line above; it holds both Genre and Platform

  return (
    <Grid
      templateAreas={{
        base: `'nav' 'main'`,
        lg: `'nav nav' 'aside main'`, //1024px
      }}

      templateColumns={{base: '1fr', lg: '200px'}}
    >
      <GridItem area="nav">
        <Navbar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})} />
      </GridItem>
      <Show above="lg">
      <GridItem area="aside" paddingX={1}>
        <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})} />
      </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={5}>
          <GameHeading gameQuery={gameQuery} />
          <HStack spacing={5} marginLeft='20px' marginBottom={5}>
          <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})} />
          <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})} />
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery} />
        </GridItem>
        </Grid>
  );
}

export default App;
