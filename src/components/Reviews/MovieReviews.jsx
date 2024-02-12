import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { Loading } from "../Loading/Loading";
import { Error } from "../Error/Error";
import { movieReviews } from "../../Appi";

export const MovieReviews = () => {
    const { movieId } = useParams(); 
    const [reviews, setReviews] = useState([]); 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const maxReviewsToShow = 3;

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(false);
                const response = await movieReviews(movieId);
                setReviews(response.results.slice(0, maxReviewsToShow));
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false)
            }
        };

        fetchData(); 
    }, [movieId, maxReviewsToShow]);

return (
    <>
        {loading && <Loading/>}
        {error && <Error/>}
        {reviews && reviews.length > 0 ? (
            <div>
                <h2>Reviews</h2>
                <ul>
                    {reviews.map(review => (
                        <li key={review.id}>
                            <p><strong>Author:</strong> {review.author}</p>
                            <p><strong>Review:</strong> {review.content}</p>
                        </li>
                    ))}
                </ul>
            </div>
        ) : (
            <p>No reviews available</p>
        )}
    </>
);
}
