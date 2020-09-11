import React, {Component, Fragment} from 'react'
import { Link } from 'react-dom'
// import {Storage} from './../storage/storage'
// import Board from './Board'
import Square from './Square'

import * as helpers from '../utils/helperFcns'
// https://blog.alexdevero.com/how-to-build-simple-tic-tac-toe-game-with-react/

// https://github.com/kelanwu/react-tic-tac-toe/blob/master/src/index.js
class Game extends Component {
    constructor(props){
        super(props)
        this.state={
            squares: Array(9).fill(null),
            xNext: true, 
            turns: [],

        }
    }
    handleClick(idx){
        console.log(`I clicked ${idx}`);
    }
    
    // storage = new Storage();
    render(){
        return(
            <Fragment>
                {/* <Link to="/" className="toHome-link">Go back to scores and leaderboard</Link>*/}
                <h2>Player such-n-such's turn</h2>
                <div>
                <Square value={this.state.squares[0]} onClick={() => this.handleClick(0)} />
                <Square value={this.state.squares[1]} onClick={() => this.handleClick(1)} />
                <Square value={this.state.squares[2]} onClick={() => this.handleClick(2)} />
                </div> 
            </Fragment>
        )
    }
}

export default Game;
