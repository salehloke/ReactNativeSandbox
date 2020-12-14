import React from 'react';
import { TouchableNativeFeedback, StyleSheet, View, Text } from "react-native";

const CustomNativeFeedbackButton = (props) => {
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback>
        <Text style={styles.text}>{props.btnLabel}</Text>
      </TouchableNativeFeedback>
    </View>
  );
};

export default CustomNativeFeedbackButton;


const styles = StyleSheet.create({
    container:{
        alignItems:'center'
    },
    text:{
        borderWidth:1,
        padding:25,
        borderColor:'black',
        backgroundColor:'red'
    }
})