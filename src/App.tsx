import { useState } from "react";
import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./components/GenreList";
import PlatformSelector, {
  PlatformSelectors,
} from "./components/PlatformSelector";
import SortSelctor from "./components/SortSelctor";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] =
    useState<PlatformSelectors | null>(null);
  const [selectedSortOrder, setSelectedSortOrder] = useState("");

  return (
    <Grid
      templateAreas={{
        base: `'nav' ' main'`,
        lg: `'nav nav' 'aside main'`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "240px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <HStack spacing={5} paddingLeft={3} marginBottom={5}>
          <PlatformSelector
            selectedPlatform={selectedPlatform}
            onSelectedPlatform={(platform) => setSelectedPlatform(platform)}
          />
          <SortSelctor
            onSelectSortOrder={(sortOder) => setSelectedSortOrder(sortOder)}
          />
        </HStack>
        <GameGrid
          selectedSortOrder={selectedSortOrder}
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
        />
      </GridItem>
    </Grid>
  );
};

export default App;
