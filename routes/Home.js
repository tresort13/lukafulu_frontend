import { NativeBaseProvider } from "@gluestack-ui/themed-native-base";
import { useState,useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ImageBackground,FlatList, View,TouchableOpacity ,Text} from 'react-native';
import {Button,Modal } from "@gluestack-ui/themed-native-base";
import Header from '../shared/Header';
import { MaterialIcons,FontAwesome,Ionicons,AntDesign ,Foundation } from '@expo/vector-icons'; 




export default function Home({route,navigation}) {

  const [showModal, setShowModal] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  var response = route.params.message

  useEffect(()=>{
    if(response==="successfull")
    setShowModal3(true)
  },[response]) ;

 

console.log(route.params.message)
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

          <TouchableOpacity onPress={() => {  setShowModal(true); }}>
            <View style={styles.menuDesign2}>
            <AntDesign name="star" size={50} color="black" />
              <Text style={styles.textMenu}>Points Gagnés</Text> 
            </View>
          </TouchableOpacity>
        </View>  
      


       <View style={styles.containerPrincipale}>
          <TouchableOpacity onPress={() => {  setShowModal(true); }}>
             <View style={styles.menuDesign2}>
             <Foundation name="torso-business" size={70} color="black" />
              <Text style={styles.textMenu}>Mon Profil</Text> 
             </View>     
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {  setShowModal(true); }}>
            <View style={styles.menuDesign}>
            <FontAwesome name="history" size={50} color="white" />
              <Text style={styles.textMenu2}>Historique</Text> 
            </View>
          </TouchableOpacity>
        </View>  
    </View>
    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
   <Modal.Content maxWidth="400px">
   <Modal.Header>Désolé Option Indisponible</Modal.Header>
     <Modal.Body>     
     Cette option n'est pas encore disponible dans cette version LUKAFULU-1.0
     </Modal.Body>
     <Modal.Footer>
       <View style={styles.buttonModal}>
         <Button colorScheme={"primary"} size={"lg"} onPress={() => {  setShowModal(false); }}>
ok 
         </Button>
       </View>
     </Modal.Footer>
   </Modal.Content>
</Modal>

<Modal  isOpen={showModal3} onClose={() => setShowModal3(false)}>
        <Modal.Content maxWidth="400px">
        <Modal.Header>Envoi Réussi.</Modal.Header>
          <Modal.Body>     
          <FontAwesome name="check-circle-o" size={100} color="green" />
          </Modal.Body>
          <Modal.Footer>
            <View style={styles.buttonModal}>
            <Button colorScheme={"danger"} size={"lg"} onPress={() => {  setShowModal3(false); }}>
                Fermer
           </Button> 
            </View>
          </Modal.Footer>
        </Modal.Content>
    </Modal>

  </ImageBackground>
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
