import { Link } from "react-router-dom";

export const TrendingTodayItem = ({id, title, poster_path }) => {
  return (
          <li>
            <Link to={`/movies/${id}`}>
              {title}
            </Link>
          </li>
  )
}
