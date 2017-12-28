import React from 'react'
import { ActivityIndicator, StyleSheet, View, TextInput, Text, Button } from 'react-native'
import DatePicker from 'react-native-datepicker'
import { NavigationActions } from 'react-navigation'
import axios from 'axios'
import { connect } from 'react-redux'
import { getMatches } from './utils'

// Date Picker: https://github.com/xgfe/react-native-datepicker
class MatchForm extends React.Component {
  static navigationOptions = {
    title: 'Nuevo Partido'
  }

  constructor(props) {
    super(props)

    this.currentDate = new Date()
    this.state = {}
  }

  render() {
    const missingField = !this.state.date || !this.state.time || !this.state.place
    const createMatch = () => {
      this.setState({ loading: true })

      const configGraphQL = {
        url: 'http://redo-fulbo.herokuapp.com/match',
        method: 'post',
        data: {
          date: `${this.state.date}T${this.state.time}:00.000-0300`,
          place: this.state.place
        }
      }

      axios(configGraphQL).then(response =>
        this.props.matchCreated(this.props.accessToken)
      ).catch(err =>
        this.setState({ loading: false, error: err })
      )
    }

    if (this.state.loading) {
      return <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    }
    return <View style={styles.container}>
      <Text style={{ fontSize: 12 }}>¿Cuando?</Text>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 10
      }}>
        <DatePicker
          mode="date"
          placeholder="Día"
          format="YYYY-MM-DD"
          minDate={this.currentDate}
          date={this.state.date}
          showIcon={false}
          onDateChange={(date) => this.setState({ date })}
        />

        <DatePicker
          mode="time"
          placeholder="Hora"
          format="HH:mm"
          date={this.state.time}
          showIcon={false}
          onDateChange={(time) => this.setState({ time }) }
        />
      </View>  
      <Text style={{ marginTop: 20, fontSize: 12 }}>¿Donde?</Text>
      <TextInput
        placeholder="Dirección"  
        value={this.state.place}
        onChangeText={(place) => this.setState({place})}
        style={{ height: 40, marginTop: 10, marginBottom: 30 }}
      />
      <Button
        title='Crear partido!'
        onPress={() => createMatch()}
        disabled={missingField}
      />
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: 30
  }
})

const mapStateToProps = (state) => ({
  accessToken: state.matches.userDetails.accessToken
})

const mapDispatchToProps = (dispatch) => ({
  matchCreated: (accessToken) => {
    dispatch({ type: 'MATCH_CREATED' })
    dispatch(NavigationActions.back())
    getMatches(dispatch, accessToken)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(MatchForm)
