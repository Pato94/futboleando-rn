import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Button, View } from 'react-native'

const mapDispatchToProps = (dispatch) => ({
  onLoginClicked: () => dispatch({ type: 'LOGIN_CLICK' })
})

class LoginScreen extends React.Component {
  render() {
    const { onLoginClicked } = this.props
    const { navigate } = this.props.navigation
    // console.log(onLoginClicked)
    return <View style={ styles.container }>
      <Button title='Login' onPress={ () => navigate('Home') } >Login</Button>
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

export default connect(() => ({}), mapDispatchToProps)(LoginScreen)
