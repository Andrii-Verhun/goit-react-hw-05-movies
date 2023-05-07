import { NavLink, Route, Routes } from "react-router-dom";

import css from './App.module.css';

import { Home } from "pages/Home/Home";
import { Movies } from "pages/Movies/Movies";
import { MovieDetails } from "../pages/MovieDetails/MovieDetails";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";

export const App = () => {
  return (
    <div>
      <nav className={css.navigation}>
        <NavLink className={css.navlink} to='/' end>Home</NavLink>
        <NavLink className={css.navlink} to='/movies'>Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:filmId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
