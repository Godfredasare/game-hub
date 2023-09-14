import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { AxiosError } from "axios";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";

export interface Platform {
  id: number,
  name: string,
  slug: string
}
export interface Game {
  id: number;
  name: string;
  background_image: string,
  parent_platforms: {platform: Platform}[],
  metacritic: number,

}

interface FetchGame {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [game, setGame] = useState<Game[]>([]);
  const [error, setError] = useState("");

  const fetchGames = async () => {
    try {
      const res = await apiClient.get<FetchGame>("/games");
      setGame(res.data.results);
    } catch (error) {
      setError((error as AxiosError).message);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid columns={{sm: 1, md: 2, lg: 3,}} spacing={10} padding={'10px'}>
        {game.map((e) => (
         <GameCard key={e.id} games={e}/>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
