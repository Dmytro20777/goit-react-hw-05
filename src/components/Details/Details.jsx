import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {AppiMovieId} from "../../Appi"

export const CastOfCharacters = () => {
  const { movieId } = useParams(); 
    const [movieDetails, setMovieDetails] = useState([]); 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(false);
                const response = await AppiMovieId(movieId);
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
            {loading && <p>Loading...</p>}
            {error && <p>Reloading page</p>}
            {movieDetails && <p>{movieDetails.overview}</p>}

        </>
    );
}
