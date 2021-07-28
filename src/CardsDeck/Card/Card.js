import React, { useEffect, useState } from 'react';
import './Card.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faBicycle, faBroom, faCameraRetro, faCarrot, faChessQueen, faBahai, faBowlingBall, faCandyCane, faCloudRain, faCookieBite, faDragon} from '@fortawesome/free-solid-svg-icons';

function Card({id,
    card,
    flippedIndexes,
    setFlippedIndexes}) {
    const frontDisplay = [faCoffee, faBicycle, faBroom, faCameraRetro, faCarrot, faChessQueen, faBowlingBall, faCandyCane, faCloudRain, faCookieBite, faDragon];
    const back = [faBahai];
    const [display, setDisplay] = useState(back[card.background]);
    const [isFlipped, setIsFlipped] = useState(false);

    
    useEffect(()=>{
        if (flippedIndexes.length === 0 && isFlipped === true && card.flipped === false) {
            setTimeout(() => {
              setIsFlipped(false);
              setDisplay(back[card.background])
            }, 1000)}
    } ,[flippedIndexes]);

    const onCardClick = () => {
        if (!card.flipped && flippedIndexes.length < 2 && flippedIndexes.indexOf(id) < 0) {
            setIsFlipped(true);
            setDisplay(frontDisplay[card.type])
            const newIndexes = [...flippedIndexes]
            newIndexes.push(id)
            setFlippedIndexes(newIndexes)
        } 
    }

    return (
        <div className={`Card col-4 col-lg-3`} onClick={onCardClick}>
            <FontAwesomeIcon icon={display} type={card.type} size="5x"/>
        </div>
    );
}

export default Card;