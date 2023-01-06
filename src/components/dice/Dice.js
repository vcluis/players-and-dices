import { useState } from "react";
import DiceFace from "./DiceFace";

const Dice = ({id}) => {

    const [currentValue, setCurrentValue] = useState(1);
    const [diceMoving, setDiceMoving] = useState(false);

    const swapDiceMoving = () => {
        setDiceMoving(!diceMoving);
    }

    const throwDice = () => {
        return Math.floor(Math.random() * 6) + 1;
    }

    const handleDiceMoving = e => {
        if(diceMoving){
            swapDiceMoving();
            console.log("Dice has been stoped, moving", diceMoving);
        }
        console.log("Dice is moving, moving", diceMoving);
        swapDiceMoving();
        while(diceMoving){
            setTimeout(() => {
                setCurrentValue(throwDice());
                console.log(currentValue);
            }, 700);
        }
    }

    return (
        // <Dice value={currentValue} onClick={handleDiceMoving} />
        <div onClick={handleDiceMoving}>
            <DiceFace value={currentValue} />
        </div>
    );
}

export default Dice;