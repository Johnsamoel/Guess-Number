import React from "react";
import { useState, createContext, useEffect } from "react";
import { Alert } from "react-native";

export const GameContext = createContext({
  startGame: false,
  EndGame: false ,
  SetEndGame: () => {},
  setStartGame: () => {},
  userData: { value: "", NumberWasChosen: false },
  setuserData: () => {},
  ChangeValueHandler: () => {},
  onStartNewGame: () => {}
});

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}


export const GameContextProvider = ({ children }) => {


  const [userData, setuserData] = useState({
    value: "",
    NumberWasChosen: false,
  });
  const [startGame, setStartGame] = useState(false);
  const [EndGame , SetEndGame] = useState(false); 


  const initialGuess = generateRandomBetween(1, 100, userData.value );
  const [guessRounds, setGuessRounds] = useState([initialGuess]);



  useEffect(() => {
    if (userData.NumberWasChosen === true) setStartGame(true);

  }, [userData]);

  
  const ChangeValueHandler = () => {
 
    if(userData.value === '' || userData.value < 1 || userData.value > 99 || isNaN(userData.value) ){
      Alert.alert( 'Invalid Number' ,'Number Must be between 1 and 99.' , [{title:'okay' }] )
      setuserData({value:'' , NumberWasChosen: false })
      return
    }
    
    setuserData((val) => { return { ...val , NumberWasChosen: true } })
  }


  const onStartNewGame = () => {
    setStartGame(false)
    setuserData({ value: "", NumberWasChosen: false })
    SetEndGame(false)
    setGuessRounds([initialGuess])
  }


  const ContextValue = { userData, setuserData, startGame, setStartGame , ChangeValueHandler , EndGame , SetEndGame , setGuessRounds , guessRounds , onStartNewGame};
  return (
    <GameContext.Provider value={ContextValue}>
      {children}
    </GameContext.Provider>
  );
};
