import { View, Text, FlatList, ActivityIndicator, StyleSheet, Image } from "react-native";
import React, { useState, useEffect } from "react";
import baseURL from "./routes/api2";
import { Card } from "react-native-elements";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import CategoriasScreen from '../api_menu/CategoriasScreen';
import MenuScreen from "../api_menu/MenuScreen";
import DireccionesScreen from "../api_menu/DireccionesScreen";
import CitasScreen from "../api_menu/CitasScreen";
import VentasScreen from "../api_menu/VentasScreen";



const Stack = createNativeStackNavigator();


function nav({}){
  return(
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="menu" screenOptions={{headerShown:false}}>
        <Stack.Screen name="menu" component={MenuScreen} />
        <Stack.Screen name="main" component={CategoriasScreen} />
        <Stack.Screen name="direcciones" component={DireccionesScreen} />
        <Stack.Screen name="citas" component={CitasScreen} />
        <Stack.Screen name="ventas" component={VentasScreen} />
      </Stack.Navigator>

    </NavigationContainer>
  )
}
export default nav;
const styles = StyleSheet.create({ 
  image:{
    width: 150,
    height:150,
    borderRadius: 15,
    alignSelf:'center'
  },  
  card:{
      borderRadius: 15,
      shadowColor: 'orange',
      elevation: 10
  },
  text:{
      color:'black',
      alignSelf:'center',
      fontSize:17
  }
})
