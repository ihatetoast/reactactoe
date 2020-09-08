import React, {Component} from 'react'
import { Link } from 'react-dom'
import {Storage} from './../storage/storage'
import Square from './Square'

import * as helpers from '../utils/helperFcns'
// https://blog.alexdevero.com/how-to-build-simple-tic-tac-toe-game-with-react/÷
export default class Game extends Component {
    constructor(props){
        super(props)
        this.state={
            squares: Array(9).fill(null),
            xNext: true, 
            turns: [],

        }
    }
    storage = new Storage();
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
