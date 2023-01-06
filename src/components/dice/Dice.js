import { clear } from "@testing-library/user-event/dist/clear";
import { useState, useEffect, useRef } from "react";
import DiceFace from "./DiceFace";

const Dice = ({id}) => {

    const [currentValue, setCurrentValue] = useState(1);
    const [diceMoving, setDiceMoving] = useState(false);
    const [newInterval, setNewInterval] = useState(null);

    const swapDiceMoving = () => {
        setDiceMoving(!diceMoving);
    }

    const throwDice = () => {
        return Math.floor(Math.random() * 6) + 1;
    }

    // let interval = null;
    // const setNewRandomValue = e => {
    //     e.preventDefault();
    //     if(interval !== null){
    //         clearInterval(interval);
    //         interval = null;
    //         return;
    //     }
    //     if(interval === null){
    //         interval = setInterval(() => {
    //             setCurrentValue(throwDice());
    //         }, 1000);
    //     }
    // }

    useEffect(() => {
        console.log("current value is:", currentValue);
    }, [currentValue]);

    // const setNewRandomValue = e => {
    //     console.log("newInterval state:", newInterval);
    //     e.preventDefault();
    //     if(newInterval !== null){
    //         setNewInterval(null);
    //         return;
    //     }
    //     newInterval = setInterval(() => {
    //         setCurrentValue(throwDice());
    //         if(newInterval === null){
    //             console.log("exiting", newInterval);
    //             return;
    //         }
    //     }, 1000);
    // }

    // const stopInterval = e => {
    //     e.preventDefault();
    //     setNewInterval(null);
    // }

    // another try IT WORKS
    // const interval = useRef();
    // const setNewRandomValue = e => {
    //     e.preventDefault();
    //     interval.current = setInterval(() => {
    //         setCurrentValue(throwDice());
    //     }, 1000);
    // }

    // const stopInterval = e => {
    //     e.preventDefault();
    //     clearInterval(interval.current);
    // }
    // end IT WORKS

    const interval = useRef();
    const setNewRandomValue = e => {
        e.preventDefault();
        interval.current = setInterval(() => {
            setCurrentValue(throwDice());
        }, 1000);
    }

    const stopInterval = e => {
        e.preventDefault();
        clearInterval(interval.current);
    }

    const handleDiceRoll = e => {
        console.log("interval:", interval);
        e.preventDefault();
        if(interval.current){
            clearInterval(interval.current);
            interval.current = undefined;
            return;
        }
        interval.current = setInterval(() => {
            setCurrentValue(throwDice());
        }, 1000);
    }

    return (
        <div onClick={handleDiceRoll}>
            <DiceFace value={currentValue} />
            {/* <button type="submit" className="btn btn-info" onClick={setNewRandomValue}>Roll dice</button>
            <button type="submit" className="btn btn-danger" onClick={stopInterval}>Stop!</button> */}
        </div>
    );
}

export default Dice;