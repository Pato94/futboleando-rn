import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { connect } from 'react-redux'

class Splash extends Component {
  componentWillMount() {
    setTimeout(() => this.props.initApp(this.props.navigation), 2000)
  }

  render() {
    const { container, image, text } = styles
    return (
      <View style={container}>
        <Image
          style={image}
          source={require('../assets/images/logo.png')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0'
  },
  image: {
    height: 110,
    resizeMode: 'contain'
  },
  text: {
    marginTop: 50,
    fontSize: 15,
    color: '#1A1A1A'
  }
})

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => ({
  initApp: (navigation) => {
    navigation.navigate('Login')
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Splash)
