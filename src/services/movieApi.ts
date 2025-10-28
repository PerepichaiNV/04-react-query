import axios from "axios";
import type { MovieResponse } from "../types/movie";

const API_KEY = "d09c3f3b7a1f50b5c7ca8b2d5ec2df23";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (
  query: string,
  page: number
): Promise<MovieResponse> => {
if (!query) {
  return {
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0,
  };
}

  const { data } = await axios.get<MovieResponse>(`${BASE_URL}/search/movie`, {
    params: { api_key: API_KEY, query, page },
  });

  return data;
};
