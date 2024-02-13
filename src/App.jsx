import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { MovieCast } from "./components/MovieCast/MovieCast";
import { MovieReviews } from "./components/Reviews/MovieReviews";
import NotFound from "./pages/NotFound/NotFound ";



const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage/MovieDetailsPage"));



export const App = () => {

  return (
    <div>
      <Suspense fallback={<b>Loading page...</b>}>
        <Routes>
          <Route path="/" element={<NavBar/>}>
          <Route index element={<HomePage/>} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage/>}>
            <Route path="cast" element={<MovieCast/>} />
            <Route path="reviews" element={<MovieReviews/>} />
          </Route>
            <Route path="*" element={<NotFound/>} />
            </Route>
      </Routes>
      </Suspense>
    </div>
  );
};
