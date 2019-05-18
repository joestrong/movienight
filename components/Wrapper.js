import React from 'react';
import AppNavigator from '../navigation/AppNavigator';
import LoginScreen from '../containers/screens/LoginScreen';

export default class Wrapper extends React.Component {
  render() {
    if (this.props.loggedIn) {
      return (
        <AppNavigator />
      );
    }

    return (
      <LoginScreen />
    );
  }
}