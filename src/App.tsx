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
import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import ColorModeSwitch from "./Components/ColorModeSwitch";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `'nav' 'main'`,
        lg: `'nav nav' 'aside main'`, //1024
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
      <GridItem area="aside" paddingX='5px'>
        <GenreList />
      </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
