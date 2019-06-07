import Config from '../config'
import store from '../store'
import Actions from '../actions/Actions'

export default class MovieService {
  
  static async markSeen(movie) {
    const response = await fetch(Config.apiUrl + '/movies/' + movie.id + '/seen', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + store.getState().user.token
      }
    })

    if (response.status !== 200) {
      return
    }

    store.dispatch({type: Actions.SEEN, movie: movie})
  }

  static async removeSeen(movie) {
    const response = await fetch(Config.apiUrl + '/movies/' + movie.id + '/seen', {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + store.getState().user.token
      }
    })

    if (response.status !== 200) {
      return
    }

    store.dispatch({type: Actions.UNSEEN, movie: movie})
  }
}
