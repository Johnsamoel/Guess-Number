import { useState, useEffect , useContext} from 'react';
import { View, StyleSheet, Alert, Text, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

//components
import Title from '../Components/UI/Title';
import SencondaryButton from '../Components/UI/SencondaryButton';
import { GameContext } from '../Context/GameContext';
import List from '../Components/UI/List';




let minBoundary = 1;
let maxBoundary = 100;

const  Game = () =>{

  const generateRandomBetween = (min, max, exclude) => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }
  

  const {  userData , SetEndGame  , guessRounds , setGuessRounds} = useContext(GameContext)
 

  const initialGuess = generateRandomBetween(1, 100, userData.value );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);




  const  gameOverHandler = (numberOfRounds) =>  {

    SetEndGame(true);
    setGuessRounds(numberOfRounds);
  }

  useEffect(() => {

    if (currentGuess === +userData.value) {
      gameOverHandler(guessRounds);
    }
  }, [currentGuess, userData, gameOverHandler , guessRounds]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const nextGuessHandler = (direction) => {
    if (
      (direction === 'lower' && currentGuess < userData.value) ||
      (direction === 'greater' && currentGuess > userData.value)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
  }

  const guessRoundsListLength = guessRounds.length;



  return (
    <View style={styles.screen}>
      <Title>My guess</Title>
      <View style={styles.card}>
        <Text style={styles.instructionText}>
          Higher or lower?
        </Text>
        <Text style={{fontWeight:'bold' , color:'#834d9b' , fontSize:32}}>{currentGuess}</Text>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <SencondaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              <Ionicons name="md-remove" size={24} color="white" />
            </SencondaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <SencondaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
              <Ionicons name="md-add" size={24} color="white" />
            </SencondaryButton>
          </View>
        </View>
      </View>
      <List guessRounds={guessRounds} guessRoundsListLength={guessRoundsListLength} />
    </View>
  );
}

export default Game;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
  card: {
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 36,
    marginHorizontal: 20,
    padding: 16,
    backgroundColor:'rgb(238,238,238)' ,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    height: '25%'
  },
  instructionText: {
    fontFamily: 'poppins',
    fontSize: 24,
    fontWeight:'bold'
  }
});