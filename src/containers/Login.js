import React from 'react'
import { StyleSheet, Image, Button, View } from 'react-native'

export default class Login extends React.Component {
  render() {
    const signInWithFacebook = () => {
      console.log("sign in with facebook!")
    }

    const signInWithGoogle = () => {
      console.log("sign in with google!")
    }

    return <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/images/logo.png')}
      />
      <View>
        <Button
          title="Sign in with Facebook"
          color="#3b5998"
          onPress={signInWithFacebook}
        />
        <Button
          title="Sign in with Google"
          color="#ce2828"
          onPress={signInWithGoogle}
        />
      </View>
    </View>
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: '#4cae46',
    padding: 20
  },
  logo: {
    width: 220,
    height: 300, 
    alignSelf: 'center'
  }
})
