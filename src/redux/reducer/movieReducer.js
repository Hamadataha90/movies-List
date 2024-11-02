import {AllMovies} from "../types/movieType";

 const initialState = {
    movies: [],
    pageCount: 0
}
export const movieReducer = (state= initialState , action) => {
    switch(action.type){
        case AllMovies:
            return {
                // ...state,
                movies: action.data,
                pageCount: action.pages
            }
        default:
            return state
    }
}