import React from "react";
import { useState, createContext, useEffect } from "react";

export const GameContext = createContext({
  startGame: false,
  setStartGame: () => {},
  userData: { value: "", NumberWasChosen: false },
  setuserData: () => {},
});

export const GameContextProvider = ({ children }) => {
  const [userData, setuserData] = useState({
    value: "",
    NumberWasChosen: false,
  });
  const [startGame, setStartGame] = useState(false);

  useEffect(() => {
    if (userData.NumberWasChosen === true) setStartGame(true);
  }, [userData]);

  const ContextValue = { userData, setuserData, startGame, setStartGame };

  
  return (
    <GameContext.Provider value={ContextValue}>
      {children}
    </GameContext.Provider>
  );
};
