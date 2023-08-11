import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../Hooks/UseGames";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../Services/image-url";

interface GameProps {
  game: Game;
}

const GameCard = ({ game }: GameProps) => {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
      {/* <Image src={game.background_image} /> */}
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
        {/* {game.parent_platforms.map(({platform}) => <Text>{platform.name}</Text>)} */}
        <HStack justifyContent={"space-between"}>
        <PlatformIconsList platform={game.parent_platforms.map(p => p.platform)}/>
        <CriticScore score={game.metacritic}/>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
