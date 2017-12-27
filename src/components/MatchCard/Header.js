import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export const Header = () => (
  <View style={styles.header}>
    <View style={styles.timer}>
      <Text style={styles.remaining}>Falta</Text>
      <Text style={styles.timeLeft}>01:23</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#4a4a4a',
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
    height: 62
  },
  timer: {
    flexDirection: 'column'
  },
  remaining: {
    fontSize: 10,
    color: 'white'
  },
  timeLeft: {
    fontSize: 42,
    color: 'white'
  }
})
