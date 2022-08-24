import { useContext } from 'react';
import { GameContext } from '../Context/GameContext';

//PAGES
import Game from '../Pages/Game';
import Welcoming from '../Pages/Welcoming';
import GameOver from '../Pages/GameOver';

const Screen = () => {

    const { startGame , EndGame , userData} = useContext(GameContext);
    return (
        <>
       {startGame &&  !EndGame && <Game />}
      {!startGame && <Welcoming />}
      {EndGame &&  <GameOver />}
        </>
    );
};

export default Screen;