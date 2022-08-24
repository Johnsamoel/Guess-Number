import { View  , StyleSheet , TextInput , Text} from 'react-native';


// importing my components
import Title from './UI/Title';
import PrimaryButton from './UI/PrimaryButton';

//context imports 
import { useContext } from 'react';
import { GameContext } from '../Context/GameContext';

const Card = ({title}) => {
    const {userData , setuserData , ChangeValueHandler } = useContext(GameContext);
  


    return (
        <View  style={styles.card}>
      
        <View ><Title>{title}</Title></View>

        <View><Text>Enter a number Between 1 and 99.</Text></View>

        <View style={styles.container} >
        <TextInput style={styles.inputField} autoCapitalize='none' keyboardType='number-pad' autoCorrect={false} maxLength={2} value={userData.value} onChangeText={(number) => setuserData((val) => {return {  ...val , value: number } }) } />
        </View>

        <View style={styles.container} >
        <PrimaryButton onPress={() => { ChangeValueHandler() }}>Confirm</PrimaryButton>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card : {
    padding:20,
    display:'flex',
    justifyContent:'space-around' ,
    alignItems:'center' ,
    borderRadius:15 ,
    backgroundColor:'rgb(238,238,238)' ,
    width:300 ,
    height:250,
    marginHorizontal: 15
   },
   inputField: {
    padding:10,
    borderColor: '#834d9b',
    width:70 ,
    height:90,
    fontSize:32,
    borderBottomWidth: 3,
    borderBottomColor:"#834d9b"
   },
   container: {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:15
   },
   instructions: {
    textAlign:'center',
    fontWeight:'800',

   }
})

export default Card;