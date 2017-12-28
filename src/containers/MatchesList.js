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
  matches: state.matches.matches
})
const mapDispatchToProps = (dispatch) => ({
  openMatch: (navigation, match) => {
    navigation.navigate('Detail', match: match)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(MatchesList)
