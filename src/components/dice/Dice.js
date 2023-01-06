import { useState, useEffect, useRef } from "react";
import DiceFace from "./DiceFace";
import { store, movementAction } from "../../store/store";

const Dice = ({playerId}) => {

    const [currentValue, setCurrentValue] = useState(1);
    const interval = useRef();
    
    const throwDice = () => {
        return Math.floor(Math.random() * 6) + 1;
    }

    useEffect(() => {
        console.log("current value is:", currentValue);
    }, [currentValue]);

    const handleDiceRoll = e => {
        e.preventDefault();
        if(interval.current){
            clearInterval(interval.current);
            interval.current = undefined;
            store.dispatch(movementAction(playerId, currentValue));
            return;
        }
        interval.current = setInterval(() => {
            setCurrentValue(throwDice());
        }, 100);
    }

    return (
        <div onClick={handleDiceRoll}>
            <DiceFace value={currentValue} />
        </div>
    );
}

export default Dice;