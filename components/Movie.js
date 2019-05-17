import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export default class Movie extends React.Component {
  render() {
    return (
      <View style={styles.movie}>
        <Text>{this.props.movie.title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  movie: {
    flex: 1,
    padding: 15
  }
});
