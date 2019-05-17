import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';

export default class Movie extends React.Component {
  render() {
    const movie = this.props.movie;
    
    return (
      <View style={styles.movie}>
        <Image source={{uri:movie.posterImage}} style={styles.image}></Image>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  movie: {
    flex: 1,
    padding: 15
  },
  image: {
    width: 300,
    height: 600
  },
  title: {}
});
