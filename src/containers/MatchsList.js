import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

export default class MatchsList extends React.Component {
  render() {
    const createMatch = () => {
      this.props.navigation.navigate('MatchForm')
    }

    return <View style={styles.container}>
      <Button
        title="Crear partido"
        onPress={createMatch}
      />
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
