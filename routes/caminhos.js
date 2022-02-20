import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../src/Telas/Login'
import Routestab from '../Routestab';

const Stack = createNativeStackNavigator();
function Caminhos() {
return (

<Stack.Navigator>
<Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
<Stack.Screen options={{headerShown: false}} name="Routestab" component={Routestab} />
</Stack.Navigator>
);
}

export default Caminhos;