import { AllMovies, movieApi } from "../types/movieType";
import axios from "axios";

// Function to get all movies
export const getAllMovie = () => {
    return async (dispatch) => {
        // Send GET request to the movie API
        const res = await axios.get(`${movieApi}&api_key=${process.env.REACT_APP_MOVIE_API_KEY}`);
        // Dispatch the result to update the movie list and pages in the store
        dispatch({
            type: AllMovies,
            data: res.data.results,
            pages: res.data.total_pages
        });
    };
};

// Function to search movies by query
export const getMovieBySearch = (query) => {
    return async (dispatch) => {
        // Send GET request to search movies with a query
        const res = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&query=${query}`
        );
        // Dispatch the result to update the movie list and pages in the store
        dispatch({
            type: AllMovies,
            data: res.data.results,
            pages: res.data.total_pages
        });
    };
};

// Function to get movies by page number
export const getPage = (page) => {
    return async (dispatch) => {
        // Send GET request to get movies by page
        const res = await axios.get(
            `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=ar&page=${page}`
        );
        // Dispatch the result to update the movie list and pages in the store
        dispatch({
            type: AllMovies,
            data: res.data.results,
            pages: res.data.total_pages
        });
    };
};
