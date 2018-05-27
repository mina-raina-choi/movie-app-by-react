import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

// 어떤 컴포넌트는 단순히 return 하기위해 존재.
// didmount, updatestate...이런 기능이 필요없음.
// 그냥 한개의 props만 있으면 됨. 1개의 html태그만 필요
function Movie(props) {
  return (
    <div className="Movie">
      <div className="Movie_Columns">
        <MoviePoster poster={props.poster} alt={props.title} />
      </div>
      <div className="Movie_Columns">
        <h1>{props.title}</h1>
        <div className="Movie_Genres">
          {props.genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
        </div>
        <div className="Movie_Synopsis">
          {props.synopsis}
        </div>
      </div>
    </div>
  )
}

function MoviePoster({ poster, alt }) {
  return (
    <img src={poster} alt={alt} title={alt} className="Movie_Poster" />
  )
}

function MovieGenre({ genre }) {
  return (
    <span className="Movie_Genre">{genre} </span>
  )
}


// functional한 컴포넌트는 아래와 같이 타입체크
Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired
}

MoviePoster.prototypes = {
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired
}

export default Movie;
