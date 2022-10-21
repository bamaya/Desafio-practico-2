import react from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import * as Font from 'expo-font';


const Calculadora = props => {
  return (
      <View style={styles.container}>
      <Text style={styles.title1}>Calculadora</Text>
      </View>
  );
}

export default Calculadora;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#26292B',
    alignItems: 'center',
    justifyContent: 'center',
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
