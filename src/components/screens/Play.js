import { useState } from "react";
import { store } from "../../store/store";
import Dice from "../dice/Dice";
import History from "../history/History";

const styles = {
    playerName: {
        fontSize: "36px"
    }
}

const Play = () => {

    const [players, setPlayers] = useState({
        firstPlayer: store.getState()[0],
        secondPlayer: store.getState()[1]
    });

    const updatePlayersHistory = () => {
        setPlayers({
            firstPlayer: store.getState()[0],
            secondPlayer: store.getState()[1]
        });
    }
    
    store.subscribe(() => {
        updatePlayersHistory();
    });
    
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <div className="text-center" style={styles.playerName}>
                        {players.firstPlayer.name}
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <div className="text-center">
                                <Dice playerId={players.firstPlayer.id} />
                            </div>
                        </div>
                    </div>
                    Number of throws: {players.firstPlayer.values.length}
                    <History values={players.firstPlayer.values} />
                </div>
                <div className="col-md-6">
                    <div className="text-center" style={styles.playerName}>
                        {players.secondPlayer.name}
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <Dice playerId={players.secondPlayer.id} />
                        </div>
                    </div>
                    Number of throws: {players.secondPlayer.values.length}
                    <History values={players.secondPlayer.values} />
                </div>
            </div>
        </div>
    );
}

export default Play;