import { StyleSheet,Image, Text, View,TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import {NativeBaseProvider,Divider,Modal,Spinner,Button} from "native-base";


export default function Header({navigation}) {

  const [showModal, setShowModal] = useState(false);
  
  return (
 <NativeBaseProvider>
<View style={styles.containerHeader} onPress={ setShowModal(true) }>
<TouchableOpacity >
  <MaterialIcons name="menu" size={60} color="white" style={styles.menuIconStyle} />
</TouchableOpacity>

     <Text style={styles.title}>LUKAFULU</Text> 
     <Image resizeMode='contain'  source={require('../assets/fulu_logo.jpeg')} style={styles.imageStyle}/>
</View>
 
 <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
 <Modal.Content maxWidth="400px">
 <Modal.Header>Désolé Option Indisponible </Modal.Header>
   <Modal.Body>     
   Cette option n'est pas disponible dans cette version LUKAFULU-1.0  
   </Modal.Body>
   <Modal.Footer>
     <View style={styles.buttonModal}>
       <Button variant="secondary" colorScheme="blueGray" onPress={() => {  setShowModal(false); }}>
        Ok
       </Button>
     </View>
   </Modal.Footer>
 </Modal.Content>
</Modal>
</NativeBaseProvider>  
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    height:80,
    backgroundColor:'black',
    flexDirection:'row',
    alignItems:'center' ,
    justifyContent:'space-between'
  },
  title : {
    fontSize : 20,
    fontWeight:"bold",
    color: '#fff',
    textAlign: 'center',
    justifyContent:'center'
    
  },
  imageStyle: {
   width:45,
   marginRight:10
  },
  menuIconStyle : {
    marginLeft:5
  },
  buttonModal:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  }
 
});
