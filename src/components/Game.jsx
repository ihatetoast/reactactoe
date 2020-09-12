import React, {Component, Fragment} from 'react'
import { Link } from 'react-dom'
// import {Storage} from './../storage/storage'
// import Board from './Board'
import Square from './Square'
import styled from 'styled-components'
import * as helpers from '../utils/helperFcns'
// https://blog.alexdevero.com/how-to-build-simple-tic-tac-toe-game-with-react/

// https://github.com/kelanwu/react-tic-tac-toe/blob/master/src/index.js

const StyledTitle = styled.h2`
    margin:0;
`
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
                <StyledTitle>Player such-n-such's turn</StyledTitle>
                <div>
                    <Square value={this.state.squares[0]} onClick={() => this.handleClick(0)} />
                    <Square value={this.state.squares[1]} onClick={() => this.handleClick(1)} />
                    <Square value={this.state.squares[2]} onClick={() => this.handleClick(2)} />
                </div> 
                <div>
                    <Square value={this.state.squares[3]} onClick={() => this.handleClick(3)} />
                    <Square value={this.state.squares[4]} onClick={() => this.handleClick(4)} />
                    <Square value={this.state.squares[5]} onClick={() => this.handleClick(5)} />
                </div> 
                <div>
                    <Square value={this.state.squares[6]} onClick={() => this.handleClick(6)} />
                    <Square value={this.state.squares[7]} onClick={() => this.handleClick(7)} />
                    <Square value={this.state.squares[8]} onClick={() => this.handleClick(8)} />
                </div> 
            </Fragment>
        )
    }
}

export default Game;
