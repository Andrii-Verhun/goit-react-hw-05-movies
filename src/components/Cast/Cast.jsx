import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import css from './Cast.module.css';

import { fetchFilms } from 'API/fetchFilms';

const Cast = () => {
    const [cast, setCast] = useState([]);
    const {filmId} = useParams();

    useEffect(() => {
        (async () => {
            try {
                const { data: { cast } } = await fetchFilms(`/movie/${filmId}/credits`);
                const topCast = cast.splice(0, 10)
                setCast(topCast);
            } catch (error) {
                console.log(error);
            };
        })();
    }, [filmId]);


    return (
        <div className={css.container}>
            {cast.length === 0 ? <p>Not information</p> : (<ul>
                {cast.map((el) => (
                    <li key={el.id}>
                        <img className={css.imgCast} src={`https://image.tmdb.org/t/p/w200${el.profile_path}`} alt="" />
                        <p>{el.name}</p>
                        <p>Character: {el.character}</p>
                    </li>
                ))}
            </ul>)}
        </div>
    );
};

export default Cast;