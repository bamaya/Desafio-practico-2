import react from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import MIcon from 'react-native-vector-icons/FontAwesome5';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Menu = props => {
    const NaviCal = props => {
        props.navigation.navigate('Calculadora');
      }
      const NaviCon = props => {
        props.navigation.navigate('Conversor');
      }
      const NaviTie = props => {
        props.navigation.navigate('Tienda');
      }
 
  return (
      <View style={styles.container}>
      <Text style={styles.title1}>Menú</Text>
      <Text></Text>
      <TouchableOpacity style={{...styles.button, backgroundColor:'#5F7ADB'}} onPress={()=>NaviCal(props)}>
      <Text style={styles.buttonText} >Calculadora</Text>
      <Text></Text>
      <Icon style={styles.icono} name="calculator" size={40} />
   </TouchableOpacity>
   <TouchableOpacity style={{...styles.button2, backgroundColor:'#5F7ADB'}} onPress={()=>NaviCon(props)}>
   <Text style={styles.buttonText} >Conversor</Text>
   <Text></Text>
   <MIcon style={styles.icono} name="coins" size={40} />
   </TouchableOpacity>
   <TouchableOpacity style={{...styles.button3, backgroundColor:'#5F7ADB'}} onPress={()=>NaviTie(props)}>
   <Text style={styles.buttonText} >Tienda</Text>
   <Text></Text>
   <MIcon style={styles.icono} name="store" size={40} />
   </TouchableOpacity>
      </View>
  );
}

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#26292B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText:{
    textAlign:'center',
    color:'#ffff',
    fontSize:16,
      },
  button:{
    alignSelf: 'center',
    borderRadius:10,
    paddingVertical: 15,
    marginVertical:10,
    width: '25%'
    
  },
  button2:{
    alignSelf: 'center',
    borderRadius:10,
    paddingVertical: 15,
    marginVertical:10,
    width: '25%'
    
  },
  button3:{
    alignSelf: 'center',
    borderRadius:10,
    paddingVertical: 15,
    marginVertical:10,
    width: '25%'
    
  },
  bki: {
    position: 'absolute',
    height: 845,
    width: 400,
  }, 
  title1: {
    fontSize: 50,
    textAlign: 'center',

    color: '#FFFFFF',
    fontStyle: 'normal',
  },
  icono:{
    alignContent:'flex-start',
    alignSelf:'center'
  }
});
