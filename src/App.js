import React, { Component } from 'react';
import './App.css';
import Moive from './Movie'


const movieTitles = [
  "Matrics",
  "Full Metal Jacket",
  "Oldboy",
  "Star Wars"
]

const movieImages = [
  "https://cdn.namuwikiusercontent.com/s/b7f0bd8736d9a7bdd3bffc9bd9cf20d2ca8016b3d198dd2fb354c2eb34382b1ca69114814b95ef28b4d4d9eca6f32a0aac8c4eea562b30dbabbf73e57cb73de715d09185821a46df7fb68a7cc2cd7394?e=1529190443&k=_I2LpkY1sWZLVpYQmnLAEw",
  "http://www.skolice.me/wp-content/uploads/2017/12/DAH-%C5%BDIVOTA-712x1024.jpg",
  "https://upload.wikimedia.org/wikipedia/en/6/67/Oldboykoreanposter.jpg",
  "http://www.skolice.me/wp-content/uploads/2017/12/Star-Wars-Posljednji-d%C5%BEedaji-2-e1513171731333.jpg"
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Moive title={movieTitles[0]} poster={movieImages[0]}/>
        <Moive title={movieTitles[1]} poster={movieImages[1]}/>
        <Moive title={movieTitles[2]} poster={movieImages[2]}/>
        <Moive title={movieTitles[3]} poster={movieImages[3]}/>
      </div>
    );
  }
}

export default App;


// JSX는 리액트로 작성하는 html