import { useEffect, useState } from "react";
import { GetTrendingDay } from "../../Appi";
import { useLocation } from "react-router-dom";
import { MoviesList } from "../../components/MoviesList/MoviesList";
import { Loading } from "../../components/Loading/Loading";
import { Error } from "../../components/Error/Error";
import { Title } from "../../components/Title/Title";

const HomePage = () => {
  

  // const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(false);
        const fetchMovies = await GetTrendingDay({abortController: controller})
        setMovies(fetchMovies.results); 
      } catch (error) {
        if (error.code !== "ERR_CANCELED") {
        setError(true);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();

    return () => {
      controller.abort();
    }
  }, []);
  
  return (
    <>
      {loading && <Loading/>}
      {error && <Error/>}
      <Title>Trending today</Title>
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  )
}

export default HomePage;
