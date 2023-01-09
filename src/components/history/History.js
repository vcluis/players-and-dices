import React from "react";
import getDiceFace from "../dice/DiceFaces";

const History = ({values}) => {

    const styles = {
        diceFace: {
            height: "20px",
            width: "20px",
            margin: "15px"
        }
    }

    const renderedValues = values.length === 0 ? <div>There is no available data to display!</div> : values.map((element, index) => <img key={index} src={getDiceFace(element)} style={styles.diceFace} alt="value graphic representation" />);

    return (
        <div className="row">
            <div className="col">
                {renderedValues}
            </div>
        </div>
    );
}

export default History;