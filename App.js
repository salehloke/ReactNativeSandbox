import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import ProfileCardScreen from './Screens/ProfileCardScreen';
import BorderRadiusExampleScreen from './Screens/BorderRadiusExampleScreen';

import TodoScreen from './Screens/TodoScreen';

let todoIndex =0;

class App extends Component {
  constructor(){
    super()
  }
 
  render() {
    return (
      <BorderRadiusExampleScreen/>)
  }
}
    
const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5'
    },
    content: {
      flex: 1,
      paddingTop: 60
    }
  }
) 


export default App