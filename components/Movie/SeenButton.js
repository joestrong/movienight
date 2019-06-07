import React from 'react'
import { Button } from 'react-native';
import MovieService from '../../services/MovieService'

export default class SeenButton extends React.Component {
  render() {
    const seenText = (this.props.movie.seen === true) ? 'Seen' : 'Unseen'

    return (
      <Button title={seenText} onPress={e => this.onPress()} />
    )
  }

  onPress(e) {
    if (this.props.movie.seen === true) {
      MovieService.removeSeen(this.props.movie)
    } else {
      MovieService.markSeen(this.props.movie)
    }
  }
}
