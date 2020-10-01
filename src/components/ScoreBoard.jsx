import React, {Component} from 'react'
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
                I am the dude
            </div>
        )
    }
}


export default ScoreBoard;