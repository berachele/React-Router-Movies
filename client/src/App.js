import React, { useState } from 'react';
import { Route, Link } from "react-router-dom"
import SavedList from './Movies/SavedList';
import MovieList from "./Movies/MovieList"

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path = "/">
        {/* Replace this Div with your Routes */}
        <MovieList />
      </Route>
      
      <Route>
        
      </Route>
    </div>
  );
};

export default App;
