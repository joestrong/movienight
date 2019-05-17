import { connect } from 'react-redux'
import MovieSuggestionsComponent from '../components/MovieSuggestions'
import Actions from '../actions/Actions'

const mapStateToProps = state => {
  return {
    movies: state.lists.movieSuggestions.movies,
    userToken: state.user.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoad: movies => {
      dispatch({type: Actions.MOVIE_SUGGESTIONS_LOAD, movies: movies})
    }
  }
}

const MovieSuggestions = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieSuggestionsComponent)

export default MovieSuggestions
