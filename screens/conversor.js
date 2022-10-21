import react from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';



const Conversor = props => {
  return (
      <View style={styles.container}>
      <Text style={styles.title1}>Conversor</Text>
      </View>
  );
}

export default Conversor;

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
