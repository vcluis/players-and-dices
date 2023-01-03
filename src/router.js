import {createBrowserRouter, createRoutesFromElements, Route} from "react-router";

import Dice from "./components/dice/Dice";
import Statistic from "./components/statistic/Statistic";
import Main from "./components/screens/Main";
import Register from "./components/screens/Register";
import Play from "./components/screens/Play";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Main />} >
            <Route path="register" element={<Register />} />
            <Route path="play" element={<Play />} />
        </Route>
    )
);

export default router;