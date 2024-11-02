import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import CardMovie from './CardMovie';
import NoMoviesAnimation from './NoMoviesAnimation'; // Importing the animation component
import PaginationList from './Pagination'; 
import { useDispatch, useSelector } from 'react-redux';
import {getAllMovie} from "../redux/actions/movieAction"


const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMovie());
  }, []);

  const dataMovies = useSelector((state) => state.movies);
  
  useEffect(() => {
    setMovies(dataMovies);
  }, [dataMovies]);



  return (
    <Row className='mt-3 justify-content-center align-items-center'>
      {movies.length >= 1 ? 
      (<PaginationList />) :null}
      
      {movies.length >= 1 ? (
        movies.map((mov) => (
          <CardMovie key={mov.id} mov={mov} />
        ))
      ) : (
        <NoMoviesAnimation /> // Render NoMoviesAnimation when there are no movies
      )}
      {/* <PaginationList getPage = {getPage} /> */}
    </Row>
  );
};

export default MoviesList;
