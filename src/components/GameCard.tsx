import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "./GameGrid";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface Props {
  games: Game;
}

const GameCard = ({ games }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={games.background_image} />
      <CardBody>
        <Heading fontSize={"2xl"}>{games.name}</Heading>
        <HStack justifyContent={'space-between'}>
          <PlatformIconList
            platform={games.parent_platforms.map((e) => e.platform)}
          />
          <CriticScore score={games.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
