import './App.css';
import Page from './Page';
import Header from './Header';

function App() {
    return (
        <div className="w-screen flex flex-col items-center gap-4 mt-4">
            <Header />
            <Page />
            <h2>bottom</h2>
        </div>
    );
}

export default App;