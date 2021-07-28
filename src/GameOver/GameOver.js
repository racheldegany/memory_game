import {React, useEffect, useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import NewGame from '../NewGame/NewGame';


function GameOver({hasWon, setBackDisplay, setNumOfPairs, setIsNewGame}) {
const [show, setShow] = useState(hasWon);

useEffect(() => {
    setShow(hasWon);
    console.log('won');
}, [hasWon])

    return (
        <Modal show={show} >
            <Modal.Header closeButton>
                 <Modal.Title>Congratulations!!</Modal.Title>
            </Modal.Header>
            <Modal.Body>You won!</Modal.Body>
            <Modal.Footer>
                <NewGame setBackDisplay={setBackDisplay} setNumOfPairs={setNumOfPairs} setShow={setShow} setIsNewGame={setIsNewGame} />
            </Modal.Footer>
      </Modal>
    );
}

export default GameOver;