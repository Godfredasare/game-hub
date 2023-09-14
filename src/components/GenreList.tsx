import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError } from "axios";

interface Genre {
  id: number;
  name: string;
}

interface FetchGenreInterface {
  count: number;
  results: Genre[];
}

const GenreList = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const fetchGenres = async () => {
    // setLoading(true);
    try {
      const res = await apiClient.get<FetchGenreInterface>("/genres");
      setGenres(res.data.results);
    //   setLoading(false);
    } catch (error) {
      setError((error as AxiosError).message);
    //   setLoading(false);
    }
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  return <>
      <ul>
        {genres.map(e => <li>{e.name}</li>)}
      </ul>
  </>;
};

export default GenreList;
