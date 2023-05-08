import { Suspense, lazy } from "react";
import { NavLink, Route, Routes, useSearchParams } from "react-router-dom";

import css from './App.module.css';

const Home = lazy(() => import("pages/Home/Home"));
const Movies = lazy(() => import("pages/Movies/Movies"));
const MovieDetails = lazy(() => import("pages/MovieDetails/MovieDetails"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));

export const App = () => {
  const [searchParams, setSerchParams] = useSearchParams();
  const queryParam = searchParams.get('query');

  const handleOnSubmit =  async (evt) => {
    evt.preventDefault();
    const query = evt.target.text.value
    setSerchParams({ query });
  };

  return (
    <div>
      <nav className={css.navigation}>
        <NavLink className={css.navlink} to='/' end>Home</NavLink>
        <NavLink className={css.navlink} to='/movies'>Movies</NavLink>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies onSubmit={handleOnSubmit} query={queryParam} />} />
          <Route path="/movies/:filmId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
        </Suspense>
    </div>
  );
};
