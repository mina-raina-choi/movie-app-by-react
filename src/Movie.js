import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

// 어떤 컴포넌트는 단순히 return 하기위해 존재.
// didmount, updatestate...이런 기능이 필요없음.
// 그냥 한개의 props만 있으면 됨. 1개의 html태그만 필요
function Movie(props) {
  return (
    <div>
      <MoviePoster poster={props.poster} />
      <h1>{props.title}</h1>
    </div>
  )
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
}

function MoviePoster({poster}) {
  return (
    <img src={poster} />
  )
}
// functional한 컴포넌트는 아래와 같이 타입체크
MoviePoster.prototypes = {
  poster: PropTypes.string.isRequired,
}

export default Movie;
