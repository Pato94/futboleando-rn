import React from 'react'
import { StyleSheet, Text, Button, View } from 'react-native'

export default class MatchsList extends React.Component {
  render() {
    return <View style={styles.container}>
      <Text>jnfkads</Text>
      <Button title="gotodetail" onPress={ () => this.props.navigation.navigate('Detail') }/>
    </View>
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
