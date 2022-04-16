import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Button } from "react-native-elements";

const MenuScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ ...styles.header }}>
        <Text style={{ ...styles.text_header }}>Menú</Text>
      </View>
      <View style={{ ...styles.main_content }}>
        <View style={{ ...styles.content }}>
          <Button
            type="outline"
            title={"Categorias"}
            titleStyle={{ ...styles.title }}
            buttonStyle={{ ...styles.button }}
            onPress = {()=> navigation.navigate('main')}
          />
          <Button
            type="outline"
            title={"Direcciones"}
            titleStyle={{ ...styles.title }}
            buttonStyle={{ ...styles.button }}
            onPress = {()=>navigation.navigate('direcciones')}
          />
        </View>
        <View style={{ ...styles.content }}>
          <Button
            type="outline"
            title={"Ventas"}
            titleStyle={{ ...styles.title }}
            buttonStyle={{ ...styles.button }}
            onPress = {()=> navigation.navigate('ventas')}
          />
          <Button
            type="outline"
            title={"Citas"}
            titleStyle={{ ...styles.title }}
            buttonStyle={{ ...styles.button }}
            onPress = {()=> navigation.navigate('citas')}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
      color: '#FF0040',
      fontSize: 20,
      fontWeight: '100'
  },
  content: {
    flexDirection: "row",
    alignSelf: "center",
  },
  button: {
    width: 150,
    marginHorizontal: 10,
    marginVertical: 10,
    height: 120,
    borderColor: "#FF0040",
    borderWidth: 1,
    borderRadius: 20,
  },
  main_content: {
    flexDirection: "column",
    justifyContent: "center",
    flex: 1,
  },
  header: {
    alignSelf: "center",
  },
  text_header: {
    fontSize: 35,
    fontWeight: "300",
    color:'#FF0040'
  },
});
export default MenuScreen;
