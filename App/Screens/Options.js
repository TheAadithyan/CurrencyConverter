import React from 'react';
import { View, TouchableOpacity, Text, SafeAreaView, StyleSheet, Linking } from 'react-native';
import colors from '../Constants/colors';
import { Entypo } from '@expo/vector-icons';
import { RowItem, RowSeparator } from '../Components/RowItem';

const openLink = (url) =>
  Linking.openURL(url).catch(() =>
    Alert.alert('Sorry, something went wrong.', 'Please try again later.')
  );



// import { Container } from './styles';

const Options = () => {
  return(
    <SafeAreaView>
      <RowItem
        title="Themes"
        onPress={() => alert('todo!')}
        rightIcon={
          <Entypo name="chevron-right" size={20} color={colors.blue} />
        }
      />

      <RowSeparator />

      <RowItem
        title="React Native Basics"
        onPress={() =>
            openLink(
              'https://tangled.ae'
            )
          }
        rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
      />

      <RowSeparator />

      <RowItem
        title="React Native by Example"
        onPress={() =>
            openLink(
              'https://learn.reactnativeschool.com/p/react-native-basics-build-a-currency-converter'
            )
          }
        rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
      />
    </SafeAreaView>
  ) 
}

const styles = StyleSheet.create({
    
    

    title: {
        color: colors.text,
        fontSize: 16,
      },
    

    row: {
        paddingHorizontal: 20,
        paddingVertical: 25,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: colors.white,
        },

    separator: {
        backgroundColor: colors.border,
        height: StyleSheet.hairlineWidth,
        marginLeft: 20,
      },
    
})

export default Options;
