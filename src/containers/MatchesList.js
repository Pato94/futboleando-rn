import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import ActionButton from 'react-native-action-button'
import { MatchCard } from '../components'

class MatchesList extends React.Component {
  static navigationOptions = {
    title: 'Futboleando'
  }

  render() {
    console.log(this.props)

    const match = {
      date: 'Hoy a las 19:00hs',
      locationName: 'Palermo Fútbol',
      address: 'El Salvador 5301'
    }

    const matches = new Array(3).fill(match)

    return <View style={styles.container}>
      <FlatList data={matches} renderItem={this.renderMatch} keyExtractor={this.keyExtractor} />
      <ActionButton
        buttonColor="rgb(231,76,60)"
        onPress={ () => this.props.navigation.navigate('MatchForm') }
      />
    </View>
  }

  keyExtractor = (item, index) => index

  renderMatch = ({ item }) => {
    const { date, locationName, address } = item
    return <MatchCard
      date={date}
      locationName={locationName}
      address={address}
      onClick={ () => this.props.openMatch(this.props.navigation, item) } />
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee'
  }
})

const mapStateToProps = (state) => ({ userDetails: state.matches.userDetails })
const mapDispatchToProps = (dispatch) => ({
  openMatch: (navigation, match) => navigation.navigate('Detail')
})

export default connect(mapStateToProps, mapDispatchToProps)(MatchesList)
