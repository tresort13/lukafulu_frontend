import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ImageBackground, Text, View } from 'react-native';
import { Button,Header } from "@rneui/themed";
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function About({route,navigation}) {
    
  return (
 
  <ImageBackground source={require('../assets/fulu1.jpeg')} resizeMode="cover" style={styles.container}>
     <View style={styles.marging}>
     <Text >
     Deontay Leshun Wilder (born October 22, 1985) is an American. He Held the 
      title from 2015 to 2020, making 10 successful defenses. By winning the title, 
      Wilder became the first American world heavyweight champion since 2007, 
      which was the longest period of time in boxing history without an American
       heavyweight champion. As of October 2022, he is ranked as the world’s
        second-best active heavyweight by magazine, and third and the.
     </Text>
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
