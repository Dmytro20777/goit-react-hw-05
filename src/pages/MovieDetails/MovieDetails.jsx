import { useEffect, useRef, useState, Suspense } from "react";
import { NavLink, Outlet, useLocation, useParams, Link } from "react-router-dom";
import { AppiMovieId } from "../../Appi";
import styles from "./MovieDetails.module.css";
import { Loading } from "../../components/Loading/Loading";
import { Error } from "../../components/Error/Error";
import { Title } from "../../components/Title/Title";

const MovieDetails = () => {

    const location = useLocation();
    const backLinkRef = useRef(location.state);
    console.log(backLinkRef);

    const { movieId } = useParams(); 
    const [movieDetails, setMovieDetails] = useState([]); 
    const [imageUrl, setImageUrl] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(false);
                const response = await AppiMovieId(movieId);
                setMovieDetails(response);

                const posterPath = response.poster_path;
                if (posterPath) {
                    const baseUrl = "https://image.tmdb.org/t/p/w500";
                    const fullUrl = `${baseUrl}${posterPath}`;
                    setImageUrl(fullUrl);
                }
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
                {imageUrl && <img className={styles.movieDetailsImage} src={imageUrl} alt={movieDetails.original_title} />}
                <p className={styles.movieDetailsOverview}><strong>Overview:</strong> {movieDetails.overview}</p>
                <p className={styles.movieDetailsPopularity}><strong>Popularity:</strong> {movieDetails.popularity}</p>
            </div>
            
            <Suspense fallback={<b>Loading...</b>}>
                <nav>
                    <li>
                        <NavLink to="details">Details</NavLink>
                    </li>
                    <li>
                        <NavLink to="cast-of-characters"> Сast of characters</NavLink>
                    </li>
                </nav>
            </Suspense>

            <Outlet/>
        </>
    );
};

export default MovieDetails;
