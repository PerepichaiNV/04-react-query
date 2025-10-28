import type { Movie } from "../../types/movie";
import MovieCard from "../MovieCard/MovieCard";
import css from "./MovieGrid.module.css";

interface MovieGridProps {
  movies: Movie[];
  onMovieClick: (movie: Movie) => void;
}

const MovieGrid = ({ movies, onMovieClick }: MovieGridProps) => {
  return (
    <div className={css.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onClick={() => onMovieClick(movie)} />
      ))}
    </div>
  );
};

export default MovieGrid;
