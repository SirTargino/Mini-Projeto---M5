import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../../screens/home/Home.jsx";
import Online from "../../screens/OnlineLearn/Online.jsx";
import Presencial from "../../screens/PresencialLearn/Presencial.jsx";
import AllLearn from "../../screens/AllLearn/Alllearn.jsx";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route element={<Presencial/>} path="/learn-presencial" />
                <Route element={<AllLearn/>} path="/learn-all" />
                <Route element={<Online/>} path="/learn-online" />
            </Routes>
        </BrowserRouter>
    )
}