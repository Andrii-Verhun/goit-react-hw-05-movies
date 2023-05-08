import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import css from './Movies.module.css';

import { fetchFilms } from 'API/fetchFilms';

const Movies = ({ onSubmit, query }) => {
    const [films, setFilms] = useState(undefined);
    const [searchParams] = useSearchParams();
    const location = useLocation();
    const queryParam = searchParams.get('query');
    const input = useRef();

    useEffect(() => {
        if (queryParam) input.current.value = queryParam;
    });

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
                <input className={css.input} ref={input} name='text' type="text" />
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

Movies.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    query: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.bool.isRequired
  ]),
};