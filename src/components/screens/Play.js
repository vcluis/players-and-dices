import { store, movementAction } from "../../store/store";
import Dice from "../dice/Dice";

const styles = {
    playerName: {
        fontSize: "36px"
    }
}

const Play = () => {

    const firstPlayerName = store.getState()[0].name;
    const secondPlayerName = store.getState()[1].name;

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div style={styles.playerName}>
                        {firstPlayerName}
                        <Dice />
                    </div>
                </div>
                <div className="col-md-6">
                    <div style={styles.playerName}>
                        {secondPlayerName}
                        <Dice />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Play;