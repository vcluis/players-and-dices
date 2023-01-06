import React from "react";
import getDiceFace from "./DiceFaces";

const messages = [
    "Good luck for the nex time",
    "That's not a bad number",
    "Well, today i'm lucky"
];

const getMessage = (value) => {
    return messages[Math.round(value / 2) - 1];
}

/*
const fakeThrows = 5;

const throwDice = () => {
    return Math.floor(Math.random() * 6) + 1;
}
*/

const Dice = ({value}) => {
    const face = getDiceFace(value);
    const message = getMessage(value);

    return (
        <div className="card">
            <div className="card-header">You got a {value}</div>
            <div className="card-body">
                <div className="card-img">
                    <img src={face} />
                </div>
            </div>
            <div className="card-footer">
                {message}
            </div>
        </div>
    );
}

export default Dice;