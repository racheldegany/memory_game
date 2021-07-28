import React from 'react';

function NewGame({setBackDisplay, setNumOfPairs, setShow, setIsNewGame}) {
    const options = {cards: 6, background: 0};

    const saveOptions = () => {
        setBackDisplay(options.background);
        setNumOfPairs(options.cards);
        setShow(false);
        setIsNewGame(true);

        
    }

    return (
        <div className="d-flex flex-column align-items-center">
            <h2>Choose difficulty:</h2>
            <div>
                <button onClick={() => options.cards = 6}>Easy</button>
                <button onClick={() => options.cards = 9}>Medium</button>
                <button onClick={() => options.cards = 12}>Hard</button>
            </div>
            <h2>Choose background</h2>
            <div>
                <button onClick={() =>options.background = 0}>pic1</button>
                <button onClick={() => options.background = 1}>pic2</button>
                <button onClick={() => options.background = 2}>pic3</button>
            </div>
            <button onClick={saveOptions}>Start new game</button>
        </div>
    );
}

export default NewGame;