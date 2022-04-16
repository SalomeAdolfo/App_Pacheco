import * as React from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native'
//import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import {Card} from 'react-native-elements'

const data = [
  {
    id: "1",
    titulo : "Mantenimiento Preventivo",
    imagen: "https://www.tecnologia-informatica.com/wp-content/uploads/2018/09/mantenimiento-computadoras-16.jpeg",
    descripcion: "Se realiza para mantener el funcionamiento correcto de los componentes de su CPU, obtener así un buen desempeño y preservar los componentes internos de nuestra PC"
  },
  {
    id: "2",
    titulo : "Mantenimiento Correctivo",
    imagen: "https://hardzone.es/app/uploads-hardzone.es/2020/05/Mantenimiento-PC.jpg",
    descripcion: "Se realiza el mantenimiento correctivo, a diferencia del mantenimiento preventivo este es necesario o de forma obligatoria para corregir un mal funcionamiento del CPU"
  }
  ,
  {
    id: "3",
    titulo : "Mantenimiento Fisico",
    imagen: "https://sos-tic.com/wp-content/uploads/2019/06/imagen-1-1.jpg",
    descripcion: "Se realiza en nuestro local por un técnico, el mantenimiento consiste en desarmar el CPU retirar todos los componentes, luego proceder a limpiar cada componente de forma individual."
  }
  ,
  {
    id: "4",
    titulo : "Mas Memoria Ram",
    imagen: "https://acf.geeknetic.es/imgri/imagenes/auto/2020/6/2/26u-19181-corsair-dominator-platinum-white-muestra.jpg?f=webp",
    descripcion: " Lo recomendable a día de hoy es tener 8 GB, con dicha configuración todo te ira suave y tus aplicaciones no notaran la falta de RAM"
  }
  ,
  {
    id: "5",
    titulo : " EL PROCESADOR ES EL CEREBRO DEL PC",
    imagen: "https://katekismo.com/wp-content/uploads/2017/08/Intel-Core-X-i9-800x400.jpg",
    descripcion: "El procesador siempre es, generalmente, lo primero en lo que nos fijamos a la hora de comprar un nuevo PC. Y, por supuesto, también debemos fijarnos en él a la hora de mirar componentes para actualizar."
  }
  ,
  {
    id: "6",
    titulo : "UN SSD LE DA UNA NUEVA VIDA AL EQUIPO",
    imagen: "https://i.blogs.es/a58206/nvidia-geforce-gtx-980/1366_2000.jpg",
    descripcion: "Sin duda el elemento que más mejora el rendimiento, o al menos el que más impacto real para el usuario tiene, es un SSD. "
  } ,
  {
    id: "7",
    titulo : "DISTRIBUCIÓN LINUX",
    imagen: "https://es.moyens.net/wp-content/uploads/2021/10/1633044270_21-herramientas-de-penetracion-importantes-en-Kali-Linux.jpg",
    descripcion: "GNU/Linux es una distribución de software basada en el núcleo Linux que incluye determinados paquetes de software para satisfacer las necesidades de un grupo específico de usuarios "
  }
  ,
  {
    id: "8",
    titulo : "MICROSOFT WINDOWS",
    imagen: "https://cdn.mos.cms.futurecdn.net/eooagXPMSQVNwgpnEsZwZG.jpg",
    descripcion: "Windows 11 de Microsoft, que cuenta con toda la potencia y seguridad de Windows 10, con un aspecto rediseñado. macOS"
  }
  ,
  {
    id: "9",
    titulo : "Mac OS",
    imagen: "https://i.ytimg.com/vi/awO1pYufCqY/maxresdefault.jpg",
    descripcion: "MacOS es un sistema operativo diseñado por Apple que está instalado en todos los equipos creados por la compañía Apple Inc., y son conocidos generalmente  como Mac."
  }
]

const Item = ({titulo,imagen,descripcion}) => (
  <Card containerStyle={{...styles.contenedor}}>
    <Card.Title >{titulo}</Card.Title>
    <Card.Image style={{width:'100%', height:200, borderBottomLeftRadius: 20}} source={{uri:imagen}}/>
    <Text>{descripcion}</Text>
  </Card>
);
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
const renderItem = ({item}) =>(
  <Item titulo={item.titulo} imagen={item.imagen} descripcion={item.descripcion}/>
);
const MyComponent = () => (
 
<FlatList 
data={data}
renderItem={renderItem}
keyExtractor={item => item.id}
/>
);
const styles = StyleSheet.create({
  contenedor:{
    borderRadius: 15,
    elevation: 10,
    shadowColor: 'pink'
  }
});
export default MyComponent;