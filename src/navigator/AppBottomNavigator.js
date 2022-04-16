import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from "../components";
import { ChatScreen } from "../components";
import { ContactScreen } from "../components";
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import comprasScreen from "../components/comprasPage/comprasScreen";
import Api from "../components/Api";

const Tab = createBottomTabNavigator();

export default function AppBottomNavigator() {
     return (
          <Tab.Navigator
               tabBarOptions={{ activeTintColor: 'red'}}>
               <Tab.Screen
                    name={'Inicio'}
                    component={HomeScreen}
                    options={{
                         tabBarLabel: "Home",
                         tabBarIcon: ({ color, size }) => (
                         <FontAwesome5
                            name="home"
                            color={'black'}
                            size={20} />
                    )
               }} />
               <Tab.Screen
                    name={'Mantenimiento'}
                    component={ChatScreen}
                    options={{
                         tabBarLabel: "Mantenimiento y SO",
                         tabBarIcon: ({ color, size }) => (
                         <FontAwesome5
                            name="desktop"
                            color={'black'}
                            size={20} />
                    )
               }} />
               <Tab.Screen
                    name={'Citas'}
                    component={ContactScreen}
                    options={{
                         tabBarLabel: "Citas",
                         tabBarIcon: ({ color, size }) => (
                         <FontAwesome5
                            name="id-badge"
                            color={'black'}
                            size={20} />
                    )
               }} />
               <Tab.Screen 
               name="Compras"
               component={comprasScreen}
               options={{
                    tabBarIcon: ({focused}) =>(
                        <Feather name="shopping-cart"  size={20} style={{color: focused ? 'green': 'black'}}/> 
                    )
               }}

               />
               <Tab.Screen
                    name={'Api'}
                    component={Api}
                    options={{
                         tabBarLabel: "Api",
                         tabBarIcon: ({ color, size }) => (
                         <FontAwesome5
                            name="database"
                            color={'black'}
                            size={20} />
                    )
               }} />
          </Tab.Navigator>    
     )
}