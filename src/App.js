import React from 'react'
import './App.css';
import Nav from './components/Nav'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CurrentWeather from "./components/CurrentWeather";
import FutureWeather from "./components/FutureWeather";
import Home from "./components/Home";

function App() {
    return (
        <Router>
            <div className='container'>
                <Nav/>
                <React.Suspense fallback={() => <h1>Loading</h1>}>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/CurrentWeather' component={CurrentWeather}/>
                        <Route exact path='/FutureWeather' component={FutureWeather}/>
                        <Route render={() => <h1>404</h1>}/>
                    </Switch>
                </React.Suspense>
            </div>
        </Router>

    );
}

export default App;
