import { connect } from 'react-redux'
import HomeScreen from '../../screens/HomeScreen'
import actions from '../../actions/Actions'

const mapStateToProps = state => {
  return {
    loginStatus: state.messages.loginStatus
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: token => {
      dispatch({ type: actions.LOGIN, token: token })
    },
    onLoginProgress: _ => {
      dispatch({ type: actions.LOGIN_PROGRESS })
    },
    onLoginFailure: _ => {
      dispatch({ type: actions.LOGIN_FAILURE })
    }
  }
}

const MovieNightHomeScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)

export default MovieNightHomeScreen
