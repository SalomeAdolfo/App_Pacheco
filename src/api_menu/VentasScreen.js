import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import baseURL from "../components/routes/api2";
import { Card } from "react-native-elements";
const url = "/api/ventas";

const VentasScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [info, setInfo] = useState([]);
  //Inicio de petición a api_ventas
  const getVentas = async () => {
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
    getVentas();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ ...styles.header }}>
        <Text style={{ ...styles.text_header }}>Ventas</Text>
      </View>
      <View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={info}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View>
                <Card containerStyle={{...styles.card}}>
                  <Image
                    source={{
                      uri: "https://www.masdigital.net/hubfs/Blog/incrementar-ventas-e-commerce.jpg",
                    }}
                    style={{ ...styles.image }}
                  />
                  <Text style={{...styles.text}}>{item.fecha}</Text>
                  <Text style={{...styles.text}}>{item.total}</Text>
                </Card>
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    card:{
        borderRadius: 20,
        elevation: 10
    },
  image: {
    width: 150,
    height: 150,
    borderRadius: 15,
    alignSelf: "center",
  },
  text:{
    color:'black',
    alignSelf:'center',
    fontSize:17
},
  header: {
    width: "100%",
  },
  text_header: {
    fontSize: 35,
    fontWeight: "200",
    alignSelf: "center",
  },
});
export default VentasScreen;
