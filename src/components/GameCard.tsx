import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "./GameGrid";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import CroppedImageUrl from "./CroppedImageUrl";

interface Props {
  games: Game;
}

const GameCard = ({ games }: Props) => {

  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image
        src={CroppedImageUrl(games.background_image)}
        height={"200px"}
      />
      <CardBody>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platform={games.parent_platforms.map((e) => e.platform)}
          />
          <CriticScore score={games.metacritic} />
        </HStack>
        <Heading fontSize={"2xl"}>
          {games.name} <Emoji ratings={games.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
