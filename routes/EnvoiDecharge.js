import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import {KeyboardAvoidingView,SafeAreaView, StyleSheet,Keyboard,ImageBackground, ScrollView,Text, View,TextInput ,TouchableWithoutFeedback,TouchableOpacity,Image, Platform} from 'react-native';
import Header from '../shared/Header';
import {Formik} from 'formik';
import {NativeBaseProvider, Select ,CheckIcon,Divider,Modal,Spinner,Button,Checkbox} from "native-base";
import { MaterialIcons,FontAwesome,Ionicons,AntDesign  } from '@expo/vector-icons'; 
import * as yup from 'yup';




const testValidation = yup.object({
   
   description_decharge: yup.array().required('champs obligatoire'),
    dimensions_decharge: yup.string().required('champs obligatoire'),
    dechet_observer: yup.array().required('champs obligatoire'),
    nuisances_observer: yup.array().required('champs obligatoire'),
    description_situation: yup.array().required('champs obligatoire'),
    localisation_decharge: yup.string().required('champs obligatoire'),
    observation: yup.string().required('champs obligatoire')
});


export default function EnvoiDecharge({route,navigation}) {

 
/* const pressHandler =()=>
{
  navigation.goBack()

}
*/
const [showModal, setShowModal] = useState(false);
const [showModal2, setShowModal2] = useState(false);
const [showModal3, setShowModal3] = useState(false);
const [showModal4, setShowModal4] = useState(false);
const [showModal5, setShowModal5] = useState(false);
const [showModal6, setShowModal6] = useState(false);


const photo = route.params.photo
const location= route.params.location

const submitForm = (values,actions)=>
{
  const uploadData = new FormData();
  uploadData.append('photo',{
    uri : values.photo,
    type:'image/jpg',
    name:'decharge.jpg'
  })
  uploadData.append('localisation_decharge',values.localisation_decharge)
  uploadData.append('description_decharge',values.description_decharge)
  uploadData.append('dimensions_decharge',values.dimensions_decharge)
  uploadData.append('dechet_observer',values.dechet_observer)
  uploadData.append('nuisances_observer',values.nuisances_observer)
  uploadData.append('description_situation',values.description_situation)
  uploadData.append('observation',values.observation)
  uploadData.append('longitude',values.location.coords.longitude)
  uploadData.append('latitude',values.location.coords.latitude)
  uploadData.append('altitude',values.location.coords.altitude)
  uploadData.append('altitudeAccuracy',values.location.coords.altitudeAccuracy)
  uploadData.append('accuracy',values.location.coords.accuracy)
  uploadData.append('heading',values.location.coords.heading)
  uploadData.append('speed',values.location.coords.speed)
  uploadData.append('timestamp',values.location.timestamp)
console.log(uploadData)
   fetch('https://lukafulu-api.herokuapp.com/api/dechargesInformationsEnvoi/', {
          method:'POST',
          headers: {'Content-Type': 'multipart/form-data'},
          body: uploadData
          })
          .then( res => res.json())
          .then(
            res => { 
              setShowModal2(false) 
              setShowModal(true) 
              navigation.navigate('EnvoiDecharge')
              actions.resetForm()
              console.log("envoi reussi") 
              console.log(res)
            }
            
          )
          .catch( (error) =>
            {
              console.log(error)
            } )


   
}



const openCamera =()=>
{
  navigation.navigate('camera')

}


return (

<NativeBaseProvider>

<ImageBackground source={require('../assets/photo4.jpeg')} resizeMode="cover" style={styles.cover}>
    <Header />
     <Formik
     initialValues = {{
       localisation_decharge :'',
       description_decharge:[],
       dimensions_decharge:'',
       dechet_observer:[],
       nuisances_observer:[],
       description_situation:[],
       observation:''

      }}
      validationSchema={testValidation}
     onSubmit={(values,actions)=>
    {
      values.photo = photo.uri
      values.location = location
      submitForm(values,actions)
      setShowModal2(true)
     // actions.resetForm()
      //navigation.navigate('EnvoiDecharge')
     
    }}
     >
     {
       (props)=>(
        
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          
         <View style={styles.container}>
           <ScrollView  automaticallyAdjustKeyboardInsets={true}>
       {/*  <View style={styles.titleContainer}>
             <Text style={styles.title}>SIGNALER UNE DECHARGE (FULU) </Text>
       </View> */}
           
       {/* <Select 
        style={styles.selectBox}
        selectedValue={props.values.description_decharge} minWidth="200"  accessibilityLabel="Choose Service"  placeholder="Description de la décharge" 
        _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
           }} mt={2} onValueChange={props.handleChange('description_decharge')} >
          <Select.Item label="Active" value="Active" />
          <Select.Item label="Abandonnée" value="Abandonnée" />
          <Select.Item label="Sauvage" value="Sauvage" />
          <Select.Item label="Publique aménagée" value="Publique aménagée" />
          </Select> */}

<TextInput
         editable={false}
          showSoftInputOnFocus={false}      
          onPressIn={() => setShowModal3(true)}
          multiline
          style={styles.inputText}
          placeholder='Description de la décharge'
          placeholderTextColor={'gray'}
          value={props.values.description_decharge.join(' ')}
        />





<Modal isOpen={showModal3} onClose={() => setShowModal3(false)}>
        <Modal.Content maxWidth="400px">
        <Modal.Header>Description de la décharge</Modal.Header>
          <Modal.Body>     
          <Checkbox.Group   onChange={(values)=>{
  props.setFieldValue('description_decharge',values,true);
}}  accessibilityLabel="choose numbers" value={props.values.description_decharge}>
           <Checkbox  value="Active" my={2}>
           Active
           </Checkbox>
            <Checkbox value="Abandonnée">Abandonnée</Checkbox>
            <Checkbox value="Sauvage" my={2}>
            Sauvage
           </Checkbox>
            <Checkbox value="Publique aménagée">Publique aménagée</Checkbox>
            </Checkbox.Group>
          </Modal.Body>
          <Modal.Footer>
          <View style={styles.buttonModalCheck}>
         <Button colorScheme={"primary"} size={"lg"} onPress={() => {  setShowModal3(false); }}>
          Ok
         </Button>
       </View>
          </Modal.Footer>
        </Modal.Content>
    </Modal>




          
          <Text style={styles.errorText}>{props.touched.description_decharge && props.errors.description_decharge}</Text>
          <Divider _light={{
           bg: "muted.800" }} 
           _dark={{bg: "muted.50"}} 
           />

          <Select 
        style={styles.selectBox}
        
        selectedValue={props.values.dimensions_decharge} minWidth="200" accessibilityLabel="Choose Service"  placeholder="Dimensions de la décharge" 
        _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
           }} mt={2} onValueChange={props.handleChange('dimensions_decharge')}>
          <Select.Item label="Petite" value="Petite" />
          <Select.Item label="Moyenne" value="Moyenne" />
          <Select.Item label="Grande" value="Grande" />
          </Select>
          <Text style={styles.errorText}>{props.touched.dimensions_decharge && props.errors.dimensions_decharge}</Text>
          <Divider  _light={{
           bg: "muted.800" }} 
           _dark={{bg: "muted.50"}} 
           />


<TextInput
         editable={false}
          showSoftInputOnFocus={false}      
          onPressIn={() => setShowModal4(true)}
          multiline
          style={styles.inputText}
          placeholder='Déchets Observés'
          placeholderTextColor={'gray'}
          value={props.values.dechet_observer.join(' ')}
        />





<Modal isOpen={showModal4} onClose={() => setShowModal4(false)}>
        <Modal.Content maxWidth="400px">
        <Modal.Header>Déchets Observés</Modal.Header>
          <Modal.Body>     
          <Checkbox.Group   onChange={(values)=>{
  props.setFieldValue('dechet_observer',values,true);
}}  accessibilityLabel="choose numbers" value={props.values.dechet_observer}>
           <Checkbox  value="M.P (Matière Plastique)" my={2}>
           M.P (Matière Plastique)
           </Checkbox>
            <Checkbox value="M.O (Matière Organique)">M.O (Matière Organique)</Checkbox>
            <Checkbox value="Divers" my={2}>
            Divers
           </Checkbox>
            </Checkbox.Group>
          </Modal.Body>
          <Modal.Footer>
          <View style={styles.buttonModalCheck}>
         <Button colorScheme={"primary"} size={"lg"} onPress={() => {  setShowModal4(false); }}>
          Ok
         </Button>
       </View>
          </Modal.Footer>
        </Modal.Content>
    </Modal>

    <Divider  _light={{
           bg: "muted.800" }} 
           _dark={{bg: "muted.50"}} 
           />

<TextInput
         editable={false}
          showSoftInputOnFocus={false}      
          onPressIn={() => setShowModal5(true)}
          multiline
          style={styles.inputText}
          placeholder='Nuisances Observées'
          placeholderTextColor={'gray'}
          value={props.values.nuisances_observer.join(' ')}
        />





<Modal isOpen={showModal5} onClose={() => setShowModal5(false)}>
        <Modal.Content maxWidth="400px">
        <Modal.Header>Nuisances Observées</Modal.Header>
          <Modal.Body>     
          <Checkbox.Group   onChange={(values)=>{
  props.setFieldValue('nuisances_observer',values,true);
}}  accessibilityLabel="choose numbers" value={props.values.nuisances_observer}>
           <Checkbox  value="Odeurs" my={2}>
           Odeurs
           </Checkbox>
            <Checkbox value="Fumées">Fumées</Checkbox>
            <Checkbox value="Autres" my={2}>
            Autres
           </Checkbox>
            </Checkbox.Group>
          </Modal.Body>
          <Modal.Footer>
          <View style={styles.buttonModalCheck}>
         <Button colorScheme={"primary"} size={"lg"} onPress={() => {  setShowModal5(false); }}>
          Ok
         </Button>
       </View>
          </Modal.Footer>
        </Modal.Content>
    </Modal>


          <Divider _light={{
           bg: "muted.800" }} 
           _dark={{bg: "muted.50"}} 
           />
          <Text style={styles.errorText}>{props.touched.nuisances_observer && props.errors.nuisances_observer}</Text>
         
          <TextInput
         editable={false}
          showSoftInputOnFocus={false}      
          onPressIn={() => setShowModal6(true)}
          multiline
          style={styles.inputText}
          placeholder='Description de la situation'
          placeholderTextColor={'gray'}
          value={props.values.description_situation.join(' ')}
        />





<Modal isOpen={showModal6} onClose={() => setShowModal6(false)}>
        <Modal.Content maxWidth="400px">
        <Modal.Header>Description de la situation</Modal.Header>
          <Modal.Body>     
          <Checkbox.Group   onChange={(values)=>{
  props.setFieldValue('description_situation',values,true);
}}  accessibilityLabel="choose numbers" value={props.values.description_situation}>
           <Checkbox  value="Bord de la route" my={2}>
           Bord de la route
           </Checkbox>
            <Checkbox value="Plein Champ">Plein Champ</Checkbox>
            <Checkbox value="Bord de la rivière" my={2}>
            Bord de la rivière
           </Checkbox>
           <Checkbox value="A côté des habitations" my={2}>
           A côté des habitations
           </Checkbox>
            </Checkbox.Group>
          </Modal.Body>
          <Modal.Footer>
          <View style={styles.buttonModalCheck}>
         <Button colorScheme={"primary"} size={"lg"} onPress={() => {  setShowModal6(false); }}>
          Ok
         </Button>
       </View>
          </Modal.Footer>
        </Modal.Content>
    </Modal>


         
        
           
            <Divider  _light={{
           bg: "muted.800" }} 
           _dark={{bg: "muted.50"}} 
           />
           <TextInput
           multiline
           style={styles.inputText}
           onChangeText={props.handleChange('localisation_decharge')}
           value={props.values.localisation_decharge}
           placeholder='Localisation de la décharge'
           placeholderTextColor={'gray'}
           onBlur={props.handleBlur('localisation_decharge')} 
           focusable={true}/>
         <Text style={styles.errorText}>{props.touched.localisation_decharge && props.errors.localisation_decharge}</Text>
        <Divider  _light={{
           bg: "muted.800" }} 
           _dark={{bg: "muted.50"}} 
           />
          <TextInput
          
           multiline
           style={styles.inputText}
           onChangeText={props.handleChange('observation')}
           value={props.values.observation}
           placeholder='Observations'
           placeholderTextColor={'gray'}
           onBlur={props.handleBlur('observation')}
            />
                     <Text style={styles.errorText}>{props.touched.observation && props.errors.observation}</Text>
          <Divider  _light={{
           bg: "muted.800" }} 
           _dark={{bg: "muted.50"}} 
           />
          
          {photo === "" ? <TouchableOpacity onPress={openCamera}>
        <View style={styles.menuDesign}>
        <MaterialIcons name="camera-alt" size={50} color="black" />
          <Text  style={styles.textMenu}>photo de la décharge (avec coordonnées GPS)</Text>
        </View>
          </TouchableOpacity> :
         <View style={styles.containerImage}>
           <Image  source={{ uri: photo.uri }} style={styles.imageContainer} />
           <TouchableOpacity style={styles.nouvellePhoto} onPress={openCamera}>
           <View style={styles.nouvellePhoto}>
           <MaterialIcons name="camera-alt" size={70} color="black" />
           <Text style={styles.textMenu}>Prendre une nouvelle photo</Text>
           </View>
           </TouchableOpacity>
          </View>
          }
          
         <Divider my="2" _light={{
           bg: "muted.800" }} 
           _dark={{bg: "muted.50"}} 
           />

        <TouchableOpacity onPress={props.handleSubmit}>
          <View style={styles.menuDesign2}>
           <Text style={styles.textMenu2}>Envoyer</Text>
           </View>
          </TouchableOpacity>
          </ScrollView>
     </View>
     
     </TouchableWithoutFeedback>
       )
     }
     </Formik>
  </ImageBackground>
  <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
        <Modal.Header>Envoi Réussi.</Modal.Header>
          <Modal.Body>     
          <FontAwesome name="check-circle-o" size={70} color="green" />
          </Modal.Body>
          <Modal.Footer>
            <View style={styles.buttonModal}>

              <Button variant="secondary" colorScheme="blueGray" onPress={() => {
              setShowModal(false);
            }}>
              <AntDesign name="pluscircle" size={50} color="gray" />
                Nouvel Envoi
              </Button>
              
              
              <Button onPress={() => {
              setShowModal(false);
              navigation.navigate('Home')
            }}>
              <Ionicons name="home" size={40} color="lightblue" />
                Accueil
              </Button>
            
            </View>
          </Modal.Footer>
        </Modal.Content>
    </Modal>

    <Modal isOpen={showModal2} onClose={() => setShowModal2(false)}>
        <Modal.Content maxWidth="400px">
        <Modal.Header>Envoi en cours...</Modal.Header>
          <Modal.Body>     
          <Spinner size="lg" />
          </Modal.Body>
        </Modal.Content>
      </Modal>
      
