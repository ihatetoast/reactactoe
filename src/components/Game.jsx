import React, {Component, Fragment} from 'react'
// import { Link } from 'react-dom'
// import {Storage} from './../storage/storage'
import Board from './Board'
import styled from 'styled-components'
// import * as helpers from '../utils/helperFcns'
// https://blog.alexdevero.com/how-to-build-simple-tic-tac-toe-game-with-react/

// https://github.com/kelanwu/react-tic-tac-toe/blob/master/src/index.js

const StyledTitle = styled.h2`
    margin:0;
`
class Game extends Component {
    
    handleClick(idx){
        console.log(`I clicked ${idx}`);
    }
    
    // storage = new Storage();
    render(){
        return(
            <Fragment>
            <div>
                {/* <Link to="/" className="toHome-link">Go back to scores and leaderboard</Link>*/}
                <StyledTitle>Player such-n-such's turn</StyledTitle>        
            </div>
            <div>
                <Board />        
            </div>
                
            </Fragment>
        )
    }
}

export default Game;
