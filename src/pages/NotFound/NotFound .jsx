import { Link } from "react-router-dom";

const NotFound  = () => {
  return (
    <div>
      <h1>Sorry, page not found</h1>
      <Link to="/">To the home page</Link>
    </div>
  )
}

export default NotFound;
