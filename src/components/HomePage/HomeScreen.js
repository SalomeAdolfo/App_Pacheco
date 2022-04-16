import React, { Component , useState, useEffect} from 'react';
import { View, ScrollView, Text, FlatList, StyleSheet, Image, ActivityIndicator} from 'react-native';
import { Card , Button} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import baseURL from '../routes/api2';
const url = '/api/productos'



const data = [
  {
    id: "0",
    titulo : "Mantenimiento",
    imagen: 'https://intelite.gt/wp-content/uploads/2017/09/x1.jpg',
    descripcion: "                Tipos de mantenimiento                "
  },
  {
    id: "1",
    titulo : "Sistemas Operativos",
    imagen: 'https://i.blogs.es/fea19d/cuota-linux-windows-macos-2020/1366_2000.jpg',
    descripcion: "             Sistemas operativos         "
  }
  ,
  {
    id: "3",
    titulo : "Componentes",
    imagen: 'https://infopcgamer.com/wp-content/uploads/2021/09/que-se-necesita-para-armar-una-pc-gamer.jpg',
    descripcion: "            Diversidad de componentes           "
  },
]

const Item = ({titulo,imagen,descripcion}) => (
  <Card containerStyle={{...styles.contenedor}}>
    <Card.Title >{titulo}</Card.Title>
    <Card.Image style={{width:'100%', height:200}} source={{uri:imagen}}/>
    <Text>{descripcion}</Text>
  </Card>
);

export default function HomeScreen() {

  const [isLoading, setLoading] = useState(true);
  const [info, setInfo] = useState([]);

  const getProductos = async () => {
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
    getProductos();
  }, []);

  const renderItem = ({item}) =>(
    <Item titulo={item.titulo} imagen={item.imagen} descripcion={item.descripcion}/>
  );
  const navigation = useNavigation();
    return (
      <ScrollView>
        <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id} horizontal showsHorizontalScrollIndicator={false} />
      <View>

        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          
          <Card  containerStyle={{...styles.cards}}>
          <Card.Title>Sistemas Operativos</Card.Title>
          <Image source={{uri: 'http://soetitc.weebly.com/uploads/3/8/0/8/38082487/header_images/1408579966.jpg'}}
       style={{width: 200, height: 200,  alignSelf: 'center'}} />
          </Card>

          <Card  containerStyle={{...styles.cards}}>
          <Card.Title>Componentes</Card.Title>
          <Card.Image><Image source={{uri: 'https://thumbs.dreamstime.com/b/tarjeta-gr%C3%A1fica-video-del-superh%C3%A9roe-aislada-con-la-historieta-el-ejemplo-vector-de-149503459.jpg'}}
       style={{width: 200, height: 180,  alignSelf: 'center'}} /></Card.Image>
          </Card>
        </View>
      </View>
      <View>
        <Text style={{fontSize:25, fontWeight:'100', alignSelf:'center'}}>Productos API</Text>
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
                <Text style={{ ...styles.text }}>Producto: {item.producto}</Text>
                <Text style={{ ...styles.text }}>Costo Uitario: ${item.costo_unitario}</Text>
                <Text style={{ ...styles.text }}>Precio Unitario: ${item.precio_unitario}</Text>
                <Text style={{ ...styles.text }}>Existencias: {item.existencias}</Text>
                <Text style={{ ...styles.text }}>Descripción: {item.descripcion}</Text>
                <Text style={{ ...styles.text }}>Estatus: {item.estatus}</Text>
              </Card>
            </View>
          )}
        />
      )}
      </View>
      <View style = {{height: 80}}></View>
      </ScrollView>
    );
  
}
const styles = StyleSheet.create({
  card:{
    borderRadius: 15,
    elevation: 10,
    shadowColor: 'orange',
    alignItems:'center'
  },  
  text:{
    color: 'black',
    fontSize: 15
  },  
  contenedor:{
    borderRadius: 15,
    elevation: 10,
    shadowColor: 'green'
  },
  cards:{
    elevation: 5,
    shadowColor: 'green',
  },
  img:{

  }
});