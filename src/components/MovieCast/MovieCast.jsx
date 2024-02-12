import { useEffect, useState } from "react";
import { GetCast } from "../../Appi";
import { useParams } from "react-router-dom";
import styles from "./MovieCast.module.css";

export const MovieCast = () => {
    const { movieId } = useParams();
    const [credits, setCredits] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

    useEffect(() => {
        const fetchCredits = async () => {
            try {
                setLoading(true);
                setError(false);
                const response = await GetCast(movieId);
                setCredits(response.cast);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        fetchCredits();
    }, [movieId]);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error fetching credits</p>}
            <ul className={styles.actorList}>
                {credits.map(({ cast_id, character, name, profile_path }) => (
                    <li key={cast_id} className={styles.actor}>
                        {profile_path ? (<img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name} className={styles.actorImage} />
                        ) : (<img src={defaultImg} alt={name} className={styles.actorImage} />)}
                        <p className={styles.actorName}>Name: {name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
