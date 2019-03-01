import { Facebook } from 'expo';

export default class AuthService {
  
  static async loginWithFacebook() {
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
      // todo get api token
    }
  }
}
