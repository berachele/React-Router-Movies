import React, { useState } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom"
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <BrowserRouter>
      <SavedList list={savedList} />
      <Route>Replace this Div with your Routes</Route>
    </BrowserRouter>
  );
};

export default App;
