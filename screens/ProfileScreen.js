import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
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
    
  render() {
    const profile = this.state.profile

    if (!profile) {
      return null
    }

    return (
      <View style={styles.profile}>
        <Text style={styles.name}>{profile.name}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  profile: {
    padding: 15
  },
  name: {
    fontSize: 20
  }
});
