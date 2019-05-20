import React from 'react'
import { View, Text, ScrollView, Button, StyleSheet } from 'react-native'
import AuthService from '../services/AuthService'
import UserService from '../services/UserService'

export default class SettingsScreen extends React.Component {
  state = {
    profile: null
  }
  static navigationOptions = {
    title: 'Profile',
  }
  
  async componentDidMount() {
    const profile = await UserService.getProfile()

    this.setState({ profile: profile })
  }
  
  async onClick() {
    await AuthService.logout()
  }
    
  render() {
    const profile = this.state.profile

    if (!profile) {
      return null
    }

    return (
      <View style={styles.container}>
        <ScrollView style={styles.profile}>
          <Text style={styles.name}>{profile.name}</Text>
        </ScrollView>
        <View style={styles.actions}>
          <Button onPress={_ => this.onClick()} title="Log Out"/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  profile: {
    flex: 1,
    padding: 15
  },
  name: {
    fontSize: 20
  },
  actions: {
  }
});
