import React from 'react'
import { connect } from 'react-redux'
import { ActivityIndicator, StyleSheet, Text, View, FlatList } from 'react-native'
import ActionButton from 'react-native-action-button'
import { MatchCard } from '../components'
import axios from 'axios'

class MatchesList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}

    this.getMatches = () => {
      this.setState({ loading: true })
      console.log('matches request')

      const configGraphQL = {
        url: 'http://redo-fulbo.herokuapp.com/matches',
        method: 'get'
      }

      axios(configGraphQL).then(response => {
        this.props.receiveMatches(response.data)
        this.setState({ loading: false })
        console.log('matches success')
      }).catch(err => {
        this.setState({ loading: false })
        console.log('matches error')
      })
    }
  }

  static navigationOptions = {
    title: 'Futboleando'
  }

  render() {
    if (this.state.loading) {
      return <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    }

    if (this.props.shouldGetMatches) {
      this.getMatches()
    }

    return <View style={styles.container}>
      <FlatList data={this.props.matches} renderItem={this.renderMatch} keyExtractor={this.keyExtractor} />
      <ActionButton
        buttonColor="rgb(231,76,60)"
        onPress={ () => this.props.navigation.navigate('MatchForm') }
      />
    </View>
  }

  keyExtractor = (item, index) => index

  renderMatch = ({ item }) => {
    // const { date, locationName, address } = item
    const { date, place } = item

    return <MatchCard
      date={date}
      locationName={place}
      address={place}
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

const mapStateToProps = (state) => ({
  userDetails: state.matches.userDetails,
  matches: state.matches.matches,
  shouldGetMatches: !state.matches.matches || state.matches.dirty
})

const mapDispatchToProps = (dispatch) => ({
  openMatch: (navigation, match) => {
    navigation.navigate('Detail', { match: match })
  },
  receiveMatches: (matches) =>
    dispatch({ type: 'LOAD_MATCHES', payload: matches })
})

export default connect(mapStateToProps, mapDispatchToProps)(MatchesList)
