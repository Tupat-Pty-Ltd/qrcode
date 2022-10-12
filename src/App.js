import './App.css';
import SideBar from "./Components/SideBar";
import Layout from "./Components/Layout";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Layout/>
            </BrowserRouter>
        </div>
    );
}

export default App;
