import react from 'react';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import MIcon from 'react-native-vector-icons/FontAwesome5';



const Conversor = props => {
    const NaviSalv = props => {
        props.navigation.navigate('Colón Salvadoreño');
      }
      const NaviMex = props => {
        props.navigation.navigate('Peso Mexicano');
      }
      const NaviEu = props => {
        props.navigation.navigate('Euros');
      }
      const NaviLib = props => {
        props.navigation.navigate('Libra Esterlina');
      }
      const NaviFranco = props => {
        props.navigation.navigate('Franco Suizo');
      }
 
  return (
      <View style={styles.container}>
      <TouchableOpacity style={{...styles.button, backgroundColor:'#5F7ADB'}} onPress={()=>NaviSalv(props)}>
      <Text style={styles.buttonText} >Colón Salvadoreño</Text>
      <Text></Text>
      <MIcon style={styles.icono} name="coins" size={40} />
   </TouchableOpacity>
   <TouchableOpacity style={{...styles.button, backgroundColor:'#5F7ADB'}} onPress={()=>NaviMex(props)}>
   <Text style={styles.buttonText} >Peso Mexicano</Text>
   <Text></Text>
   <MIcon style={styles.icono} name="coins" size={40} />
   </TouchableOpacity>
   <TouchableOpacity style={{...styles.button, backgroundColor:'#5F7ADB'}} onPress={()=>NaviEu(props)}>
   <Text style={styles.buttonText} >Euros</Text>
   <Text></Text>
   <MIcon style={styles.icono} name="coins" size={40} />
   </TouchableOpacity>
   <TouchableOpacity style={{...styles.button, backgroundColor:'#5F7ADB'}} onPress={()=>NaviLib(props)}>
   <Text style={styles.buttonText} >Libra Esterlina</Text>
   <Text></Text>
   <MIcon style={styles.icono} name="coins" size={40} />
   </TouchableOpacity>
   <TouchableOpacity style={{...styles.button, backgroundColor:'#5F7ADB'}} onPress={()=>NaviFranco(props)}>
   <Text style={styles.buttonText} >Franco Suizo</Text>
   <Text></Text>
   <MIcon style={styles.icono} name="coins" size={40} />
   </TouchableOpacity>
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

  icono:{
    alignContent:'flex-start',
    alignSelf:'center'
  }
});
