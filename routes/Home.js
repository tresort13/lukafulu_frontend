import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ImageBackground,FlatList, Text, View,TouchableOpacity } from 'react-native';
import {NativeBaseProvider,Modal,Button} from "native-base";
import Header from '../shared/Header';
import { FontAwesome,AntDesign,Foundation } from '@expo/vector-icons'; 



export default function Home({navigation}) {

  const [showModal, setShowModal] = useState(false);

  const pressHandler = ()=>
  {
    navigation.navigate('EnvoiDecharge')
  }

  
  
  return (
 
    <NativeBaseProvider>
  <ImageBackground source={require('../assets/photo4.jpeg')} resizeMode="cover" style={styles.cover}>   
    <Header  />
    

     <View  style={styles.containerMenu}>
    
       <View style={styles.containerPrincipale}>
          <TouchableOpacity onPress={pressHandler}>
              <View style={styles.menuDesign}>
              <FontAwesome name="send" size={50} color="white" />
                <Text style={styles.textMenu2}>Envoyer Décharge</Text>
              </View>      
          </TouchableOpacity>

          <TouchableOpacity onPress={ setShowModal(true) }>
            <View style={styles.menuDesign2}>
            <AntDesign name="star" size={50} color="black" />
              <Text style={styles.textMenu}>Points Gagnés</Text> 
            </View>
          </TouchableOpacity>
        </View>  
      


       <View style={styles.containerPrincipale}>
          <TouchableOpacity onPress={ setShowModal(true) }>
             <View style={styles.menuDesign2}>
             <Foundation name="torso-business" size={70} color="black" />
              <Text style={styles.textMenu}>Mon Profil</Text> 
             </View>     
          </TouchableOpacity>

          <TouchableOpacity onPress={ setShowModal(true) }>
            <View style={styles.menuDesign}>
            <FontAwesome name="history" size={50} color="white" />
              <Text style={styles.textMenu2}>Historique</Text> 
            </View>
          </TouchableOpacity>
        </View>  
    </View>

  </ImageBackground>
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
    cover :{
      flex: 1
    },
    containerPrincipale: {
      
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection:'row',
    },

   menuDesign: {
    
    width:200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#4682B4', 
    margin:4
    
  },
  menuDesign2: {
    
    width:200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: 'white', 
    margin:4 
  },

  menuDesign2: {
    marginVertical:20,
    width:200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: 'white', 
    
  },

  containerMenu:{

    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:"column",
    flex:1
   
  },
  textMenu:{
    
    fontWeight:"bold",
    color:'black',
    paddingTop:5
  },
  textMenu2:{
    
    fontWeight:"bold",
    color:'white',
    paddingTop:5
  },
  buttonModal:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  }
});
