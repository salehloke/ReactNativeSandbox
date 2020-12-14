import React from 'react';
import {View,StyleSheet,Text,Button} from 'react-native';

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})


const SignInScreen = ({onSignIn,navigation})=>{
    return (
        <View style={styles.container}>
            <Text>Public Signing in</Text>
            <Button title="Sign In" onPress={onSignIn}/>
            <Text>OR</Text>
            <Button title="Sign Up" onPress={()=>navigation.navigate('Sign Up')}/>
            <Button title="Password Forgot" onPress={()=> navigation.navigate('Password Forgot')}/>
        </View>
    )
}

export default SignInScreen