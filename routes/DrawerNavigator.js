import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import EnvoiDecharge from './EnvoiDecharge';
import HomeStackNavigator from './HomeStackNavigator';
import { MaterialIcons } from '@expo/vector-icons'; 


const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="HomeStack"screenOptions={{
        headerShown: false,
      }} component={HomeStackNavigator}>
      <Drawer.Screen options={{title:'Accueil'}} name="HomeStack" component={HomeStackNavigator} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator