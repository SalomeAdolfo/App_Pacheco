import { View, Text , ActivityIndicator, FlatList, Image, StyleSheet} from 'react-native'
import React, {useState,useEffect} from 'react'
import baseURL from '../components/routes/api2'
import { Card } from 'react-native-elements'
import Fontisto from 'react-native-vector-icons/Fontisto'

const url = '/api/direcciones'


const DireccionesScreen = () => {
    const [isLoading, setLoading] = useState(true);
    const [info, setInfo] = useState([]);

    const getDirecciones = async () => {
        try {
            const res = await fetch(baseURL+url);
            const json = await res.json();
            setInfo(json.data);
            console.log(json.data);
        } catch (error) {
            alert(error);
        }finally{
            setLoading(false)
        }
    };
    useEffect(()=>{
        getDirecciones();
    },[]);
  return (
    <View style={{flex:1}}>
         <View style={{ ...styles.header }}>
        <Text style={{ ...styles.text_header }}>Direcciones</Text>
      </View>
      <View>
          {isLoading ?  (
              <ActivityIndicator />
          ):(
              <FlatList 
              data={info}
              keyExtractor = {({id},indez) => id}
              renderItem={({item})=> (
                <View>
                    <Card>
                        <Fontisto size={35} name={'world'} color={'green'} />
                        <Text style={{...styles.text}}>Calle : {item.calle}</Text>
                        <Text style={{...styles.text}}>Código postal : {item.codigo_postal}</Text>
                        <Text style={{...styles.text}}>Localidad : {item.localidad}</Text>
                        <Text style={{...styles.text}}>Numero exterior : {item.numero_exterior}</Text>
                        <Text style={{...styles.text}}>Referencias : {item.referencias}</Text>
                    </Card>
                </View>
              )}
              />
          )}
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    text:{
        alignSelf:'flex-start',
        fontSize: 15,
        marginVertical: 1.25,
        fontWeight: 'bold'
    },
    header: {
        width: "100%",
      },
      text_header: {
        fontSize: 35,
        fontWeight: "200",
        alignSelf: "center",
      },
})
export default DireccionesScreen