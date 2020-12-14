import React from 'react';
import {View,StyleSheet,Text,Button} from 'react-native';

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})


const SignUpScreen = ({onSignUp})=>{
    return (
        <View style={styles.container}>
            <Text>Public SignUpg in</Text>
            <Button title="Sign Up" onPress={onSignUp}/>
        </View>
    )
}

export default SignUpScreen