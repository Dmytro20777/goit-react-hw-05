import { Link } from "react-router-dom";
import { TrendingTodayItem } from "../TrendingTodayItem/TrendingTodayItem";

export const TrendingTodayList = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <TrendingTodayItem key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} />
      ))}
    </ul>
  );
};
