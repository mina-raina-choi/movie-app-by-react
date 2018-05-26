import React, { Component } from 'react';
import './App.css';
import Moive from './Movie'

// 모든 정보는 최상위컴포넌트에 있고, 하위컴포넌트에 props를 통해 전달.
const movies = [
  {
    title: "Matrics",
    poster: "https://cdn.namuwikiusercontent.com/s/b7f0bd8736d9a7bdd3bffc9bd9cf20d2ca8016b3d198dd2fb354c2eb34382b1ca69114814b95ef28b4d4d9eca6f32a0aac8c4eea562b30dbabbf73e57cb73de715d09185821a46df7fb68a7cc2cd7394?e=1529190443&k=_I2LpkY1sWZLVpYQmnLAEw",
  },
  {
    title: "Full Metal Jacket",
    poster: "http://www.skolice.me/wp-content/uploads/2017/12/DAH-%C5%BDIVOTA-712x1024.jpg",
  },
  {
    title: "Oldboys",
    poster: "https://upload.wikimedia.org/wikipedia/en/6/67/Oldboykoreanposter.jpg",
  },
  {
    title: "Star Wars",
    poster: "http://www.skolice.me/wp-content/uploads/2017/12/Star-Wars-Posljednji-d%C5%BEedaji-2-e1513171731333.jpg"
  }
]

class App extends Component {

  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update: componentWillReceiveProps() -> shouldComponentUpdate() ->
  // shouldComponentUpdate() -> render() -> componentDidUpdate()


  componentWillReceiveProps() {

  }
  
  shouldComponentUpdate() {
    // old props와 new props가 다르면 리액트는 update를 해야겠다!!!라고 판단
  }

  componentWillUpdate() {

  } 

  componentDidUpdate() {

  }



  componentWillMount() {
    console.log("1. componentWillMount")
    // api 요청 
  }

  componentDidMount() {
    console.log("3. componentDidMount")
    // 로딩성공
  }

  render() {
    console.log("2. render")
    return (
      <div className="App">
        {movies.map((movie, index) => {
         return <Moive title={movie.title} poster={movie.poster} key={index}/>
        })}
      </div>
    );
  }
}

export default App;


// JSX는 리액트로 작성하는 html