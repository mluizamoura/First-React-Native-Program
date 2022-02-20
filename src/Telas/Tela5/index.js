import React from 'react';
import {Text, View, Image, TouchableOpacity } from 'react-native';
import StyleTela5 from '../Tela5/StyleTela5';
import Relogio from 'react-native-vector-icons/MaterialIcons'
import Calendario from 'react-native-vector-icons/MaterialIcons'
import Dancing from 'react-native-vector-icons/MaterialCommunityIcons'
import Esportes from 'react-native-vector-icons/MaterialIcons'
import Comida from 'react-native-vector-icons/MaterialIcons'
import SetaReturn from 'react-native-vector-icons/AntDesign'


function Tela5({route:{params},navigation}) {
const itemSave = params.itemSave
const {
    img,
    data,
    humor,
    hora,
    icone1,
    acao1,
    icone2,
    acao2,
    icone3,
    acao3,
    comentario,
    color,

} = itemSave

  return (
    <View style={StyleTela5.tela}>
        <TouchableOpacity style={StyleTela5.setaReturn} onPress={() => navigation.goBack()}> 
        <SetaReturn name="leftcircle" size={35} color={"#304FFE"}/>
        </TouchableOpacity>
      <View style = {StyleTela5.box2}>
      <Relogio style={StyleTela5.relogio1} name="timer" color={'gray'} size={20} />
      <Calendario style={StyleTela5.calendario1} name="calendar-today" color={'gray'} size={20} />
      <Text style = {StyleTela5.textoHora}>{hora}</Text>
        <Text style = {StyleTela5.textoData}>{data}</Text>
        
       
        <Image style={StyleTela5.imagem} source={img} />
        <Text style = {[StyleTela5.Textobem, {color: color}]}>{humor}</Text>
      </View>


    <View style = {StyleTela5.container}>
    <Dancing style={StyleTela5.Dancing} name={icone1} color={'white'} size={40} />
    <Text style = {StyleTela5.TextoDancing}>{acao1}</Text>

    <Esportes style={StyleTela5.Esportes} name={icone2} color={'white'} size={40} />
    <Text style = {StyleTela5.TextoEsportes}>{acao2}</Text>
    
    <Comida style = {StyleTela5.Comida} name ={icone3} color={'white'} size= {40} />
    <Text style = {StyleTela5.TextoComida}>{acao3}</Text>

    </View>

    <View style = {StyleTela5.box}>
      <Text style={StyleTela5.Texto}>{comentario}
      
       </Text>

    </View>
      
    </View>
  );
}
export default Tela5;
