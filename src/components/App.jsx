import { NavLink, Route, Routes, useSearchParams } from "react-router-dom";

import css from './App.module.css';

import { Home } from "pages/Home/Home";
import { Movies } from "pages/Movies/Movies";
import { MovieDetails } from "../pages/MovieDetails/MovieDetails";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";

export const App = () => {
  const [searchParams, setSerchParams] = useSearchParams();
  const queryParam = searchParams.get('query');

  const handleOnSubmit =  async (evt) => {
    evt.preventDefault();
    const query = evt.target.text.value
    setSerchParams({ query });
    
    evt.target.text.value = '';
  };

  return (
    <div>
      <nav className={css.navigation}>
        <NavLink className={css.navlink} to='/' end>Home</NavLink>
        <NavLink className={css.navlink} to='/movies'>Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies onSubmit={handleOnSubmit} query={queryParam} />} />
        <Route path="/movies/:filmId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
