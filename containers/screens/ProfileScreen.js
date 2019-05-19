import { connect } from 'react-redux'
import ProfileScreenComponent from '../../screens/ProfileScreen'

const mapStateToProps = state => {
  return { }
}

const mapDispatchToProps = dispatch => {
  return { }
}

const ProfileScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileScreenComponent)

export default ProfileScreen
