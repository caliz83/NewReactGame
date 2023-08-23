import React from "react";
import useGenres, { Genre } from "../Hooks/UseGenres";
import useData from "../Hooks/UseData";
import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../Services/image-url";
import error from "../Hooks/UseData";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useData<Genre>("/genres");

  //not best way to do this but another (lazy) way to put the spinner insetead of in the jsx
  //isLoading ? return <Spinner /> : null;
  //better to put in the jsx (return)

  //if(error) return

  return (
    <>
    <Heading fontSize='2xl'>Genres</Heading>
    <List>
      {error && <Text>Error 404 not found</Text>}
      {isLoading && <Spinner />}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              objectFit='cover'
              src={getCroppedImageUrl(genre.image_background)}
            ></Image>
            <Button
              fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
              color={genre.id === selectedGenre?.id ? "blue.500" : "normal"}
              onClick={() => onSelectGenre(genre)}
              fontSize="100%"
              variant="link"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
    </>
  );
};

export default GenreList;
