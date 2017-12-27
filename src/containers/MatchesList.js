import React from 'react'
import { StyleSheet, Text, View, FlatList, Button } from 'react-native'
import { MatchCard } from '../components'

export default class MatchesList extends React.Component {
  render() {
    const match = {
      date: 'Hoy a las 19:00hs',
      locationName: 'Palermo Fútbol',
      address: 'El Salvador 5301'
    }

    const matches = new Array(3).fill(match)

    const createMatch = () => {
      this.props.navigation.navigate('MatchForm')
    }

    return <View style={styles.container}>
      <Button
        title="Crear partido"
        onPress={createMatch}
      />
      <FlatList data={matches} renderItem={this.renderMatch} keyExtractor={this.keyExtractor} />
    </View>
  }

  keyExtractor = (item, index) => index

  renderMatch = ({ item }) => {
    const { date, locationName, address } = item
    return <MatchCard
      date={date}
      locationName={locationName}
      address={address} />
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#eee'
  }
})
