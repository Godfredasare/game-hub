import { useState } from "react";
import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./components/GenreList";
import PlatformSelector, {
  PlatformSelectors,
} from "./components/PlatformSelector";
import SortSelctor from "./components/SortSelctor";
import GameHeading from "./components/GameHeading";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] =
    useState<PlatformSelectors | null>(null);
  const [selectedSortOrder, setSelectedSortOrder] = useState("");
  const [searchText, setSearchText] = useState("");

  return (
    <Grid
      templateAreas={{
        base: `'nav' ' main'`,
        lg: `'nav nav' 'aside main'`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar onSearch={(search) => setSearchText(search)} />
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
        <Box paddingLeft={3}>
          <GameHeading selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} />
          <HStack spacing={5}  marginBottom={5}>
            <PlatformSelector
              selectedPlatform={selectedPlatform}
              onSelectedPlatform={(platform) => setSelectedPlatform(platform)}
            />
            <SortSelctor
              selectedSortOrder={selectedSortOrder}
              onSelectSortOrder={(sortOder) => setSelectedSortOrder(sortOder)}
            />
          </HStack>
        </Box>
        <GameGrid
          searchText={searchText}
          selectedSortOrder={selectedSortOrder}
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
        />
      </GridItem>
    </Grid>
  );
};

export default App;
