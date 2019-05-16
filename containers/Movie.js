import { connect } from 'react-redux'
import MovieComponent from '../components/Movie'

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

const Movie = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieComponent)

export default Movie
