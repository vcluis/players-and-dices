import { Fragment } from "react";
import Instruction from "./Instruction";

const playerInstructions = [
    "Chose your side",
    "Enter your name",
    "Throw dices",
    "Good luck & Enjoy"
];

const Instructions = () => {

    const renderedInstructions = playerInstructions.map((element, index) => <Instruction key={index} index={index + 1} text={element} />);

    return (
        <Fragment>
            <h1>Instructions</h1>
            <table>
                <tbody>
                    {renderedInstructions}
                </tbody>
            </table>
        </Fragment>
    );
}

export default Instructions;