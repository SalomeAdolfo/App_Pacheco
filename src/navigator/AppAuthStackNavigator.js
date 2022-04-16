import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from "../components";
import { RegistrationScreen } from "../components";
import { AppStackNavigator } from ".";
import { LoginPage } from "/home/danysteps809/Integradora/React-Native-BottomTabV6/src/components/LoginPage/LoginScreen.js";
import App from "../components/Api";

const Stack = createNativeStackNavigator();

export default function AppAuthStackNavigator() {
     return (
          <Stack.Navigator initialRouteName={'LoginScreen'}>
               <Stack.Screen name={'LoginScreen'} component={LoginScreen} options={{headerShown:false}} />
               <Stack.Screen name={'RegistrationScreen'} component={RegistrationScreen} options={{ headerShown: false }} />
               <Stack.Screen name={'HomeScreen'} component={AppStackNavigator} options={{ headerShown: false }} />
               <Stack.Screen name={'App'} component={App} options={{ headerShown: false }} />
          </Stack.Navigator>
     )
}