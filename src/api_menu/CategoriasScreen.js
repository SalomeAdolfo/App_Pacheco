import { View, Text, FlatList, ActivityIndicator, StyleSheet, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { Card } from "react-native-elements";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import baseURL from "../components/routes/api2";
const url = "/api/categorias";

function App({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [info, setInfo] = useState([]);

  const getCategory = async () => {
    try {
      const res = await fetch(baseURL + url);
      const json = await res.json();
      setInfo(json.data);
      console.log(json.data);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getCategory();
  }, []);

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={info}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View>
              <Card containerStyle={{ ...styles.card }}>
                <Image source={{uri:'https://th.bing.com/th/id/OIP.zGfJktypvOyu0GsuLaExywHaEK?pid=ImgDet&rs=1'}} style={{...styles.image}} />
                <Text style={{ ...styles.text }}>Categoria: {item.categoria}</Text>
                <Text style={{ ...styles.text }}>Estatus: {item.estatus}</Text>
              </Card>
            </View>
          )}
        />
      )}
    </View>
  );
}
export default App;
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