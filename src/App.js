import React from 'react';

import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
import MovieDetails from "./components/MovieDetails";

import { useState } from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";

function App() {
 




  
  

  
  

  

  return (
    <div className="font color-body">
      
      <Container>
        <BrowserRouter>
        <NavBar />
          <Routes>
        
            <Route path="/" element={<MoviesList  /> }/>
            
            <Route path="/movie/:id" element={<MovieDetails />}/>
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
