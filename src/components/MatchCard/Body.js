import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import moment from 'moment'

export const Body = (props) => (
  <View style={styles.body}>
    <View style={{
      marginTop: 10,
      marginLeft: 10,
      flexDirection: 'row',
      alignItems: 'center'
    }}>
      <Image
        style={{ height: 14, width: 14, marginRight: 10 }}
        source={require("../../assets/images/calendar_black.png")} />
      <Text>{moment(props.date).format('dddd, MMMM DD, HH:mm')}</Text>
    </View>
    <View style={{
      marginTop: 10,
      marginBottom: 20,
      marginLeft: 10,
      flexDirection: 'row',
      alignItems: 'center'
    }}>
      <Image
        style={{ height: 17, width: 14, marginRight: 10 }}
        source={require("../../assets/images/location_black.png")} />
      <Text>{props.locationName}</Text>
    </View>
    <View style={{
      width: '90%',
      backgroundColor: '#a4a4a4',
      height: 2,
      borderRadius: 1,
      alignSelf: 'center'
    }} />
    <Text style={{
      alignSelf: 'flex-end',
      marginTop: 10,
      marginBottom: 15,
      marginRight: 20,
      fontSize: 18,
      color: '#4cae46'
    }}>
      {props.subscribed ? "YA ESTÁS ANOTADO" : "SUMARME"}
    </Text>
  </View>
)

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6
  }
})
