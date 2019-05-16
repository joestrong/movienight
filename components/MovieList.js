import React from 'react'
import Movie from '../containers/Movie'

export default class MovieList extends React.Component {
  render() {
    return this.props.movies.map((movie, index) => {
      return (
        <Movie key={index} movie={movie}></Movie>
      )
    })
  }
}