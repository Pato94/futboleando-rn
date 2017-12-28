import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export const Body = (props) => (
  <View style={styles.body}>
    <Text>{props.locationName}</Text>
  </View>
)

const styles = StyleSheet.create({
  body: {
    height: 98,
    backgroundColor: 'white',
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6
  }
})
