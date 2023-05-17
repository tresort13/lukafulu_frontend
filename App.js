import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './routes/DrawerNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeStackNavigator from './routes/HomeStackNavigator';
/* some old imports
import { StyleSheet,AppState,EventEmitter } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './routes/Home';
import EnvoiDecharge from './routes/EnvoiDecharge';
import Details from './routes/Details';
import { useState,useEffect } from 'react';
import {NativeBaseProvider} from "native-base";
import CameraDisplay from './routes/CameraDisplay';
*/

/*
const Stack =  createNativeStackNavigator();
const Drawer = createDrawerNavigator();
*/

export default function App() {
  return (
   
      <NavigationContainer>
          <HomeStackNavigator/>
      </NavigationContainer>

  )
}
 
/*
export default function App() {
  
  return (     
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Home" >
        <Stack.Screen name="Home" options={{title:'Accueil'}}  component={Home}/>
        <Stack.Screen name="EnvoiDecharge" component={EnvoiDecharge} initialParams={{photo :'',location:''}} />
        <Stack.Screen name="camera" component={CameraDisplay} />
        <Stack.Screen name="Details" component={Details}  />
      </Stack.Navigator>  
    </NavigationContainer>
  );
}
*/

