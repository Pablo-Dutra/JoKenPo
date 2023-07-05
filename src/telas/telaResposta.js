import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import imgPapel from '../../assets/img/papel.png'
import imgPedra from '../../assets/img/pedra.png';
import imgTesoura from '../../assets/img/tesoura.png';
import imgJokenpo from '../../assets/img/jokenpo.png';

import gifGanhou from '../../assets/img/ganhou.gif';
import gifPerdeu from '../../assets/img/perdeu.gif';
import gifEmpate from '../../assets/img/empate.gif';

// TELA DO RESULTADO DO JOGO
export default function TelaResultado() {
  const navigation = useNavigation();
  const route = useRoute();
  const valor = route.params?.valor;
  let situacao = { 
    frase: '',
    imagem: ''
  };

  // OPÇÕES PARA SEREM ESCOLHIDAS
  const opcoesImagens = [imgPedra, imgPapel, imgTesoura];
  const indiceAleatorio = Math.floor(Math.random() * opcoesImagens.length);
  if(valor == indiceAleatorio){
    situacao.frase = 'deu empate!';
    situacao.imagem = gifEmpate;
  }
  if((valor == 0) && (indiceAleatorio == 1)){
    situacao.frase = 'você perdeu!';
    situacao.imagem = gifPerdeu;
  }
  if((valor == 0) && (indiceAleatorio == 2)){
    situacao.frase = 'você ganhou!';
    situacao.imagem = gifGanhou;
  }
  if((valor == 1) && (indiceAleatorio == 0)){
    situacao.frase = 'você ganhou!';
    situacao.imagem = gifGanhou;
  }
  if((valor == 1) && (indiceAleatorio == 2)){
    situacao.frase = 'você perdeu!';
    situacao.imagem = gifPerdeu;
  }
  if((valor == 2) && (indiceAleatorio == 0)){
    situacao.frase = 'você perdeu!';
    situacao.imagem = gifPerdeu;
  }
  if((valor == 2) && (indiceAleatorio == 1)){
    situacao.frase = 'você ganhou!';
    situacao.imagem = gifGanhou;
  }

  const imagemAleatoria = opcoesImagens[indiceAleatorio];
    return <View>
        <Image source={ imgJokenpo } style={ estilos.imgJokenpo } />
        <Text style={ estilos.textoResultado }> Resultado: { situacao.frase } </Text>
        <Image source={ situacao.imagem } style={estilos.imgRespostaAtor} />
        <View style={ estilos.container}>
          <View>
            <Text style={ estilos.textoAtor }> você </Text>
            <Image source={opcoesImagens[valor]} style={estilos.imgRespostaAtor} />
          </View>
          <View>
            <Text style={ estilos.textoAtor }> máquina </Text>            
            <Image source={imagemAleatoria} style={estilos.imgRespostaMaquina} />
          </View>          
        </View>        
        <View>
            <Text style={ estilos.textoInfo } onPress={ () => { navigation.navigate('Desenvolvedor') } }> Desenvolvido por Pablo Dutra </Text>      
            <Text style={ estilos.textoInfo } onPress={ () => { navigation.navigate('Desenvolvedor') } }> pablo.dutra@gmail.com </Text>                     
        </View>
    </View>
}

const width = Dimensions.get('screen').width;
const estilos = StyleSheet.create({
  imgJokenpo: {
    width: '100%',
    height: width/2.5  
  },
  textoResultado: {
    backgroundColor: "#E9E778",
    elevation: 15,
    fontSize: 25,
    lineHeight: 50,
    fontWeight: 'bold',
    marginVertical: 16,
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
  textoAtor: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      textAlignVertical: 'center',              
  },
  imgRespostaMaquina: {
    width: width * 0.4,
    height: width * 0.4,
    alignSelf: 'center',
    transform: [{ scaleX: -1 }],    
    marginVertical: 16,
    marginLeft: 16    
  },  
  imgRespostaAtor: {
    width: width * 0.4,
    height: width * 0.4,
    alignSelf: 'center',
    marginVertical: 16,
    marginLeft: 16  
  },  
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },  
 
});