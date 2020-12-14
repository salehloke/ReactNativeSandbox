import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";

const CustomButton = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.text}>{props.btnLabel}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;


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