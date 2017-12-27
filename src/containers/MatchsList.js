import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { MatchCard } from '../components'

export default class MatchsList extends React.Component {
  render() {
    const match = {
      date: 'Hoy a las 19:00hs',
      locationName: 'Palermo Fútbol',
      address: 'El Salvador 5301'
    }

    const matches = new Array(3).fill(match)

    return <View style={styles.container}>
      <FlatList data={matches} renderItem={({ date, locationName, address }) => (
        <MatchCard date={date} locationName={locationName} address={address} />
      )} />
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#eee'
  }
})
