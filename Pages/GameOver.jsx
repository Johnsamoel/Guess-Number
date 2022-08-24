import { View, Text, StyleSheet } from 'react-native';

import Title from '../Components/UI/Title';
import PrimaryButton from '../Components/UI/PrimaryButton';
import { useContext } from 'react';
import { GameContext } from '../Context/GameContext';


const  GameOver = () => {

  const { userData , guessRounds , onStartNewGame } = useContext(GameContext)


  return (
    <View style={styles.rootContainer}>
      <View style={styles.card}>
      <Title>GAME OVER!</Title>

      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{guessRounds.length}</Text>{' '}
        rounds to guess the number
        <Text style={styles.highlight}>{' '+userData.value}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',

  },
  card: {
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
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'poppins',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  highlight: {
    fontWeight:'bold',
    color:"#834d9b",
    fontFamily:'poppins'
  },
});

export default GameOver;