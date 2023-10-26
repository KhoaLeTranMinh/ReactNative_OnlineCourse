import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Component} from 'react';
import LoginUI from './Login';
import Register from './Register';
import RegisterFormik from './RegisterFormik';

const Stack = createNativeStackNavigator();
export default class LoginScreen extends Component {
  render() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginScreen" component={LoginUI} />
        <Stack.Screen name="RegisterScreen" component={RegisterFormik} />
      </Stack.Navigator>
    );
  }
}
