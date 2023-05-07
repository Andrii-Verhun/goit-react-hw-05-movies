import axios from "axios";

const api_key = '9964dddb79a4e585f42d3b6de3c6326e';
const baseURL = 'https://api.themoviedb.org/3';

export const fetchFilms = (path, query='') => {
    return axios.get(`${path}`, {
        baseURL,
        params: {
            api_key,
            query
        },
    });
};