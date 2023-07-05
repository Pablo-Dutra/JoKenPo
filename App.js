import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import telaPrincipal from './src/telas/telaPrincipal';
import telaResposta from './src/telas/telaResposta';
import telaDev from './src/telas/telaDev';

const Stack = createNativeStackNavigator();

// CONTAINER DE NAVEGAÇÃO
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Jo Ken Po!" component={telaPrincipal} />
        <Stack.Screen name="Resultado"  component={telaResposta} />
        <Stack.Screen name="Desenvolvedor"  component={telaDev} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}