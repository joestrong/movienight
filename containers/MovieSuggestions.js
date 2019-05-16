import { connect } from 'react-redux'
import MovieList from '../components/MovieList'
import Actions from '../actions/Actions'

const mapStateToProps = state => {
  return {
    movies: state.lists.movieSuggestions.movies
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoad: movies => {
      dispatch({type: Actions.MOVIE_SUGGESTIONS_LOAD})
    }
  }
}

const MovieSuggestions = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList)

export default MovieSuggestions
