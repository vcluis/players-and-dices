import { store, movementAction } from "../../store/store";
import Dice from "../dice/Dice";

const styles = {
    playerName: {
        fontSize: "36px"
    }
}

const Play = () => {

    const firstPlayer = store.getState()[0];
    const secondPlayer = store.getState()[1];

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div style={styles.playerName}>
                        {firstPlayer.name}
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <Dice playerId={firstPlayer.id} />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div style={styles.playerName}>
                        {secondPlayer.name}
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <Dice playerId={secondPlayer.id} />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Play;