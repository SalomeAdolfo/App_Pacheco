import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import React, { useState, useEffect } from "react";
import baseURL from "../components/routes/api2";
import { Card } from "react-native-elements";
import Fontisto from 'react-native-vector-icons/Fontisto';
const url = "/api/citas";

const CitasScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [info, setInfo] = useState([]);

  const getCitas = async () => {
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
    getCitas();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ ...styles.header }}>
        <Text style={{ ...styles.text_header }}>Citas</Text>
      </View>
      <View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={info}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => 
            <View>
                <Card>
                    <Fontisto name="date" color={'black'} size={50} style={{alignSelf:'center'}}/>
                    <Text style={{...styles.text}}>Descripción:{item.descripcion}</Text>
                    <Text style={{...styles.text}}>Estatus: {item.estatus}</Text>
                    <Text style={{...styles.text}}>Fecha: {item.fecha}</Text>
                </Card>
            </View>}
          />
        )}
      </View>
      <View style={{height: 100}}/>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    width: "100%",
  },
  text_header: {
    fontSize: 35,
    fontWeight: "200",
    alignSelf: "center",
  },
  text:{
      marginVertical: 5,
      alignSelf:'auto',
      fontSize: 15,
      fontWeight: '300'
  }
});
export default CitasScreen;
