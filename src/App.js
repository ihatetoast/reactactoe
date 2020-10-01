import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import ScoreBoard from './components/ScoreBoard'
import Game from './components/Game'
import gamelogoI from './images/gameboard-i.svg';
import gamelogoA from './images/gameboard-a.svg';
import gamelogoO from './images/gameboard-o.svg';
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
            <ScoreBoard />
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
