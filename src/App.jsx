import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound "
import css from './App.module.css';
import { NavBar } from "./components/NavBar";
import { DetailedOverview } from "./components/DetailedoOverview/DetailedOverview";
import { Actors } from "./components/Actors/Actors";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
// const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const MovieDetails = lazy(() => import("./pages/MovieDetails/MovieDetails"));



export const App = () => {

  return (
    <div>
      <NavBar />
      <Suspense fallback={<b>Loading page...</b>}>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast-of-characters" element={<Actors/>} />
            <Route path="details" element={<DetailedOverview/>} />
          </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
      </Suspense>
    </div>
  );
};
