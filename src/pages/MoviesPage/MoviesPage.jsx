import { useLocation, useSearchParams } from "react-router-dom";
import { Search } from "../../components/Search/Search";
import { useEffect, useState } from "react";
import { GetMovieByValue } from "../../Appi";
import { Loading } from "../../components/Loading/Loading";
import { Error } from "../../components/Error/Error";
import { Title } from "../../components/Title/Title";
import { TrendingTodayList } from "../../components/TrendingTodayList/TrendingTodayList";




const MoviesPage = () => {
  const [params, setParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  const search = params.get("search") ?? "";

  const changeSubmit = newSearch => {
    setParams({ search: newSearch }) ?? {};
  }

  useEffect(() => {
    const fethMovies = async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await GetMovieByValue(search);
        setMovies(response.data.results);
      } catch(error) {
        setError(true);
        console.log("Error while fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    }
    fethMovies();
  }, [search])

  return (
    <div>
      <Search value={search} onSubmit={changeSubmit}/>

      {loading && <Loading/>}
      {error && <Error/>}
      {movies.length > 0 && <Title>Movies</Title>}
      {movies.length > 0 && <TrendingTodayList movies={movies} state={location} />}
    </div>
  )
}

export default MoviesPage;
