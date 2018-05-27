import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis'


// 어떤 컴포넌트는 단순히 return 하기위해 존재.
// didmount, updatestate...이런 기능이 필요없음.
// 그냥 한개의 props만 있으면 됨. 1개의 html태그만 필요
function Movie(props) {
  return (
    <div className="Movie">
      <div className="Movie__Column">
        <MoviePoster poster={props.poster} alt={props.title} />
      </div>
      <div className="Movie__Column">
        <h1>{props.title}</h1>
        <div className="Movie__Genres">
          {props.genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
        </div>
        <div className="Movie__Synopsis">
          <LinesEllipsis
            text ={props.synopsis}
            maxLine ='3'
            ellipsis='...'
            trimRight
            basedOn='letters'
          />
        </div>
      </div>
    </div>
  )
}

function MoviePoster({ poster, alt }) {
  return (
    <img src={poster} alt={alt} title={alt} className="Movie__Poster" />
  )
}

function MovieGenre({ genre }) {
  return (
    <span className="Movie__Genre">{genre} </span>
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