</NativeBaseProvider>
  
  );
}

const styles = StyleSheet.create({
  cover :{
    flex: 1
  },
  container :{
   backgroundColor :'white',
   flex:1
   
  },
  inputText : {
    marginTop:10,
    marginBottom:10,
    padding: 15,
    borderWidth:1,
    borderColor:'black',
    fontSize:16,
    borderRadius:15
  },
 
  selectBox : {
    borderWidth:1,
    fontSize:16,
    borderRadius:15,
    marginBottom:4,
    marginTop:4
  },

  buttonContainer: {
    backgroundColor:'#fff',
     alignSelf:'flex-end'
  },
  titleContainer:{
    justifyContent:'center',
    alignSelf:'center',
    padding:10

    
  },
  title:{
    fontSize:12,
    fontWeight:"bold"
  },
  textMenu:{
    color:'black',
    paddingTop:5
  },
  menuDesign:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#D3D3D3',
    //width:300,
    borderRadius: 50
  },
  menuDesign2:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#A52A2A',
    borderRadius: 50,
    marginTop:10,
    marginBottom:30
  },
  textMenu2:{
    color:'black',
     padding :20,
    fontSize:20,
    fontWeight:"bold"
  },
  imageContainer:{
    width:200,
    height: 150,
    margin:4 
  },
  containerImage :{
   flex :1,
   flexDirection:'row',
  },
  nouvellePhoto:{
    alignItems:'center',
    justifyContent:'center'
  }  ,
  errorText:{
    color: 'crimson',
    fontWeight: 'bold',
   // marginBottom: 10,
   // marginTop: 6,
    textAlign: 'center',
  },
  buttonModal:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  buttonModalCheck:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  }
 
});
