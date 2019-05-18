import React from 'react'
import { ImageBackground, Text, Image, StyleSheet } from 'react-native';

export default class Movie extends React.Component {
  render() {
    const movie = this.props.movie;
    
    return (
      <ImageBackground source={{uri:movie.backdropImage}} style={styles.movie}>
        <Image source={{uri:movie.posterImage}} style={styles.image}></Image>
        <Text style={styles.title}>{movie.title}</Text>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  movie: {
    flexDirection: 'row',
    margin: 15,
    padding: 15
  },
  image: {
    width: 150,
    height: 225
  },
  title: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0.5)',
    fontSize: 20,
    padding: 15
  }
});
