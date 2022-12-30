import firstFace from "./../../assets/img/dice/f1.png";
import secondFace from "./../../assets/img/dice/f2.png";
import thirdFace from "./../../assets/img/dice/f3.png";
import fourthFace from "./../../assets/img/dice/f4.png";
import fifthFace from "./../../assets/img/dice/f5.png";
import sixthFace from "./../../assets/img/dice/f6.png";

const diceFaces = [
    firstFace,
    secondFace,
    thirdFace,
    fourthFace,
    fifthFace,
    sixthFace
]

const getDiceFace = (value) => {
    return diceFaces[value - 1];
}

export default getDiceFace;