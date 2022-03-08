import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import IconesAtividades from 'react-native-vector-icons/MaterialCommunityIcons'

function Activities ({name}){
    const [activities, setActivities] = useState()
    const [texto, setTexto] = useState()
    useEffect(() => {
        
        function IconsActivities() {
            if(name === 'sports') {
                setActivities('arm-flex'); 
                setTexto('Esportes');
            }
            if(name === 'shopping') {
                setActivities('cart'); 
                setTexto('Compras');
            }
            if(name === 'rest') {
                setActivities('bed-outline'); 
                setTexto('Descanso');
            }
            if(name === 'party') {
                setActivities('dance-ballroom'); 
                setTexto('Festa');
            }
            if(name === 'movies') {
                setActivities('cassette'); 
                setTexto('Filmes');
            }
            if(name === 'good_meal') {
                setActivities('food'); 
                setTexto('Comida');
            }
            if(name === 'games') {
                setActivities('controller-classic'); 
                setTexto('Jogos');
            }
            if(name === 'date') {
                setActivities('robot-love'); 
                setTexto('Encontro');
            }
            if(name === 'cooking') {
                setActivities('egg-fried'); 
                setTexto('Cozinhar');
            }
            
    }
    IconsActivities()  
},[])
    
    
    return(
       <View>
        <TouchableOpacity style={estilos.flatListStyle}>
        <IconesAtividades name={activities} size={25}/>
        <Text>{texto}</Text>
        </TouchableOpacity>
        </View>
       )
    } 
    const estilos = StyleSheet.create({

   
    flatListStyle: {
        margin: 10,
        padding: 1,
        alignItems: 'center',
        
        
        
   },

    estiloContainer: {
        
        
      

   }


 })

export default Activities;
