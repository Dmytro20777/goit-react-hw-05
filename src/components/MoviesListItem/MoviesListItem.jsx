import { Link, useLocation } from "react-router-dom";

export const MoviesListItem = ({ id, title }) => {
  const location = useLocation()
  return (
          <li>
            <Link to={`/movies/${id}`} state={location}>
              {title}
            </Link>
          </li>
  )
}
