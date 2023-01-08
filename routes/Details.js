import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ImageBackground, Text, View } from 'react-native';
import { Button,Header } from "@rneui/themed";
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function Details({route,navigation}) {
    const{nom,postnom,age} = route.params.studentInfo.infoStudent
const pressHandler =()=>
{
  navigation.popToTop()

}
  return (
 
  <ImageBackground source={require('../assets/fulu1.jpeg')} resizeMode="cover" style={styles.container}>
     <View style={styles.marging}>
     <Text >the name of the student is : {nom} et </Text>
     <Text >the lastname of the student is : {postnom} et </Text>
     <Text >the age of the student is : {age} et </Text>
     </View>
     <View>
     <Button  onPress={pressHandler}>Go back to Home</Button>
       </View>


     <StatusBar style='auto'/>
  </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  marging : {
    paddingBottom : 10,
    backgroundColor:'white'
  }
 
});
