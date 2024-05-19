import './App.css';
import Home from './Page';
import Drink from '../pages/Drink'

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path={'/'} element={<Home />}></Route>
                    <Route path="/drink" element={<Drink />}></Route>
                </Routes>
            </Router>
        </div>

    );
}

export default App;