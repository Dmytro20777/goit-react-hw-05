import { Link, useLocation } from "react-router-dom";
import { MoviesListItem } from "../MoviesListItem/MoviesListItem";

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map((movie) => (
        <MoviesListItem key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} state={location} />
      ))}
    </ul>
  );
};
