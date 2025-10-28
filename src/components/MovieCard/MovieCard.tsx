import type { Movie } from "../../types/movie";
import css from "./MovieCard.module.css";

interface MovieCardProps {
  movie: Movie;
  onClick?: () => void;
}

const MovieCard = ({ movie, onClick }: MovieCardProps) => {
  return (
    <div className={css.card} onClick={onClick}>
      {movie.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={movie.title}
        />
      )}
      <h3>{movie.title}</h3>
      <p>{movie.release_date}</p>
    </div>
  );
};

export default MovieCard;
