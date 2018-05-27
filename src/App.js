import React, { Component } from 'react';
import './App.css';
import Moive from './Movie'

class App extends Component {

  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update: componentWillReceiveProps() -> shouldComponentUpdate() ->
  // shouldComponentUpdate() -> render() -> componentDidUpdate()

  shouldComponentUpdate() {
    return this.state
    // old props와 new props가 다르면 리액트는 update를 해야겠다!!!라고 판단
  }

  state = { }
  
  componentDidMount() {
   console.log(fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count'))
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Moive title={movie.title} poster={movie.poster} key={index}/>
     })
    return movies
  }
 
  render() {
    console.log("2. render")
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;


// JSX는 리액트로 작성하는 html