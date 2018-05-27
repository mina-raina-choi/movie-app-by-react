import React, { Component } from 'react';
import './App.css';
import Moive from './Movie'

class App extends Component {
  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update: componentWillReceiveProps() -> shouldComponentUpdate() -> shouldComponentUpdate() -> render() -> componentDidUpdate()

  shouldComponentUpdate() {
    return this.state;
    // old props와 new props가 다르면 리액트는 update를 해야겠다!!!라고 판단
  }

  state = {};

  componentDidMount() {
    this._getMovies();
    this._asyncFirst();
    this._asyncSecond();
  }


  // asyncronous : 이전 라인의 작업이 끝날 때까지 기다리는 것이 아닐 때,
  // 이전 작업이 끝나야 다음 작업이 시작되는 형태가 아니다...순서와 상관없이 실행
   _getMovies = async () => {
    const movies = await this._callApi(); 
    // await는 callApi가 끝나기를 기다린다. (그 값이 성공적이든 아니든)
    this.setState({
      movies
    })
  };

  _asyncFirst = () => {
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=title")
      .then(res => res.json())
      .then(json => console.log("_asyncFirst", json))
      .catch(err => console.log(err));
  }

  _asyncSecond = () => {
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=year")
      .then(res => res.json())
      .then(json => console.log("_asyncSecond", json))
      .catch(err => console.log(err));
  }
 
  _callApi = () => {
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=download_count")
      .then(res => res.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err));
  };

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return <Moive title={movie.title} poster={movie.large_cover_image} key={movie.id} />;
    });
    return movies;
  };

  render() {
    console.log("2. render");
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;


// JSX는 리액트로 작성하는 html