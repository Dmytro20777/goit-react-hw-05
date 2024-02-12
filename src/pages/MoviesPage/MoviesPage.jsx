import { useLocation, useSearchParams } from "react-router-dom";
import { Search } from "../../components/Search/Search";

const MoviesPage = () => {
  const location = useLocation();
  const [params, setParams] = useSearchParams();
  const search = params.get("search") ?? "";

  const changeSearch = newSearch => {
    params.set("search", newSearch )
    setParams(params)
  }

  return (
    <div>
      <Search value={search} onChange={changeSearch} state={location} />
    </div>
  )
}

export default MoviesPage;
 



