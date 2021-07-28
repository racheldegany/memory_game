import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import NewGame from '../NewGame/NewGame';


function Header({setBackDisplay, setNumOfPairs, timer, wrongCounter, isNewGame, setIsNewGame}) {
    const [show, setShow] = useState(false);
    const [seconds, setSeconds ] = useState(0);
    let interval;


    useEffect(()=>{
        timer && startTimer();
        if(isNewGame){
            clearInterval(interval);
            setSeconds(0);
        }
    }, [seconds, timer, isNewGame]);

    const startTimer = () => {
         interval = setInterval(() => {
            let newSec = seconds;
            setSeconds(++newSec);
            //replace to date format
          }, 1000);
    }
    const handleShow = () => {
        setShow(true);
        setIsNewGame(true);
    };
    
    return (
        <header className="d-flex justify-content-center flex-column">
            <h1 className="text-center">Memory Game</h1>
            <div className="d-flex justify-content-between" >
                <button className="" onClick={handleShow}>new Game</button>
                <span className="">Wrong guesses: {wrongCounter} </span>
                <span className="">{seconds} seconds</span>
            </div>
            <Modal show={show}>
                <NewGame setBackDisplay={setBackDisplay} setNumOfPairs={setNumOfPairs} setShow={setShow} setIsNewGame={setIsNewGame}/>
            </Modal>
        </header>
    );
}

export default Header;