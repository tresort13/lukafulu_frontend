import { NativeBaseProvider } from "@gluestack-ui/themed-native-base";
import { CameraView, useCameraPermissions } from 'expo-camera';
import { StyleSheet, Button,Text, View,TouchableOpacity} from 'react-native';
import { useEffect,useState,useRef } from 'react';
import * as Location from 'expo-location';
import {Camera} from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { MaterialIcons } from '@expo/vector-icons'; 
import {Spinner,Modal } from "@gluestack-ui/themed-native-base";

export default function CameraDisplay({route,navigation})  
{
const [facing, setFacing] = useState('back');
const [permission, requestPermission] = useCameraPermissions();
const [showModal, setShowModal] = useState(false);
const [photo,setPhoto] = useState();
const [location,setLocation] = useState();
const cameraRef = useRef();


const goToForm = ()=>{
  if((photo)&&(location))
  {
      navigation.navigate('EnvoiDecharge',{photo : photo, location : location})
  }
}


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




useEffect(()=>{
  goToForm();  
},[photo,location]) ;


if (!permission) {
    // Camera permissions are still loading.
   return <View />;
  } 

 if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>LUKAFULA a besoin de votre permission pour acceder à votre camera !</Text>
        <Button onPress={requestPermission} title="permission d'acceder à la camera" />
      </View>
    );
  }

  



 
  const takePic = async ()=>{
    setShowModal(true);
    if(cameraRef)
    {
        try
        {

        const newPhoto = await cameraRef.current.takePictureAsync();
        
        setPhoto(newPhoto);
        
              } catch(e){
           console.log(e)
        }
       
    }  
    
  }; 


  
  

  

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }




return (
  <NativeBaseProvider>
    <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
      <View >
      <TouchableOpacity  onPress={takePic}>
          <View style={styles.menuDesign}>
          <MaterialIcons name="circle" size={100} color="white" />
          </View>
        </TouchableOpacity>
      </View>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
        <Modal.Header>Veuillez Patienter...</Modal.Header>
          <Modal.Body>     
          <Spinner size="lg" />
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </CameraView>
    </NativeBaseProvider>

);
}


const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  
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


/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
}); */

 /* return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
*/
