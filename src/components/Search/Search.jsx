import axios from "axios";
import { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { SearchValue } from "../../Appi";

export const Search = ({ value, onChange }) => {
    const [searchResults, setSearchResults] = useState([]);
    const location = useLocation();
    const searchResultsRef = useRef([]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const trimmedQuery = value.trim();
        
        try {
            const response = await SearchValue(trimmedQuery);
            setSearchResults(response.data.results);
            searchResultsRef.current = response.data.results; 
        } catch(error) {
            console.log("Error while fetching movie details:", error);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="search movie"
                    value={value}
                    onChange={(event) => onChange(event.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            <ul>
                {searchResults.map(({ id, title, backdrop_path }) => (
                    <li key={id}>
                        <Link to={{
                                pathname: `/movies/${id}`,
                                state: {
                                    searchResults,
                                    location,
                                },
                            }} state={location}>
                            {title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}
