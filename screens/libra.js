import react from 'react';
import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View,TextInput} from 'react-native';



const Libra = props => {
  
  const [Dolar, setDolar] = useState(null);
const v = Dolar * 0.78
  const r = v
  return (
      <View style={styles.container}>
      
      <Text style={styles.label}>Valor en Dolares</Text>
      <TextInput 
      style={styles.input} 
      placeholder='Ingrese el valor en dolares' 
      keyboardType='numeric'
      onChange={(e) => setDolar(e.nativeEvent.text)}
      />
      <Text style={styles.label}>Valor en Libra Esterlina</Text>
      <TextInput style={styles.input}> £{r.toFixed(2)}</TextInput>

      </View>
  );
}

export default Libra;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#26292B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
 marginVertical:5,
    color:'white',
  },
  input: {
   
    height: 50,
    width:350,
    borderColor: '#e1e1e1',
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor:'white',
    alignSelf:'center'
 
    },
  bki: {
    position: 'absolute',
    height: 845,
    width: 400,
  }, 
  title1: {
    fontSize: 36,
    textAlign: 'center',

    color: '#FFFFFF',
    fontStyle: 'normal',
  },
});
