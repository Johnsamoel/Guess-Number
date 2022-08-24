import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , ImageBackground , SafeAreaView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

//fonts hook
import { useFonts } from 'expo-font';

//components
import Screen from './Components/Screen';

//importing Context
import {  GameContextProvider } from './Context/GameContext';




export default function App() {





  const [Fontsloading] = useFonts({
'poppins': require('./utils/Fonts/poppins/Poppins-Medium.ttf'),
'poppins-bold' : require('./utils/Fonts/poppins/Poppins-ExtraBold.ttf') ,
'Montserrat' : require('./utils/Fonts/Montserrat/Montserrat-Medium.ttf')
})


    
    if(!Fontsloading){
      <View>
        <Text>Loading</Text>
      </View>
    }else{
    
  return (
    <GameContextProvider >
    <View style={styles.root}>
    <LinearGradient style={styles.root} colors={['#834d9b' , '#d04ed6']}>
    <ImageBackground source={require('./assets/images/pexels-raka-miftah-4253620.jpg')} style={{flex:1 , opacity:0.92 }} resizeMode='cover'>
    <SafeAreaView style={{ alignItems:'center' , justifyContent:'center' , flex:1 }} >
    <Screen />
    </SafeAreaView>
    </ImageBackground>
    <StatusBar style='light' />
    </LinearGradient>
    </View>
    </GameContextProvider>
) }

}

const styles = StyleSheet.create({
root: {
  flex: 1,
},
container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
  
},

});
