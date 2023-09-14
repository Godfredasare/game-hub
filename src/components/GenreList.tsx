import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError } from "axios";
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";

interface Genre {
  id: number;
  name: string;
  image_background: string;
}

interface FetchGenreInterface {
  count: number;
  results: Genre[];
}

const GenreList = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(false);

  const fetchGenres = async () => {
    // setLoading(true);
    try {
      const res = await apiClient.get<FetchGenreInterface>("/genres");
      setGenres(res.data.results);
      //   setLoading(false);
    } catch (error) {
    //   setError((error as AxiosError).message);
      //   setLoading(false);
    }
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  return (
    <>
      <List>
        {genres.map((e) => (
          <ListItem key={e.id} paddingY='5px'>
            <HStack>
              <Image
                src={e.image_background}
                boxSize={"32px"}
                borderRadius={8}
              />
              <Text>{e.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
