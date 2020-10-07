import React from 'react';
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

            <Game />

    </div>
  );
}

export default App;
