import React,{Component} from 'react';
import {View,Text,StyleSheet,Image,Touchableopacity,TextInput,Alert,Mordal,KeyboardAvoidingView} from 'react-native';

import SignUpLoginScreen from './screens/SignUpLoginScreen'

export default function App() {
  return (
    <View style={styles.container}>
      <SignUpLoginScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
