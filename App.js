import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './Screens/Landing/index';
import HomeScreen from './Screens/Home/index';
import Routes from './Routes';
const RootStack = createStackNavigator();
const App = () => {
return (
<Routes/>
);
};
export default App;