import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "./GameGrid";
import PlatformIconList from "./PlatformIconList";

interface Props {
  games: Game;
}

const GameCard = ({ games }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={games.background_image} />
      <CardBody>
        <Heading fontSize={"2xl"}>{games.name}</Heading>
        <PlatformIconList platform={games.parent_platforms.map(e => e.platform)} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
