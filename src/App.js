import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import LandingPage from './components/LandingPage'
import Game from './components/Game'
import gamelogoI from './gameboard-i.svg';
import gamelogoA from './gameboard-a.svg';
import gamelogoO from './gameboard-o.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>T<img src={gamelogoI} className="App-logo" alt="tictactoe board" />cT<img src={gamelogoA} className="App-logo" alt="tictactoe board" />cT<img src={gamelogoO} className="App-logo" alt="tictactoe board" />e</h1>

      </header>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/game">
            <Game />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
