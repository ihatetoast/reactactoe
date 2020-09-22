import React, {Component, Fragment} from 'react'
// import { Link } from 'react-dom'
// import {Storage} from './../storage/storage'
import Board from './Board'

// https://blog.alexdevero.com/how-to-build-simple-tic-tac-toe-game-with-react/

// https://github.com/kelanwu/react-tic-tac-toe/blob/master/src/index.js


class Game extends Component {
 
    // storage = new Storage();
    render(){
        return(
            <Fragment>
            <div>
                {/* <Link to="/" className="toHome-link">Go back to scores and leaderboard</Link>*/}      
            </div>
            <div>
                <Board />        
            </div>
                
            </Fragment>
        )
    }
}

export default Game;
