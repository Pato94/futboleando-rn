import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, FlatList, Button } from 'react-native'
import { MatchCard } from '../components'

class MatchesList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const createMatch = () => {
      this.props.navigation.navigate('MatchForm')
    }

    return <View style={styles.container}>
      <Button
        title="Crear partido"
        onPress={createMatch}
      />
      <FlatList data={this.props.matches} renderItem={this.renderMatch} keyExtractor={this.keyExtractor} />
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
