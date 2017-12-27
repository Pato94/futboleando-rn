import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export const Header = ({ people = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }) => {
  const participants = people.length
  const full = participants >= 10
  const color = full ? '#26BA72' : '#E85749'
  const barWidth = `${participants * 10}%`
  const peopleText = full ? 'Partido completo' : `Faltan ${10 - participants} personas`

  return (
    <View style={styles.header}>
      <View style={{ width: '60%', alignItems: 'center' }}>
        <View style={{ width: '80%', alignItems: 'center' }}>
          <View style={{ width: '100%', backgroundColor: 'white', height: 10, borderRadius: 4, justifyContent: 'flex-start' }}>
            <View style={{ width: barWidth, backgroundColor: color, height: 10, borderRadius: 4 }} />
          </View>
          <Text style={styles.people}>{peopleText}</Text>
        </View>
      </View>
      <View style={{
        height: '80%',
        backgroundColor: '#5C5C5C',
        width: 2,
        borderRadius: 1,
        alignSelf: 'center'
      }} />
      <View style={styles.timer}>
        <Text style={styles.remaining}>FALTA</Text>
        <Text style={styles.timeLeft}>01:23</Text>
      </View>
    </View>
  )
}  

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#4a4a4a',
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6
  },
  timer: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: '40%',
    padding: 10
  },
  remaining: {
    fontSize: 10,
    color: 'white'
  },
  people: {
    fontSize: 16,
    color: 'white',
    marginTop: 10
  },
  timeLeft: {
    fontSize: 42,
    color: 'white'
  }
})
