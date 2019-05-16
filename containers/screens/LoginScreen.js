import { connect } from 'react-redux'
import LoginScreen from '../../screens/LoginScreen'
import actions from '../../actions/Actions'

const mapStateToProps = state => {
  console.log(state)
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

const MovieNightLoginScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen)

export default MovieNightLoginScreen
