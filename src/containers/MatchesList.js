import React from 'react'
import { connect } from 'react-redux'
import { ActivityIndicator, StyleSheet, Text, View, FlatList } from 'react-native'
import ActionButton from 'react-native-action-button'
import { MatchCard } from '../components'
import { getMatches } from './utils'
import axios from 'axios'

class MatchesList extends React.Component {
  static navigationOptions = {
    title: 'Futboleando'
  }

  componentWillMount() {
    getMatches(this.props.dispatch, this.props.userDetails.accessToken)
  }

  render() {
    if (this.props.loading) {
      return <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    }

    return <View style={styles.container}>
      <FlatList
        style={{ height: '100%' }}
        data={this.props.matches}
        renderItem={this.renderMatch}
        keyExtractor={this.keyExtractor} />
      <ActionButton
        buttonColor="rgb(231,76,60)"
        onPress={ () => this.props.navigation.navigate('MatchForm') }
      />
    </View>
  }

  keyExtractor = (item, index) => index

  renderMatch = ({ item }) => {
    const { date, place, players, subscribed } = item

    return <MatchCard
      date={date}
      locationName={place}
      address={place}
      players={players}
      subscribed={subscribed}
      onClick={ () => this.props.openMatch(this.props.navigation, item, this.props.userDetails) } />
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee'
  }
})

const mapStateToProps = (state) => ({
  userDetails: state.matches.userDetails,
  matches: state.matches.matches,
  loading: state.matches.loading
})

const mapDispatchToProps = (dispatch) => ({
  openMatch: (navigation, match, user) => {
    navigation.navigate('Detail', { match: match, user: user })
  },
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(MatchesList)
