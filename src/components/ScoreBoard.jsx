import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {Storage} from '../storage/storage'


class ScoreBoard extends Component {
    state={
        scoreboard: []
    }
    async componentDidMount(){
        let storage = await new Storage().getData();
        console.log(storage);
        this.setState({
            scoreboard: storage
        })
    }
    
    render() {
        return (
            <div>
                <h2>Game history:</h2>
                <ul>
                    {this.state.scoreboard.map((player, key) =>{
                        return <li key={key}>{player}</li>
                    })}
                </ul>
                <Link to="/game">
                    <button>Play</button>
                </Link>
            </div>
        )
    }
}


export default ScoreBoard;