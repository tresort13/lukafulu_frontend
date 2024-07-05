import React,{useState} from 'react';
import { StyleSheet,Image, Text, View,TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import {Modal,Button} from "@gluestack-ui/themed-native-base";
import { useNavigation } from '@react-navigation/native';


export default function Header() {

const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
  
  return (

<View style={styles.containerHeader} onPress={() => {  setShowModal(true); }}>
<TouchableOpacity >
  <MaterialIcons name="menu" size={60} color="white" style={styles.menuIconStyle} onPress={() => {  setShowModal(true); }}/>
</TouchableOpacity>

     <Text style={styles.title}>LUKAFULU</Text> 
     <Image resizeMode='contain'  source={require('../assets/fulu_logo.jpeg')} style={styles.imageStyle}/>
     <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
   <Modal.Content maxWidth="400px">
   <Modal.Header>Désolé Option Indisponible </Modal.Header>
     <Modal.Body>     
     Cette option n'est pas encore disponible dans cette version LUKAFULU-1.0  
     </Modal.Body>
     <Modal.Footer>
       <View style={styles.buttonModal}>
         <Button colorScheme={"primary"} size={"lg"} onPress={() => {  setShowModal(false); }}>
          Ok
         </Button>
       </View>
     </Modal.Footer>
   </Modal.Content>
</Modal>
    
</View>
 
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
