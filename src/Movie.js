import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

class Movie extends Component {

  // 부모컴포넌트에서 전달되는 데이터, 데이터타입을 체크
  static propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string,
  }

  render() {
    // console.log(this.props)
    return (
      <div>
        <MoviePoster poster={this.props.poster}/>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

class MoviePoster extends Component {
  render() {
    console.log(this.props)
    return (
      <img src={this.props.poster} />
    )
  }
}

export default Movie;
