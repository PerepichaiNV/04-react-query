import { useState, type ChangeEvent, type FormEvent } from "react";
import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import ReactPaginate from "react-paginate";
import { fetchMovies } from "../../services/movieService";
import type { Movie, MovieResponse } from "../../types/movie";
import MovieGrid from "../MovieGrid/MovieGrid";
import MovieModal from "../MovieModal/MovieModal";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import css from "./App.module.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const queryOptions: UseQueryOptions<MovieResponse, Error, MovieResponse> = {
    queryKey: ["movies", query, page],
    queryFn: () => fetchMovies(query, page),
    enabled: !!query,
    staleTime: 1000 * 60 * 5,
  };

  const { data, isLoading, isError } = useQuery(queryOptions);
  const totalPages = data?.total_pages || 0;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery(searchTerm.trim());
    setPage(1);
  };

  return (
    <div className={css.container}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search movies..."
          className={css.searchInput}
        />
        <button type="submit" className={css.searchButton}>
          Search
        </button>
      </form>

      {isLoading && <Loader />}
      {isError && <ErrorMessage message="Error fetching movies" />}

      <MovieGrid movies={data?.results || []} onMovieClick={setSelectedMovie} />

      {totalPages > 1 && (
        <ReactPaginate
          pageCount={totalPages}
          pageRangeDisplayed={5}
          marginPagesDisplayed={1}
          onPageChange={({ selected }) => setPage(selected + 1)}
          forcePage={page - 1}
          containerClassName={css.pagination}
          activeClassName={css.active}
          nextLabel="→"
          previousLabel="←"
        />
      )}

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  );
};

export default App;
