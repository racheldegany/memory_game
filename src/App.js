import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GameOver from './GameOver/GameOver';
import { useEffect, useState } from 'react';
import CardsDeck from './CardsDeck/CardsDeck';
import Header from './Header/Header';
// import Game from './App2/Game';

function App() {
  const [backDisplay, setBackDisplay] = useState(0);
    const [numOfPairs, setNumOfPairs] = useState(6);
    const [timer, setTimer] = useState(false);
    const [flippedCount, setFlippedCount] = useState(0);
    const [wrongCounter, setWrongCounter] = useState(0);
    const [hasWon, setHasWon] = useState(false);
    const [isNewGame, setIsNewGame] = useState(false);
  
  useEffect(() => {
    (flippedCount === 1 || wrongCounter === 1) && setTimer(true);
    if(flippedCount === numOfPairs){
      setHasWon(true);
      setWrongCounter(0)
      setFlippedCount(0);
      setTimer(false);
      setNumOfPairs(null);
      setBackDisplay(null)
    }

  },[flippedCount, wrongCounter, isNewGame]);


  return (
    <div className="App container justify-content-center">
      <Header setBackDisplay={setBackDisplay} setNumOfPairs={setNumOfPairs} timer={timer} wrongCounter={wrongCounter} isNewGame={isNewGame} setIsNewGame={setIsNewGame}/>
      {!hasWon && <CardsDeck numOfPairs={numOfPairs} backDisplay={backDisplay} flippedCount={flippedCount} setFlippedCount={setFlippedCount} wrongCounter={wrongCounter} setWrongCounter={setWrongCounter}/>}
      <GameOver hasWon={hasWon} setHasWon={setHasWon} setBackDisplay={setBackDisplay} setNumOfPairs={setNumOfPairs} setIsNewGame={setIsNewGame}/>
    </div>
  );
}

export default App;
