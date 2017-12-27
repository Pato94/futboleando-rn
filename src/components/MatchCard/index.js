import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'

import { Header } from './Header'
import { Body } from './Body'

export default class MatchCard extends React.Component {
  static propTypes = {
    address: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    locationName: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  }

  render() {
    const { date, locationName, address, onClick } = this.props

    return <TouchableOpacity style={styles.card} onPress={ onClick }>
      <Header />
      <Body />
    </TouchableOpacity>
  }
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    width: '97%',
    marginBottom: 15
  }
})
