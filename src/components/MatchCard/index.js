import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text } from 'react-native'

import { Header } from './Header'
import { Body } from './Body'

export default class MatchCard extends React.Component {
  static propTypes = {
    address: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    locationName: PropTypes.string.isRequired
  }

  render() {
    const { date, locationName, address } = this.props

    return <View style={styles.card}>
      <Header />
      <Body />
    </View>
  }
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    width: '91%',
    marginBottom: 27
  }
})
