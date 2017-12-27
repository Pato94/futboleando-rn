import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text, Button } from 'react-native'

class MatchsList extends React.Component {

    const createMatch = () => {
      this.props.navigation.navigate('MatchForm')
    }

    return <View style={styles.container}>
      <Button
        title="Crear partido"
        onPress={createMatch}
      />
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const mapStateToProps = (state) => ({ userDetails: state.matches.userDetails })
const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(MatchsList)
