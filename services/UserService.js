import Config from '../config'
import store from '../store'

export default class UserService {
  
  static async getProfile() {
    const response = await fetch(Config.apiUrl + '/user/my-profile', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + store.getState().user.token
      }
    })

    if (response.status !== 200) {
      return
    }

    const jsonData = await response.json()

    return jsonData.data
  }
}
