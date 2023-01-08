import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect,useRef} from 'react';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import * as Location from 'expo-location';
import { Camera } from 'expo-camera';
import { MaterialIcons } from '@expo/vector-icons'; 
import {Spinner, NativeBaseProvider,Modal } from "native-base";



export default function CameraDisplay({route,navigation}) 
{
  const [showModal, setShowModal] = useState(false);
const [hasCameraPermission,setHasCameraPermission] = useState();
const [photo,setPhoto] = useState();
const [location,setLocation] = useState();
const [type,setType] = useState(Camera.Constants.Type.back);
const [flash,setFlash] = useState(Camera.Constants.FlashMode.off);
const cameraRef = useRef();



useEffect(()=>{
 (async ()=>{
   const cameraPermission = await Camera.requestCameraPermissionsAsync();
   setHasCameraPermission(cameraPermission.status === "granted");
 })();
},[])

useEffect(() => {
  const getPermissions = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log("Please grant location permissions");
      return;
    }

    let currentLocation = await Location.getCurrentPositionAsync({});
    setLocation(currentLocation);
  };
  getPermissions();
}, []);



const takePic = async ()=>{
    if(cameraRef)
    {
        try
        {

        const newPhoto = await cameraRef.current.takePictureAsync();
        setPhoto(newPhoto);
        setShowModal(true)
              } catch(e){
           console.log(e)
        }
       
    }  
    
  };
  const goToForm = ()=>{
    if((photo)&&(location))
    {
        navigation.navigate('EnvoiDecharge',{photo : photo, location : location})
    }
 }

useEffect(()=>{
    goToForm();  
},[photo,location])

  if (hasCameraPermission === undefined) {
    return <Text>LUKAFULA a besoin de votre permission pour acceder à votre camera...</Text>
  } else if (!hasCameraPermission) {
    return <Text>L'accès à votre camera a été réjeté , veuillez changer cela dans parametres.</Text>
  }
  
 

return (
<NativeBaseProvider>
      <Camera style={styles.camera} ref={cameraRef} type={type} flashMode={flash}>
       <TouchableOpacity  onPress={takePic}>
          <View style={styles.menuDesign}>
          <MaterialIcons name="circle" size={100} color="white" />
          </View>
        </TouchableOpacity>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
        <Modal.Header>Veuillez Patienter...</Modal.Header>
          <Modal.Body>     
          <Spinner size="lg" />
          </Modal.Body>
        </Modal.Content>
      </Modal>
      </Camera>
      </NativeBaseProvider>
  );

}

const styles = StyleSheet.create({
 

  
  camera:{
    flex:1,
    justifyContent:'flex-end',
    paddingBottom : 30
    
  },
 
  preview: {
    alignSelf:'stretch',
    flex:1
  },
  menuDesign:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  
 
});
