import React from "react";
import {RouterProvider, Routes, Route} from "react-router/dist";
import Dice from "./components/dice/Dice";
import Statistic from "./components/statistic/Statistic";
import Main from "./components/screens/Main";
import Register from "./components/screens/Register";
import Play from "./components/screens/Play";
// import { RouterProvider } from "react-router/dist";

const App = () => {
    return (
        <RouterProvider>
            <Routes>
                <Route element={<Main />} path="/" exact />
                <Route element={<Register />} path="/register" />
                <Route element={<Play />} path="/play" />
            </Routes>
        </RouterProvider>
    );
}

export default App;