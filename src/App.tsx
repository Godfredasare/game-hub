import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Grid templateAreas={`'nav nav' 'aside main'`}>
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <GridItem area={"aside"} bg={"gold"}>
        Aside
      </GridItem>
      <GridItem area={"main"} bg={"blue"}>
        Main
      </GridItem>
    </Grid>
  );
};

export default App;
