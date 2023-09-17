import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError } from "axios";
import { Button, HStack, Heading, Image, List, ListItem } from "@chakra-ui/react";
import GenreSkeleton from "./GenreSkeleton";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

interface FetchGenreInterface {
  count: number;
  results: Genre[];
}

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const fetchGenres = async () => {
    setLoading(true);
    try {
      const res = await apiClient.get<FetchGenreInterface>("/genres");
      setGenres(res.data.results);
      setLoading(false);
    } catch (error) {
      setError((error as AxiosError).message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  let skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  if (error) return null;

  return (
    <>
    <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
      {isLoading && skeleton.map((e) => <GenreSkeleton key={e} />)}
      <List>
        {genres.map((e) => (
          <ListItem key={e.id} paddingY="8px">
            <HStack>
              <Image
                src={e.image_background}
                boxSize={"32px"}
                borderRadius={8}
                objectFit='cover'
              />
              <Button
                whiteSpace='normal'
                textAlign='left'
                justifySelf={"center"}
                fontWeight={e.id === selectedGenre?.id ? "bold" : "normal"}
                variant="link"
                onClick={() => onSelectGenre(e)}
              >
                {e.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
