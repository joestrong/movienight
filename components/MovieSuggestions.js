import React from 'react'
import MovieList from '../components/MovieList'

export default class MovieSuggestions extends React.Component {
  render() {
    if (props.movies) {
      return (
        <MovieList movies={props.movies}></MovieList>
      )
    } else {
      return ''
    }
  }

  componentDidMount() {
    const movies = this.loadMovies()
    this.props.onLoad(movies)
  }

  async loadMovies() {
    const response = await fetch(Config.apiUrl + '/movies', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })

    if (response.status !== 200) {
      throw new Error("Could not fetch movies")
    }

    return await response.json()
  }
}