import React from 'react';
import {Text, View, Image, TouchableOpacity, Modal } from 'react-native'
import Styletela3 from '../Style/StyleTela3';
import Iconefesta from 'react-native-vector-icons/MaterialCommunityIcons';
import Ponto from 'react-native-vector-icons/FontAwesome';
import Cook from 'react-native-vector-icons/MaterialIcons';
import IconSport from 'react-native-vector-icons/MaterialIcons';
import StyleTela3 from '../Style/StyleTela3';


function Container ({
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
    
    
} ) { 
    return (



            <View style={Styletela3.container}>

                <View style={Styletela3.caixa1}>

            
                    <Image style={Styletela3.image} source={img} />
                    <Text style={Styletela3.textoprincipal}>{data}</Text> 
                    
                    <Text  style={

            (StyleTela3.textosentimento,
            {
              color: color,
              height: 37,
              width: 90,
              left: 80,
              fontWeight: '700',
              fontSize: 24,
              bottom: 35,
              textAlign: 'center',
            })
            }>
        {''}
        {humor}{''}
        
            </Text>
            
                    <Text style={Styletela3.textosentimento}>{humor}</Text>
                    <Text style={Styletela3.textohorario}>{hora}</Text>
                    </View>
    <View style={Styletela3.caixa2}>
                    <Iconefesta name= {icone1} color={"#000000"} size={20} />
                    <Text style={Styletela3.ColorText1}>{acao1}</Text> 

                    <Ponto style={Styletela3.Ponto} name="circle" color={"#000000"} size={5} />

                    <IconSport name={icone2} color={"#000000"} size={20} />
                    <Text style={Styletela3.ColorText1} >{acao2}</Text>

                    <Ponto style={Styletela3.Ponto} name="circle" color={"#000000"} size={5} />
                    
                    <Cook name={icone3} color={"#000000"} size={20} />
                    <Text style={Styletela3.ColorText1}>{acao3}</Text>
                </View>


                <View style={Styletela3.caixa3}>
                    <Text style={Styletela3.textorodape}>{comentario}</Text>
                </View>


            </View>

      
 )   
}
export default Container;