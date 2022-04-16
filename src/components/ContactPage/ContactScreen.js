import React, { Component, useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Madoka} from 'react-native-textinput-effects';
import {ScrollView, Image} from 'react-native'
import { Card , Button} from 'react-native-elements';
import DatePicker from 'react-native-date-picker';

export default function ContactScreen() {
     const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
    return (
      
    
     <ScrollView style={{flex:1}}>
          <View style={{width: '90%', flexDirection: 'column', marginVertical: '10%'}}>
          <Image source={{uri: 'https://scontent.ftlc2-1.fna.fbcdn.net/v/t1.6435-9/107694093_108992957561915_1145433105287999809_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=9267fe&_nc_ohc=a7_YzWrHTGAAX8ySHvE&_nc_ht=scontent.ftlc2-1.fna&oh=00_AT8wkaWoJMxMC544jUuY04PDpJAfWzsg-CfoMmPEMChS5A&oe=626E92E8'}}
       style={{width: 200, height: 200,  alignSelf: 'center'}} />
              
               <Madoka
               label={'Nombre(s)'}
               borderColor={'black'}
               inputPadding={16}
               labelHeight={20}
               labelStyle={{ color:'#2ADC3D'}}
               inputStyle={{color: '#000000', borderRadius: 20,fontSize: 20}}
               style={{}}
             />

<Madoka
               label={'Apellido(s)'}
               borderColor={'black'}
               inputPadding={16}
               labelHeight={20}
               labelStyle={{ color: '#2ADC3D'}}
               inputStyle={{color: '#000000', borderRadius: 20,fontSize: 20}}
               style={{marginVertical: 20}}
             />
              <Madoka
               label={'Fecha de nacimiento'}
               borderColor={'black'}
               inputPadding={16}
               labelHeight={20}
               labelStyle={{ color: '#2ADC3D'}}
               inputStyle={{color:'#000000', borderRadius: 20,fontSize: 20}}
               style={{marginVertical: 20}}
             />
              <Madoka
               label={'Correo Electronico'}
               borderColor={'black'}
               inputPadding={16}
               labelHeight={20}
               labelStyle={{ color: '#2ADC3D'}}
               inputStyle={{color: '#000000', borderRadius: 20,fontSize: 20}}
               style={{marginVertical: 20}}
             />
             <Madoka
               label={'Direccion'}
               borderColor={'black'}
               inputPadding={16}
               labelHeight={20}
               labelStyle={{ color: '#2ADC3D'}}
               inputStyle={{color: '#000000', borderRadius: 20,fontSize: 20}}
               style={{marginVertical: 20}}
             />
           <Madoka
               label={'Dia de cita'}
               borderColor={'black'}
               inputPadding={16}
               labelHeight={20}
               labelStyle={{ color: '#2ADC3D'}}
               inputStyle={{color: '#000000', borderRadius: 20,fontSize: 20}}
               style={{marginVertical: 20}}
             />

          </View>
          <View>
        
          </View>
          <View>
            
          <Button
        title="Registar"
        onPress={() => Alert.alert('Simple Button pressed')}
        
        
      />
          </View>
     </ScrollView>
    );
  
}
const styles = StyleSheet.create({

});
