import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tela3 from '../src/Telas/Tela3'
import Tela5 from '../src/Telas/Tela5';

const Stack = createNativeStackNavigator();
function Caminhos2() {
return (

<Stack.Navigator>
<Stack.Screen options={{headerShown: false}} name="Tela3" component={Tela3} />
<Stack.Screen options={{headerShown: false}} name="Tela5" component={Tela5} />
</Stack.Navigator>
);
}

export default Caminhos2;