import React from 'react'
import { StyleSheet, View, TextInput, Text, Button } from 'react-native'
import DatePicker from 'react-native-datepicker'
import axios from 'axios'

// Date Picker: https://github.com/xgfe/react-native-datepicker
export default class MatchForm extends React.Component {
  constructor(props) {
    super(props)

    this.currentDate = new Date()
    this.state = {}
  }

  render() {
    const createMatch = () => {
      const configGraphQL = {
        url: 'http://redo-fulbo.herokuapp.com/match',
        method: 'post',
        data: {
          date: `${this.state.date}T00:00:00.000Z`,
          place: this.state.place
        }
      }

      axios(configGraphQL).then(response => {
      	// console.log('graphql response:', response.data);

        this.props.navigation.navigate('MainScreen')
      }).catch(err => {
      	console.log('graphql error:', err);
      })
    }

    return <View style={styles.container}>
      <DatePicker
        style={{width: "100%"}}
        mode="date"
        placeholder="Día del partido"
        format="YYYY-MM-DD"
        minDate={this.currentDate}
        date={this.state.date}
        customStyles={{
          placeholderText: {
            color: '#000'
          }
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />

      <TextInput
        placeholder="Dónde se juega?"
        value={this.state.place}
        onChangeText={(place) => this.setState({place})}
        style={{height: 40}}
      />

      <Button
        title='Crear partido!'
        onPress={createMatch}
      />
    </View>
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: '#4cae46',
    padding: 20
  }
})
