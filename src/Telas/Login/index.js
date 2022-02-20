import React from 'react';
import { 
    View,  
    Image, 
    TextInput, 
    TouchableOpacity, 
    Text, 
    StyleSheet,

} from 'react-native';

export default function Login({navigation}) { 

return (
 <View style={styles.background}>

  {/* <View style={styles.containerLogo}>
    
   </View> */}


<View style={styles.container}> 
<Image style={styles.Image}
    source={require('../../../src/assets/login.png')} //caminho da imagem

    />
<TextInput 
placeholderTextColor={'#969696'}
style={styles.input}
placeholder="e-mail"
autoCorrect={false}
onChangeText={()=> {}} //pra não precisar salvar em nenhum local
/>
    
<TextInput 
placeholderTextColor={'#969696'}
style={styles.input}
placeholder="senha"
autoCorrect={false}
onChangeText={()=> {}} //pra não precisar salvar em nenhum local
/>

<TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate("Routestab")}>

<Text style={styles.submitText}>ENTRAR</Text>

</TouchableOpacity>
</View>

 </View> //subir o input com o teclado
   );
}

const styles = StyleSheet.create({
   background:{
     flex:1,
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: '#304FFE',
     resizeMode:'container'
   },
   containerLogo:{
     flex: 1,
     resizeMode: 'center',
     paddingVertical: 50,
     justifyContent: 'center',
     
   },
   container:{
       flex:1,
       alignItems: 'center',
       justifyContent: 'center',
       paddingBottom: 50,
      

   },
input:{
  backgroundColor: '#F6F6F6',
  width: 321,
  height: 46,
  marginBottom: 15,
  fontSize: 17,
  borderRadius: 7,
  padding: 10,
  fontSize: 18,
  color: '#000000'
  

  
},
btnSubmit:{
     backgroundColor:'#C6CEFF',
     width: 133,
     height: 46,
     alignItems: 'center',
     justifyContent: 'center',
     borderRadius: 7,
},
submitText:{
    color: '#304FFE',
    fontSize: 15,
    fontWeight: 'bold',
    
    

},
Image:{
  height: 228,
  width: 228,
},


});