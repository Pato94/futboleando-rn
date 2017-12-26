import React from 'react'
import { StyleSheet, Button, View } from 'react-native'

export default class LoginScreen extends React.Component {
  render() {
    return <View style={styles.container}>
      <Button title='Login'>Login</Button>
    </View>
  }
}

LoginScreen.navigationOptions = {
  title: 'Login'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
