import { createStore , applyMiddleware} from "redux";
import {movieReducer} from "../reducer/movieReducer";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
    



export const store = createStore(movieReducer, applyMiddleware(thunk))
