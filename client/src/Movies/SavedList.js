import React from 'react';
import {useHistory} from "react-router-dom"

const SavedList = props => {
  const history =useHistory()
  // console.log("history-->", history)

  const goHome = () => {
    // console.log("Submitting...")
    history.push("/")
    
  }
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <div onClick={goHome} className="home-button">Home</div>
    </div>
  );
}
export default SavedList;
