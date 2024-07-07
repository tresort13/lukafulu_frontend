import React from 'react'
import Home from './Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EnvoiDecharge from './EnvoiDecharge';
import CameraDisplay from './CameraDisplay';
import Details from './Details';


const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Home' options={{title:'Accueil'}}  component={Home}>
      <Stack.Screen name="Home" options={{title:'Accueil'}}  component={Home} initialParams={{message :''}}/>
        <Stack.Screen name="EnvoiDecharge" options={{title:'Envoyer Décharge'}} component={EnvoiDecharge} initialParams={{photo :'',location:''}} />
        <Stack.Screen name="camera" component={CameraDisplay} />
        <Stack.Screen name="Details" component={Details}  />
    </Stack.Navigator>
  )
}

export default HomeStackNavigator