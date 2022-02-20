import {StyleSheet, View,} from "react-native"


const StyleTela5 = StyleSheet.create ({

tela: { //tela principal
    backgroundColor: '#E5E5E5',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

setaReturn: {
    width: 50,
    height: 50,
    top: 10,
    left: 13,
    

},

box2: { //container principal
    
    width: '50%',
    height: '20%',
    marginTop: 20,
    backgroundColor: '#e5e5e5',
    borderRadius: 20,
    left: 95,
    textAlign: 'center',
  },

container: { //container principal
    backgroundColor: '#FFFFFF',
    width: 350,
    height: 158,
    left: 33,
    marginTop: 90,
    borderRadius:20,
    
  },

box: { //texto box2
    width: '85%',
    height: '8%',
    marginTop: 15,
    backgroundColor: '#ffffff',
    left:33,
    borderRadius:20,
    textAlign: 'center',
       

},

Texto: { //texto da box1
    width: '100%',
    color: '#000000',
    fontSize: 10,
    lineHeight: 20,
    textAlign: 'center',

},
textoData: {
  color:'#969696',
  textAlign: 'center'

},
textoHora: {
  color: '#969696',
  textAlign: 'center'
},

imagem: {
  width: 65,
  height: 65,
  resizeMode: 'cover',
  top: 20,
  left: 70,

},
Textobem: {
  height: 37,
  width: 70,
  left: 78,
  fontWeight: '700',
  fontSize: 21,
  bottom: 50,
  top: 20,
  color: '#E24B4B',

}, //ICONES

relogio1: { //item de relogio
  width: 18,
  height: 18,
  top: 33,
  left: 60,

},
calendario1: { // item de calendario
  width: 19,
  height: 19,
  top: 35,
  left: 7,

},
Dancing: { //item de festa
  width:40,
  backgroundColor: 'blue',
  borderRadius: 500,
  marginLeft: 50,
  marginTop: 50,

},
TextoDancing: {
  height: 37,
  width: 70,
  marginLeft:55,
  fontWeight: '700',
  fontSize: 12,
  bottom: 50,
  top: 20,
  color: '#000000',

},
Esportes: { 
  width:40,
  backgroundColor: 'blue',
  borderRadius: 500,
  marginLeft: 160,
  marginTop: -80,


},
TextoEsportes: {
  height: 37,
  width: 70,
  marginLeft:152,
  fontWeight: '700',
  fontSize: 12,
  marginTop: 23,
  color: '#000000',

},
Comida: { 
  width:40,
  backgroundColor: 'blue',
  borderRadius: 500,
  marginLeft: 270,
  marginTop: -99,


},
TextoComida: {
  height: 37,
  width: 70,
  marginLeft:265,
  fontWeight: '700',
  fontSize: 12,
  marginTop: 23,
  color: '#000000',

},

})
export default StyleTela5;
