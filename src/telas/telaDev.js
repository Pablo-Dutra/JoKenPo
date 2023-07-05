import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

import imgIF from '../../assets/img/if.png'

// TELA DO INFORMAÇÕES DO DESENVOLVEDOR
export default function TelaDev() {

    return <View>
        <Image source={ imgIF } style={ estilos.imgIF } />
        <Text style={ estilos.textoInfo }> Desenvolvido por Pablo Dutra </Text>      
        <Text style={ estilos.textoInfo }> e-mail: pablo.dutra@gmail.com </Text>    
        <Text style={ estilos.textoInfo }> Pós Graduação </Text>    
        <Text style={ estilos.textoInfo }> Devenvolvimento de Sistemas Web</Text>    
    </View>
}
const width = Dimensions.get('screen').width;
const estilos = StyleSheet.create({
  textoInfo: {
      fontSize: 20,
      lineHeight: 50,
      textAlign: 'center',
      textAlignVertical: 'center',
  },
  imgIF: {
    width: '100%',
    height: width/2  
  },  
});