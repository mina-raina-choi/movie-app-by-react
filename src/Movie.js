import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
  render() {
    return (
      <div>
        <MoviePoster/>
        <h1>Movie Component</h1>
      </div>
    );
  }
}

class MoviePoster extends Component {
  render() {
    return (
      <img src="http://cdn-static.denofgeek.com/sites/denofgeek/files/styles/main_wide/public/4/32//hunger_games_lead.jpg?itok=v42MvbAM" />
    )
  }
}

export default Movie;
