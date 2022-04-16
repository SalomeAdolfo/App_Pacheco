import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';
import Counter from 'react-native-counters';
import {Card} from 'react-native-elements';

const data = [
    {
        id: "1",
        imagen : "https://i.ytimg.com/vi/5nznFIrN_4U/maxresdefault.jpg",
        descripcion: "Memoria Ram de 8 GB",
        precios: "$4,000 MX c/u"
    },
    {
        id: "2",
        imagen : "https://pedidos.com/myfotos/xLarge/(X)STA-CO-A8400BG.webp",
        descripcion: "PASTA TERMICA DE OXIDO DE METAL PARA CPU",
        precios: "$80.00 MX c/u"
    }
    ,
    {
        id: "3",
        imagen : "https://cdn1.coppel.com/images/catalog/mkp/352/3000/3521029-1.jpg",
        descripcion: "Enfriamiento liquido",
        precios: "$2,500 MX c/u"
    },
    {
        id: "4",
        imagen : "https://images-na.ssl-images-amazon.com/images/I/71miAQRkUpS.__AC_SX300_SY300_QL70_ML2_.jpg",
        descripcion: "HUAWEI MateBook D 14",
        precios: "$16,199 MX c/u"
    },
    {
        id: "5",
        imagen : "https://www.cyberpuerta.mx/img/product/L/CP-AMD-100-100000061WOF-1.jpg",
        descripcion: "Procesador AMD Ryzen 9",
        precios: "$9,759 MX c/u"
    }
    ,
    {
        id: "6",
        imagen : "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/3pp/asr/49d7f625-1f87-43af-b0ee-b9b3191b1dac.3f061b8cab714bb8f72786e56e6d1f74.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff",
        descripcion: "Gabinete Gamer COUGAR DARKBLADER-G RGB Cristal Templado",
        precios: "$3,500 MX c/u"
    }
    ,
    {
        id: "7",
        imagen : "https://media.kingston.com/hyperx/category/hx-family-keyboard-alloy-elite-2-lg.jpg",
        descripcion: "Teclado mecánico para gaming HyperX Alloy Elite 2",
        precios: "$3,000 MX c/u"
    },
    {
        id: "8",
        imagen : "https://m.media-amazon.com/images/I/91b4nAycxqL._AC_SY355_.jpg",
        descripcion: "Tarjeta Madre Asus Rog Strix Z490-E Gaming Intel Z490",
        precios: "$14,900 MX c/u"
    },
    {
        id: "9",
        imagen : "https://http2.mlstatic.com/D_NQ_NP_992491-MLA43577931993_092020-O.webp",
        descripcion: "Disco sólido SSD interno Adata Falcon AFALCON-512G-C 512GB",
        precios: "$1,200 MX c/u"
    }
    ,
    {
        id: "10",
        imagen : "https://i.blogs.es/eaa23c/gigabyte-geforce-gtx-1070-wf2-oc-rev-20-8gb-gddr5-tarjeta-grafica-001/450_1000.jpg",
        descripcion: "Tarjeta gráfica GeForce RTX 3060 Gaming OC 12G (REV2.0), 8 GB",
        precios: "$35,000 MX c/u"
    }
    ,
    {
        id: "11",
        imagen : "https://cdn.shopify.com/s/files/1/0254/2144/7246/products/80163185-59b9-4582-b90d-9acc55f72a79_700x700.jpg?v=1646162789",
        descripcion: "Laptop LENOVO Flex 5 14ARE05 Ryzen 3 4GB 128GB SSD 2TB Nube",
        precios: "$12,000 MX c/u"
    }
    ,
]

 
const Item = ({imagen, descripcion, precios}) =>(
    <Card containerStyle={{...styles.cards}}>
              <Card.Image source={{uri: imagen}} />
                <Text style={{...styles.textos_cards}}>{descripcion}</Text>
                <Text style={{...styles.textos_cards}}>{precios}</Text>
                <View style={{alignItems:'center'}}>
          <Counter start={0} />
          
          </View>

          </Card>
          
          
);

export default function comprasScreen () {
    const renderItem = ({item}) =>(
        <Item imagen={item.imagen} descripcion={item.descripcion} precios={item.precios} />
        
    );
    
    
    return (
      <View style={{justifyContent: 'center', alignItems:'center', flexDirection: 'column'}}>
           <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id} />
      </View>
    );
  }
  
  const styles =  StyleSheet.create({
    textos_cards:{
        textAlign: 'center',
        fontSize: 20
    },
    
    cards:{
        borderRadius: 20
    }
  });

