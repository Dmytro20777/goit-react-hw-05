import { useEffect, useRef, useState, Suspense } from "react";
import { NavLink, Outlet, useLocation, useParams, Link } from "react-router-dom";
import { GetMovieDatails } from "../../Appi";
import styles from "./MovieDetailsPage.module.css";
import { Loading } from "../../components/Loading/Loading";
import { Error } from "../../components/Error/Error";
import { Title } from "../../components/Title/Title";

const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MovieDetails = () => {
    const location = useLocation();
    const backLinkRef = useRef(location.state);

    const { movieId } = useParams(); 
    const [movieDetails, setMovieDetails] = useState([]); 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(false);
                const response = await GetMovieDatails(movieId);
                setMovieDetails(response);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false)
            }
        };

        fetchData(); 
    }, [movieId]);



    return (
        <>
            <Link to={backLinkRef.current ?? '/'}>Back to movies</Link>
            
            <div className={styles.movieDetailsContainer}>
                {loading && <Loading/>}
                {error && <Error/>}
                <Title className={styles.movieDetailsTitle}>Movie Details</Title>
                <img className={styles.movieDetailsImage} src={movieDetails.poster_path ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
                    : defaultImg} alt={movieDetails.original_title}/>
                <p className={styles.movieDetailsOverview}><strong>Overview:</strong> {movieDetails.overview}</p>
                <p className={styles.movieDetailsPopularity}><strong>Popularity:</strong> {movieDetails.popularity}</p>
            </div>
            
            <Suspense fallback={<b>Loading...</b>}>
                <nav>
                    <li>
                        <NavLink to="reviews">Reviews</NavLink>
                    </li>
                    <li>
                        <NavLink to="cast">Cast</NavLink>
                    </li>
                </nav>
            </Suspense>

            <Outlet/>
        </>
    );
};

export default MovieDetails;
