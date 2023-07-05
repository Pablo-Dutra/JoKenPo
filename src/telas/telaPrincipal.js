import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import imgPapel from '../../assets/img/papel.png'
import imgPedra from '../../assets/img/pedra.png';
import imgTesoura from '../../assets/img/tesoura.png';
import imgJokenpo from '../../assets/img/jokenpo.png';

// TELA PRINCIPAL
export default function TelaInicial() {
    const navigation = useNavigation();
    const botoes = [
        { nome: 'Pedra',   imagem: imgPedra,   valor: 0, estilo: estilos.cardPedra },
        { nome: 'Papel',   imagem: imgPapel,   valor: 1, estilo: estilos.cardPapel },
        { nome: 'Tesoura', imagem: imgTesoura, valor: 2, estilo: estilos.cardTesoura },
    ];
    return (
      <View style={estilos.textoInstrucoes}>
        <Image source={ imgJokenpo } style={ estilos.imgJokenpo } />
        <Text style={estilos.textoInstrucoes}> Escolha uma opção abaixo:</Text>   
        {
            botoes.map(({ nome, imagem, valor, estilo }) => {
                return <View key= { nome }>
                    <TouchableOpacity style={ estilo } onPress={ () => { navigation.navigate('Resultado', { valor }) } } >
                        <Image source={ imagem } style={ estilos.btnJogar } />
                        <View style={ estilos.info }>
                            <Text style={estilos.textoBotao}> { nome } </Text>
                        </View>    
                    </TouchableOpacity> 
                </View>
            })    
        }
        <View>
            <Text style={ estilos.textoInfo } onPress={ () => { navigation.navigate('Desenvolvedor') } }> Desenvolvido por Pablo Dutra </Text>      
            <Text style={ estilos.textoInfo } onPress={ () => { navigation.navigate('Desenvolvedor') } }> pablo.dutra@gmail.com </Text>                     
        </View>
      </View>
    );
  }
  
const width = Dimensions.get('screen').width;
const estilos = StyleSheet.create({
  cardPedra: {
      backgroundColor: "#36BAC5",
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 10,
      flexDirection: "row",
      elevation: 15,
  },
  cardPapel: {
      backgroundColor: "#B04D90",
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 10,
      flexDirection: "row",
      elevation: 15,
  },
  cardTesoura: {
      backgroundColor: "#E9E778",
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 10,
      flexDirection: "row",
      elevation: 15,
  },
  info: {
      marginLeft: 8,
      marginVertical: 16,
      marginRight: 16,  
  },
  textoBotao: {
      fontSize: 50,
      lineHeight: 60,
      fontWeight: 'bold',
      textAlign: 'center',
      textAlignVertical: 'center',      
  },
  textoInfo: {
      fontSize: 14,
      lineHeight: 28,
      textAlign: 'center',
      textAlignVertical: 'center',
      fontStyle: 'italic',
  },
  textoInstrucoes: {
      fontSize: 25,
      lineHeight: 50,
      textAlign: 'center',
      textAlignVertical: 'center',
  },
  btnJogar: {
    width: 48,
    height: 48,
    marginVertical: 16,
    marginLeft: 16    
  },  
  imgJokenpo: {
    width: '100%',
    height: width/2.5  
  },  
});