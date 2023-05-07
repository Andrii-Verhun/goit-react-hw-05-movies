import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import css from './Home.module.css';

import { fetchFilms } from 'API/fetchFilms';

const Home = () => {
    const [topFilms, setTopFilms] = useState([]);
    const location = useLocation();

    useEffect(() => {
        (async () => {
            try {
                const {data: {results}} = await fetchFilms('/trending/movie/day');
                setTopFilms(results);
            } catch (error) {
                console.log(error);
            };
        })();
    }, []);

    return (
        <div className={css.container}>
            <h1>Trending today</h1>
            <ul>
                {topFilms.map((el) => (
                    <li key={el.id}>
                        <Link to={`/movies/${el.id}`} state={{from: location}}>{el['original_title']}</Link>
                    </li>))}
            </ul>
        </div>
    );
};

export default Home;