import { Fragment } from "react";
import getDiceFace from "../dice/DiceFaces";

const instructionTextStyle = {
    paddingTop: "25px",
    paddingLeft: "25px",
    paddingRight: "25px",
    paddingBottom: "25px",
    fontSize: "25px"
}

const Instruction = ({index, text}) => {
    const image = getDiceFace(index);
    return (
        <Fragment>
            <tr>
                <td>
                    <img src={image} width="25" height="25" />
                </td>
                <td style={instructionTextStyle}>
                    {text}
                </td>
            </tr>
        </Fragment>
    );
}

export default Instruction;