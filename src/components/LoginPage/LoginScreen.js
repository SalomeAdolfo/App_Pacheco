import React, { Component, useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Madoka} from 'react-native-textinput-effects';
import {ScrollView,Image } from 'react-native'
import { Card , Button} from 'react-native-elements';
import DatePicker from 'react-native-date-picker';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
     const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const navigation = useNavigation();
    return (
      
    
     <ScrollView style={{flex:1}}>
          <View style={{width: '90%', flexDirection: 'column', marginVertical: '10%'}}>
            
          
<Image source={{uri: 'https://user-images.githubusercontent.com/81074698/161395187-21dd92da-764a-4ea3-857d-285515a35e2f.png'}}
       style={{width: 200, height: 200, alignSelf: 'center'}} />
              <Madoka
               label={'Correo Electronico'}
               borderColor={'black'}
               inputPadding={16}
               labelHeight={20}
               labelStyle={{ color: '#000000'}}
               inputStyle={{color: '#000000', borderRadius: 20,fontSize: 20}}
               style={{marginVertical: 20}}
             />
             <Madoka
               label={'Contraseña'}
               borderColor={'black'}
               inputPadding={16}
               labelHeight={20}
               labelStyle={{ color: '#000000'}}
               inputStyle={{color: '#000000', borderRadius: 20,fontSize: 20}}
               style={{marginVertical: 20}}
             />
          </View>
          <View>
                         <View


               style={{ flex: 1 , justifyContent: 'center', alignItems: 'center' }}>
               <Button
                    title="Crear Cuenta"
                    onPress={() => navigation.navigate('RegistrationScreen')}>
               
               </Button>
               </View>
               <View


          style={{ flex: 1 , justifyContent: 'center', alignItems: 'center' }}>
          <Button
          buttonStyle={{marginVertical: 15}}
                type='outline'
               title="Iniciar Sesion"
               onPress={() => navigation.navigate('HomeScreen')}>

          </Button>
          </View>
               
          </View>
          <View>
          
          
          </View>
     </ScrollView>
    );
  
}
const styles = StyleSheet.create({

});
