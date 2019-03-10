import { Facebook } from 'expo';

export default class AuthService {
  
  static async loginWithFacebook(homeScreen) {
    const appId = '611264925979151';
    const {type, token} = await Facebook.logInWithReadPermissionsAsync(
      appId,
      {
        permissions: [
          'public_profile'
        ]
      },
    );

    if (type === 'success' && token) {
      homeScreen.setState({status: 'Logging in...'});
    }
    if (type === 'cancel') {
      homeScreen.setState({status: 'Could not log in with Facebook'});
    }
  }
}
