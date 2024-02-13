import { Link, useLocation } from "react-router-dom";

export const TrendingTodayItem = ({ id, title, poster_path }) => {
  const location = useLocation()
  return (
          <li>
            <Link to={`/movies/${id}`} state={location}>
              {title}
            </Link>
          </li>
  )
}
