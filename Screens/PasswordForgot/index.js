import React from 'react';
import {View,StyleSheet,Text,Button} from 'react-native';

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})


const PasswordForgotScreen = ({onPasswordForgot})=>{
    return (
        <View style={styles.container}>
            <Text>Public Password Forgot </Text>
            <Button title="Password" onPress={onPasswordForgot}/>
        </View>
    )
}

export default PasswordForgotScreen