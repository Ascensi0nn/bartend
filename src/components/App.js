import './App.css';
import Home from '../pages/Home';
import Drink from '../pages/Drink'

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route path={'/'} element={<Home />}></Route>
                <Route path="/drink" element={<Drink />}></Route>
            </Routes>
        </Router>
    );
}

export default App;