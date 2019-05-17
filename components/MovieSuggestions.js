import React from 'react'
import MovieList from '../components/MovieList'
import Config from '../config'

export default class MovieSuggestions extends React.Component {
  render() {
    if (this.props.movies) {
      return (
        <MovieList movies={this.props.movies}></MovieList>
      )
    } else {
      return null
    }
  }

  async componentDidMount() {
    const movies = await this.loadMovies()
    this.props.onLoad(movies)
  }

  async loadMovies() {
    const response = await fetch(Config.apiUrl + '/movies', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.props.userToken
      }
    })

    if (response.status !== 200) {
      throw new Error("Could not fetch movies")
    }

    const jsonData = await response.json()

    return jsonData.data ? jsonData.data : []
  }
}