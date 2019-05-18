import React from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
  AsyncStorage
} from 'react-native';
import AuthService from '../services/AuthService';

export default class LoginScreen extends React.Component {
  
  async onLogin(token) {
    await AsyncStorage.setItem('user-token', token)
    this.props.onLogin(token)
  }

  onLoginProgress() {
    this.props.onLoginProgress();
  }

  onLoginFailure() {
    this.props.onLoginFailure();
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Text id="status">{this.props.loginStatus}</Text>
            <Button
              onPress={_ => AuthService.loginWithFacebook(token=>{this.onLogin(token)}, _=>{this.onLoginProgress()}, _=>{this.onLoginFailure()})}
              title="Log in with Facebook"
            />
          </View>
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
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
});
