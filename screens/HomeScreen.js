import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import MovieSuggestions from '../containers/MovieSuggestions';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Movie Night',
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <MovieSuggestions></MovieSuggestions>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  }
});
