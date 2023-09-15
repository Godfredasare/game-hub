import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { AxiosError } from "axios";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "./GenreList";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGame {
  count: number;
  results: Game[];
}

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const [game, setGame] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const fetchGames = async () => {
    setLoading(true);
    try {
      const res = await apiClient.get<FetchGame>("/games", {
        params: { genres: selectedGenre?.id },
      });
      setGame(res.data.results);
      setLoading(false);
    } catch (error) {
      setError((error as AxiosError).message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGames();
  }, [selectedGenre]);

  let Skeleton = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        spacing={3}
        padding={"10px"}
      >
        {isLoading && Skeleton.map((e) => <GameCardSkeleton key={e} />)}
        {game.map((e) => (
          <GameCard key={e.id} games={e} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
