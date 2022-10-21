import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Calculadora from './screens/calculadora';
import Conversor from './screens/conversor';
import Tienda from './screens/tienda';
import Menu from './screens/menu';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
<Stack.Navigator initialRouteName = "Menu">
  <Stack.Screen name="Calculadora" component={Calculadora} options={{headerShown:true}}/>
  <Stack.Screen name="Conversor" component={Conversor} options={{headerShown:true}}/>
  <Stack.Screen name="Tienda" component={Tienda} options={{headerShown:true}}/>
  <Stack.Screen name="Menu" component={Menu} options={{headerShown:false}}/>
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
