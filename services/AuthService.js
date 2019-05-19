import { Facebook } from 'expo';
import Config from '../config'
import {AsyncStorage} from 'react-native'
import Actions from '../actions/Actions'

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

  static async checkForExistingLogin(store) {
    const token = await AsyncStorage.getItem('user-token')
    const response = await fetch(Config.apiUrl + '/auth/validate-token', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: token
      })
    })

    if (response.status !== 200) {
      return;
    }
    const responseJson = await response.json();
    const validity = responseJson.valid;

    if (validity === true) {
      store.dispatch({type: Actions.LOGIN, token: token})
    }
  }
}
