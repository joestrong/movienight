import 'react-native'
import React from 'react'
import SeenButton from '../SeenButton'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const movie = {
    "id": 299534,
    "title": "Avengers: Endgame",
    "posterImage": "https:\/\/image.tmdb.org\/t\/p\/w500\/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    "backdropImage": "https:\/\/image.tmdb.org\/t\/p\/w500\/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
    "seen": false
  }
  const tree = renderer.create(<SeenButton movie={movie} />).toJSON();

  expect(tree).toMatchSnapshot();
});
