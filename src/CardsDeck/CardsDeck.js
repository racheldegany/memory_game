import React, { useEffect, useState } from 'react';
import Card from './Card/Card';


function CardsDeck({numOfPairs, backDisplay, flippedCount, setFlippedCount, wrongCounter, setWrongCounter}) {
  // let deck = [];  // const backOptions = [0, 1, 2];
  const [game, setGame] = useState([])
  const [flippedIndexes, setFlippedIndexes] = useState([]);
// let deck = [];    

    useEffect(() => {
        setGame([]);
        setTimeout(createGame, 2000);
    }, [numOfPairs, backDisplay]);

    const createGame = () =>{
        const newGame = []
        for (let i = 0; i < numOfPairs; i++) {
            const card = {
            type: i,
            flipped: false,
            background: backDisplay
            }
            newGame.push(card, card);
        }
    const shuffledGame = newGame.sort(() => Math.random() - 0.5);
    setGame(shuffledGame);
  }  

  if (flippedIndexes.length === 2) {
    const match = game[flippedIndexes[0]].type === game[flippedIndexes[1]].type;
  
    if (match) {
        const newGame = [...game]
        newGame[flippedIndexes[0]].flipped = true
        newGame[flippedIndexes[1]].flipped = true
        setFlippedCount(flippedCount + 1);
        setGame(newGame);
        setFlippedIndexes([]);
    } else {
        setWrongCounter(++wrongCounter);
        setFlippedIndexes([])
    }
  }

    if (game.length === 0) return <div>loading...</div>
    else {
        return (
        <div id="cards" className="row justify-content-center align-items-center">
          {game.map((card, index) => (
              <Card
                id={index}
                card={card}
                flippedIndexes={flippedIndexes}
                setFlippedIndexes={setFlippedIndexes}
              />
          ))}
        </div>
        );
    }
}

export default CardsDeck;