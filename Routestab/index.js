import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Tela2 from '../src/Telas/Tela2'
import Tela3 from '../src/Telas/Tela3'
import Tela4 from '../src/Telas/Tela4'
import Tela5 from '../src/Telas/Tela5'
import Icone from 'react-native-vector-icons/Entypo'
import Icone2 from 'react-native-vector-icons/AntDesign' 
import Icone3 from 'react-native-vector-icons/SimpleLineIcons'
import Caminhos2 from '../routes/Caminhos2'

const Tab = createBottomTabNavigator();

function Routetab() {
return (

<Tab.Navigator screenOptions={{tabBarShowLabel: false, headerShown: false}}>
<Tab.Screen options={{tabBarIcon: () => <Icone name="home" color={"#304FFE"} size={24} />, headerShown: false}} name="home" component={Tela2} />
<Tab.Screen options={{tabBarIcon: () => <Icone2 name="pluscircle" color={"#304FFE"} size={35} />,headerShown: false}} name="Caminhos2" component={Caminhos2} />
<Tab.Screen options={{tabBarIcon: () => <Icone3 name="list" color={"#304FFE"} size={24} />,headerShown: false}} name= "tela4" component={Tela4}/>
</Tab.Navigator>
);
}
export default Routetab; 


