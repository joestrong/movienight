import { Facebook } from 'expo';
import Config from '../config'

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
        return;
      }
      successCallback.call(this, appToken);
      return;
    }
    if (type === 'cancel') {
      failedCallback.call();
      return;
    }
  }

  static async exchangeFacebookToken(fbToken) {
    const response = await fetch(Config.apiUrl + '/auth/exchange/facebook', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: fbToken
      })
    });

    if (response.status !== 200) {
      throw new Error("Could not login with Facebook");
    }

    const responseJson = await response.json();

    return responseJson.token;
  }
}
