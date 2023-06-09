import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import css from './Reviews.module.css';

import { fetchFilms } from 'API/fetchFilms';


const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { filmId } = useParams();
    
    useEffect(() => {
        (async () => {
            try {
                const { data: {results} } = await fetchFilms(`/movie/${filmId}/reviews`);
                setReviews(results);
            } catch (error) {
                console.log(error);
            };
        })();
    }, [filmId]);

    return (
        <div className={css.container}>
            {reviews.length === 0 ? <p>Not reviews</p> : (<ul>
                {reviews.map((el) => (
                    <li key={el.id}>
                        <p className={css.name}>Author: {el.author}</p>
                        <p>{el.content}</p>
                    </li>
                ))}
            </ul>)}
        </div>
    );
};

export default Reviews;