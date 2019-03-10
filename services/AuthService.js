import { Facebook } from 'expo';

export default class AuthService {
  
  static async loginWithFacebook(successCallback, progressCallback, failedCallback) {
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
      progressCallback.call();
      let appToken;
      try {
        appToken = await this.exchangeFacebookToken(token);
      } catch (e) {
        failedCallback.call();
      }
      successCallback.call(this, appToken);
    }
    if (type === 'cancel') {
      failedCallback.call();
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
