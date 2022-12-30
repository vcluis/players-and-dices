import React from "react";
import Dice from "./components/dice/Dice";
import Statistic from "./components/statistic/Statistic";

const App = () => {
    return (
        <div>
            <Dice value={1} />
            <Dice value={3} />
            <Dice value={6} />
            <Statistic name="new player" values={[1, 2, 3, 6, 1]} />
        </div>
    );
}

export default App;