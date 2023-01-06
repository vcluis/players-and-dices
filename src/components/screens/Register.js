import { useState } from "react";
import { Link } from "react-router-dom";
import { store } from "../../store/store";
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

    const [playButtonClasses, setPlayButtonClasses] = useState("btn btn-success disabled");

    const handlePlayButtonClasses = () => {
        const currentState = store.getState();
        if(currentState[0].name !== "" && currentState[1].name !== "")
            setPlayButtonClasses("btn btn-success");
    }

    store.subscribe(handlePlayButtonClasses);

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
                        <Link to="/play" className={playButtonClasses}>Play!</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;