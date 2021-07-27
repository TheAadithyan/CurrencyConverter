import React from 'react';
import { View, StyleSheet, StatusBar, Image, Dimensions  } from 'react-native';
import colors from '../Constants/colors';

// import { Container } from './styles';
const screen = Dimensions.get('window');

const Screens = () => {
  return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
        <Image
          style={styles.logoBackground} 
          source={require('../Assets/images/background.png')}
          resizeMode="contain"
          />

          <Image
          source={require('../Assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        </View>
          
      </View>
  );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        flex: 1,
        justifyContent: 'center',

    },

    logoContainer: {
      justifyContent: 'center',
      alignItems: 'center'
    },

    logo :{
      position: "absolute",
      width: screen.width * 0.25
    },

    logoBackground: {
      width: screen.width / 0.45,
      height: screen.width * 0.45,
      }
})

export default Screens;