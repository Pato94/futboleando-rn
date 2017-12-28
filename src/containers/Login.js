import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Image, Button, View } from 'react-native'
import { navigateAndCleanStack } from '../utils'
import Expo from 'expo'

class Login extends React.Component {
  render() {
    const signInWithGoogle = async () => {
      const result = await Expo.Google.logInAsync({
        androidClientId: "457965053885-n39fmm519fvv4v1nsa1f6no9e56ru4i4.apps.googleusercontent.com",
        iosClientId: "457965053885-lt8qi94i8hjgttfsq3t9308g9pjirk9r.apps.googleusercontent.com",
        scopes: ['email']
      });

      if (result.type === 'success') {
        console.log("Login succeeded")

        this.props.receiveUserDetails(result)
        this.props.navigation.dispatch(navigateAndCleanStack('Main'))
      } else {
        // show error
        return {cancelled: true};
      }
    }

    return <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/images/logo.png')}
      />
      <Button
        title="Sign in with Google"
        color="#ce2828"
        onPress={signInWithGoogle}
      />
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

const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => ({
  receiveUserDetails: (userDetails) => dispatch({ type: 'RECEIVE_USER_DETAILS', payload: userDetails })
})
export default connect(mapStateToProps, mapDispatchToProps)(Login)
