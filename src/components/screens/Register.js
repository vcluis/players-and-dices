import { useState } from "react";
import { Link } from "react-router-dom";
import Player from "../player/Player";

const styles = {
    mainText: {
        fontSize: "48px"
    },
    informationText: {
        fontSize: "18px"
    }
}

const Register = () => {

    let buttonText = "default text";
    
    const checkPlayers = () => {
        setTimeout(() => {
            buttonText = "updated text";
        }, 180);
        console.log(buttonText);
    }


    let [buttonClasses, setButtonClasses] = useState("btn btn-warning disabled");

    const updateButtonClasses = () => {
        setTimeout(() => {
            setButtonClasses("btn btn-warning");
        });
    }

    return (
        <div className="container mt-5 mb-5">
            <div style={styles.mainText}>Enter players information</div>
            <div className="row">
                <div className="col-md-6">
                    <div style={styles.informationText}>First player information</div>
                    <Player id={0} />
                </div>
                <div className="col-md-6">
                    <div style={styles.informationText}>Second player information</div>
                    <Player id={1} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="text-center">
                        <Link to="/play" disabled className="btn btn-warning text-white">Play!</Link>
                    </div>
                </div>
            </div>
            {/* <button type="submit" className="btn btn-secondary" onClick={checkPlayers}>{buttonText}</button> */}
            <button type="submit" className={buttonClasses}>I'm a button</button>
            <button type="submit" className="btn btn-primary" onClick={updateButtonClasses}>Update another button classe</button>
        </div>
    );
}

export default Register;