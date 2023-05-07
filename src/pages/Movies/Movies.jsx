import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import css from './Movies.module.css';

import { fetchFilms } from 'API/fetchFilms';

const Movies = ({ onSubmit, query }) => {
    const [films, setFilms] = useState(undefined);
    const location = useLocation();

    useEffect(() => {
        if (!query) return;
        (async () => {
            try {
                const { data: {results} } = await fetchFilms(`/search/movie`, query);
                setFilms(results);
            } catch (error) {
                console.log(error);
            };
        })();
    }, [query]);

    return (
        <div className={css.container}>
            <form onSubmit={onSubmit}>
                <input className={css.input} name='text' type="text" />
                <button type="submit">Search</button>
            </form>
            <ul>
                {films && films.map((el) => (
                    <li key={el.id}>
                        <Link to={`/movies/${el.id}`} state={{from: location}}>{el.original_title}</Link>       
                    </li>   
                ))}
            </ul>
        </div>
        );
};

export default Movies;