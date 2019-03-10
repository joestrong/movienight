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
      let appToken;
      try {
        appToken = await this.exchangeFacebookToken(token);
        console.log(appToken);
      } catch (e) {
        homeScreen.setState({status: e.message});
      }
      homeScreen.setState({status: 'Logged in!'});
    }
    if (type === 'cancel') {
      homeScreen.setState({status: 'Could not log in with Facebook'});
    }
  }

  static async exchangeFacebookToken(fbToken) {
    const apiHost = 'http://localhost';
    const response = await fetch(apiHost + '/auth/exchange/facebook', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: fbToken
      })
    });

    const responseJson = await response.json();

    return responseJson.token;
  }
}
