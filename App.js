import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Calculadora from './screens/calculadora';
import Conversor from './screens/conversor';
import Tienda from './screens/tienda';
import Menu from './screens/menu';
import Colon from './screens/colon';
import Euro from './screens/euro';
import Franco from './screens/franco';
import Libra from './screens/libra';
import Peso from './screens/peso';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
<Stack.Navigator initialRouteName = "Menu">
  <Stack.Screen name="Calculadora" component={Calculadora} options={{headerShown:true}}/>
  <Stack.Screen name="Conversor" component={Conversor} options={{headerShown:true}}/>
  <Stack.Screen name="Tienda" component={Tienda} options={{headerShown:true}}/>
  <Stack.Screen name="Menu" component={Menu} options={{headerShown:false}}/>
  <Stack.Screen name="Colón Salvadoreño" component={Colon} options={{headerShown:true}}/>
  <Stack.Screen name="Euros" component={Euro} options={{headerShown:true}}/>
  <Stack.Screen name="Franco Suizo" component={Franco} options={{headerShown:true}}/>
  <Stack.Screen name="Libra Esterlina" component={Libra} options={{headerShown:true}}/>
  <Stack.Screen name="Peso Mexicano" component={Peso} options={{headerShown:true}}/>
</Stack.Navigator>
    </NavigationContainer>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
