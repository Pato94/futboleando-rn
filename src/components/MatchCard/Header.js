import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import moment from 'moment'

export const Header = ({ people = [], date }) => {
  const participants = people.length
  const full = participants >= 10
  const color = full ? '#26BA72' : '#E85749'
  const barWidth = `${participants * 10}%`
  const peopleText = full ? 'Partido completo' : `Faltan ${10 - participants} personas`
  const remainingTime = (() => {
    const minuteInMillis = 60 * 1000
    const hourInMillis = 60 * minuteInMillis
    const matchMoment = moment(date)
    const now = moment()
    const diff = matchMoment.diff(now)
    if (diff <= 0) { // Means the match time is in the past
      return '- -'
    } else if (diff <= 24 * hourInMillis) { // So the match is today
      const leadingZeros = (num) => num < 10 ? '0' + num : num
      const hours = Math.floor(diff / hourInMillis)
      const minutes = Math.floor((diff - (hours * hourInMillis)) / minuteInMillis)
      return `${leadingZeros(hours)}:${leadingZeros(minutes)}`
    } else {
      const days = Math.floor(diff / (24 * hourInMillis))
      return days === 1 ? `1 DÍA` : `${days} DÍAS`
    }
  })()

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
        <Text style={styles.remaining}>FALTAN</Text>
        <Text style={styles.timeLeft}>{remainingTime}</Text>
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
    fontSize: 32,
    color: 'white'
  }
})
