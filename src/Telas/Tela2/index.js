import React from 'react';
import { Text, View, StyleSheet, Image, } from 'react-native';


function Tela2() {
  return <>
    <View style={Colorletter.Text}>
      <Image style={Colorletter.image} source={require('../../../src/assets/neutro/neutral.png')}
      />
      <Text style={Colorletter.TextColor} > Você ainda não tem nenhum registro diário. Para começar, toque no ícone de adicionar na tela.
      </Text>

    </View>

  </>
}

export default Tela2;

const Colorletter = StyleSheet.create({
  Colorletter: {
    backgroundColor: '#E5E5E5',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',

  },
  image: {
    width: 48,
    height: 48,
    left: 180,
    top: 160,

  },
  TextColor: {
    color: '#ACACAC',
    fontSize: 16,
    textAlign: 'center',
    width: 258,
    height: 69,
    top: 200,
    left: 75,

  }

});
