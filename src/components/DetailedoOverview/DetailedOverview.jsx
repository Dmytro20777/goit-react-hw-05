import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {AppiMovieId} from "../../Appi"
import { Loading } from "../Loading/Loading";
import { Error } from "../Error/Error";

export const DetailedOverview = () => {
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
            {loading && <Loading/>}
            {error && <Error/>}
            {movieDetails && <p>{movieDetails.overview}</p>}

        </>
    );
}
