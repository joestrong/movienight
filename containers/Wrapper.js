import { connect } from 'react-redux'
import Wrapper from '../components/Wrapper'

const mapStateToProps = state => {
  return {
    loggedIn: state.user.loggedIn
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const MovieNightWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(Wrapper)

export default MovieNightWrapper
