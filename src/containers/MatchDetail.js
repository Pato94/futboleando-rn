import React from 'react'
import { StyleSheet, Image, Button, View } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { navigateAndCleanStack } from '../utils'

export default class MatchDetail extends React.Component {
  render() {
    return <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/images/logo.png')}
      />
      <View>
        <Button
          title="Sign in with Google"
          color="#ce2828"
          onPress={ () => console.log('a')}
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
