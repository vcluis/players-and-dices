import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Dice from "./components/dice/Dice";
// import Statistic from "./components/statistic/Statistic";
import Main from "./components/screens/Main";
import Register from "./components/screens/Register";
import Play from "./components/screens/Play";

const App = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="register" element={<Register />} />
                <Route path="play" element={<Play />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;