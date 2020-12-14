import React from 'react';

import { View, Text,Button,StyleSheet } from 'react-native';
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screens/Home';
import LandingScreen from './Screens/Landing';
import SignInScreen from './Screens/SignIn';
import SignUpScreen from './Screens/SignUp';
import PasswordForgotScreen from './Screens/PasswordForgot';

const Tab = createBottomTabNavigator();
const HomeTabs = ()=> {

   return(
      <Tab.Navigator>
         <Tab.Screen name="Home" component={HomeScreen} />
         <Tab.Screen name="Password Forgot" component={PasswordForgotScreen} />
      </Tab.Navigator>
   )
}

const Drawer = createDrawerNavigator();
const HomeDrawer = ()=> {

   return(
      <Drawer.Navigator>
         <Drawer.Screen name="Home" component={HomeScreen} />
         <Drawer.Screen name="Password Forgot" component={PasswordForgotScreen} />
      </Drawer.Navigator>
   )
}
const RootStack = createStackNavigator();
const Routes = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleSignIn = () => {
    // TODO impolement real sign in
    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
   // TODO impolement real sign Out
   setIsAuthenticated(false);
 };

 
 const handleSignUp = () => {
   // TODO impolement real sign Up
   setIsAuthenticated(true);
 };


  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {isAuthenticated ? (
          <RootStack.Screen
            name="Home"
            component={HomeTabs}
            options={({ route, navigation }) => ({
              headerTitle: getFocusedRouteNameFromRoute(route),
              headerLeft: () => (
                <Button
                  onPress={() =>
                    navigation.dispatch(DrawerActions.toggleDrawer())
                  }
                  title="Menu"
                />
              ),
              headerRight: () => (
                <Button
                  title="Sign Out"
                  style={styles.signOut}
                  onPress={handleSignOut}
                />
              ),
            })}
          />
        ) : (
          <>
            <RootStack.Screen
              name="Landing"
              component={LandingScreen}
              options={{
                animationTypeForReplace: "pop",
              }}
            />
            <RootStack.Screen name="Sign In">
              {(props) => {
                return <SignInScreen {...props} onSignIn={handleSignIn} />;
              }}
            </RootStack.Screen>
            <RootStack.Screen name="Sign Up">
              {(props) => {
                return <SignUpScreen {...props} onSignUp={handleSignUp} />;
              }}
            </RootStack.Screen>
            <RootStack.Screen
              name="Password Forgot"
              component={PasswordForgotScreen}
            ></RootStack.Screen>
          </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;


const styles= StyleSheet.create({
   signOut:{
      margin:10
   }
})