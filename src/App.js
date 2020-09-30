import React from 'react';
import './style/App.css';
import Home from "./components/Home";
import DataPage from "./components/DataPage";
import Nav from "./components/Nav";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {


    return (
        <div className="App">
            <Router>
                <Nav/>
                <Switch>
                    <Route path={"/dataPage/:id"} component={DataPage}/>
                    <Route path={"/"} component={Home}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
