import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../src/Telas/Login'
import Tela2 from '../src/Telas/Tela2'
import React from 'react';

const Stack = createNativeStackNavigator();
function Caminhos() {
return (
<Stack.Navigator>

<Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
<Stack.Screen options={{headerShown: false}} name="Tela2" component={Tela2} />

</Stack.Navigator>
);
}

export default Caminhos;