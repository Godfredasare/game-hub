import { Heading } from "@chakra-ui/react";
import { Platform } from "./GameGrid";
import { Genre } from "./GenreList";

interface Props {
  selectedPlatform: Platform | null;
  selectedGenre: Genre | null;
}

const GameHeading = ({ selectedGenre, selectedPlatform }: Props) => {
  let heading = `${selectedPlatform?.name || ""} ${selectedGenre?.name || ""}  Games`;

  return (
    <Heading marginBottom={4} fontSize={"5xl"} as={"h1"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
