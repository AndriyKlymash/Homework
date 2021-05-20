import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import React from "react";
import Counter from "./Components/Counter/Counter";

//Зробити компоненту Counter, в якій будуть кнопки +1, -1, +100, -100.
// Де Counter це окрема компонента, на яку ми попадаємо через роути.
// Функція reducer винесена в окремий файл!


function App() {
    return (
        <Router>
            <div className="App">

                <Link to={'counter'}>Counter</Link>
                <Switch>
                    <Route path={'/counter'} component={Counter}/>
                </Switch>

            </div>
        </Router>
    );
}

export default App;
