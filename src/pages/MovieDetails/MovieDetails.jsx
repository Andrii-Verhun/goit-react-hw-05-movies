import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import css from './MovieDetails.module.css';

import { fetchFilms } from 'API/fetchFilms';
import { useEffect, useState } from 'react';

export const MovieDetails = () => {
    const [filmDetails, setFilmDetails] = useState({ genres: []});
    const {filmId} = useParams();
    const location = useLocation();

    const backLinkHref = location.state?.from ?? "/";

    useEffect(() => {
        (async () => {
            try {
                const { data } = await fetchFilms(`/movie/${filmId}`);
                setFilmDetails(data);
            } catch (error) {
                console.log(error);
            };
        })();
    }, [filmId]);

    return (
        <>
            <div className={css.container}>
                <Link className={css.link} to={backLinkHref}>Go back</Link>
                <div className={css.filmDetails}>
                    <img src={`https://image.tmdb.org/t/p/w200${filmDetails.poster_path}`} alt="" />
                    <div className={css.description}>
                        <h2>{filmDetails.original_title} ({new Date(filmDetails.release_date).getFullYear()})</h2>
                        <p>User score: {Math.round(filmDetails.vote_average * 10)}%</p>
                        <h3>Overview</h3>
                        <p>{filmDetails.overview}</p>
                        <h3>Genres</h3>
                        <p>{filmDetails.genres.map((el)=> el.name).join(' ')}</p>
                    </div>
                </div>
            </div>
            <div className={css.container}>
                <h4>Additional information</h4>
                <ul>
                    <li><Link to={`cast`} state={{from: backLinkHref}}>Cast</Link></li>
                    <li><Link to={`reviews`} state={{from: backLinkHref}}>Reviews</Link></li>
                </ul>
            </div>
            <Outlet />
        </>
    );
};

