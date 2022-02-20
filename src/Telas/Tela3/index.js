import React from 'react';
import Container from './Componentes/Container';
import {View, FlatList, TouchableOpacity } from 'react-native';
import Boxes from '../../Telas/Tela3/Componentes/Boxes';
import StyleTela3 from './Style/StyleTela3';

function Tela3({navigation}) {
    let itemSave={}
    return <>
    <View style={StyleTela3.principal}>
        
        <FlatList 

        data={Boxes}
        renderItem={({ item }) =>
            <TouchableOpacity onPress={() => {
                itemSave= item
                
                navigation.navigate("Tela5",{itemSave})
            }}>
                <Container {...item} />
            </TouchableOpacity>}
        keyExtractor={({ id }) => String(id)}
        /> 
   </View>      
        </>    
        };

export default Tela3;

