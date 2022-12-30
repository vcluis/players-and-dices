import { Fragment } from "react";
import getDiceFace from "../dice/DiceFaces";

const Instruction = ({number, text}) => {
    const image = getDiceFace(number);
    return (
        <Fragment>
            <img src={image} width="15" height="15" />
            <div>{text}</div>
        </Fragment>
    );
}

export default Instruction;