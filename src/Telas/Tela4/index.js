import React, {useState, useEffect} from 'react';
import {Text, 
        View, 
        StyleSheet, 
        Image, 
        TouchableOpacity, 
        Button, 
        Modal, 
        FlatList, 
        TextInput} from 'react-native';
import Clock from 'react-native-vector-icons/AntDesign';
import Calendar from 'react-native-vector-icons/AntDesign';
import Api from '../../Services/Api';
import Activities from './Activities';
import Icon from 'react-native-vector-icons/Ionicons'




  function Tela4({navigation}) {
   const [atividades, setAtividades] = useState([]);
   useEffect(() => {
     async function getStorage() {
       Api.get('activities/')
         .then(response => {
           const data = response.data;
           setAtividades(data);
         })
         .catch(error => console(error));
     }
     getStorage();
   }, []);

return(
  
    <Modal animationType="slide">  
  
    <View style={styles.caixa1}>
      <TouchableOpacity onPress = {() => navigation.goBack()}>
        <Icon name = "chevron-back-circle" size={40} color='#ff1493'/>
        </TouchableOpacity>
      <Text style={styles.textoPrincipal}>Como você está? </Text>

      <View style={styles.caixa2}>
        <Calendar style={styles.textoData} name="calendar" size={15}>
          HOJE, 23 DE JANEIRO
        </Calendar>

        <Clock style={styles.iconeRelogio} name="clockcircleo" size={15}>
          08:35
        </Clock>
      </View>
        
      <View style={styles.caixa3}>

        <TouchableOpacity style={styles.estiloBotao}>
        <Image
          style={styles.imagemCaixa3}
          source={require('../../assets/humores/happy.png')}
        />
        <Text style={styles.textoCaixa3}>BEM</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.estiloBotao}>
        <Image
          style={styles.imagemCaixa3}
          source={require('../../assets/humores/confused.png')}
        />
        <Text style={styles.textoCaixa3}>CONFUSO</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.estiloBotao}>
        <Image
          style={styles.imagemCaixa3}
          source={require('../../assets/humores/sad.png')}
        />
        <Text style={styles.textoCaixa3}>TRISTE</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.estiloBotao}>
        <Image
          style={styles.imagemCaixa3}
          source={require('../../assets/humores/sleeping.png')}
        />
        <Text style={styles.textoCaixa3}>SONO</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.estiloBotao}>
        <Image
          style={styles.imagemCaixa3}
          source={require('../../assets/humores/nervous.png')}
        />
        <Text style={styles.textoCaixa3}>MAL</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.caixa4}>

      <FlatList
              data={atividades}
              keyExtractor={item => item.id.toString()}
              numColumns={3}
              renderItem={({item}) => (
                 <Activities {...item} />
               
              )}
            /> 

        
      </View>

      <View style={styles.caixa5}>

        <TextInput placeholder='Escreva aqui o que aconteceu hoje...' placeholderTextColor='#000'/>

        </View>

        <View style={{marginTop: 20}}>
        
         <Button  title= "SALVAR" onPress={() => {navigation.navigate('Routestab')}}/> 
         
        </View>
        

      </View>
</Modal>

)}

const styles = StyleSheet.create({

  textoPrincipal: {
    color: '#000000',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  textoData: {
    color: '#969696',
    fontSize: 15,
    textAlign: 'center',

    marginRight: 30,
  },
  caixa1: {
    width: '90%',
    height: 100,
    borderRadius: 18,
    marginLeft: 17,
    marginTop: 50,
  },

  iconeRelogio: {
    color: '#969696',
  },

  caixa2: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 35,
    marginLeft: 45,
    borderStyle: 'solid',
   
  },

  caixa3: {
    borderColor: '#000000',
    borderStyle: 'solid',
    flexDirection: 'row',
    height: 65,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30,
    
  },

  textoCaixa3: {
       color: '#969696'
  },

  imagemCaixa3: {
    width: 40,
    height: 40,
  },

  estiloBotao:{
   flexDirection:'column',
   alignItems: 'center'
   
  },
  caixa4:{
    borderStyle: 'solid',
    height: 200,
    marginTop: 30,
    borderColor: '#000000',
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
    
    
  },

  caixa5:{
    borderStyle: 'solid',
    flexDirection: 'row',
    height: 60,
    marginTop: 15,
    colorText: '#000',
    borderWidth: 2,
    borderRadius: 10,
    
  },
  
  

});

export default Tela4;


