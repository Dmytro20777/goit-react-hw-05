import { useState } from "react";

export const Search = ({ onSubmit }) => {
    const [query, setQuery] = useState("");
    

    const handleChange = event => {
        setQuery(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (!query.trim()) {
            return;
        }
        onSubmit(query);
        setQuery("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search movie"
                value={query}
                onChange={handleChange}
            />
            <button type="submit">Search</button>
        </form>
    );
}
