import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Square from './Square'
import * as utils from '../utils/helperFcns'
import {Storage} from './../storage/storage'

const StyledStatus = styled.p`
    margin: 0.3em;
    font-size: 1.5em;
    letter-spacing: 3px;
`;
const StyledBoard = styled.div`
    display:inline-flex;
    flex-direction:column;
    flex:1;
    align-items: center;
    justify-content: center;
    background-image:url('./../images/tictactoeBoard_lg.svg');
    background-color: #044fd9;
    background-repeat:no-repeat;
    background-size: cover;
`;
const StyledRow = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    
`;
class Board extends Component {
    constructor(props){
        super();
        this.state ={
            squares: Array(9).fill(null),
            history:[],
            isXNext: true
        }
        
    }
    
    handleClick(idx){
        // copy squares arr
        const squaresCopy = this.state.squares.slice();
        // copy history
        const history = this.state.history;
        // check for winner or that the square has already been clicked:
        const isWinner = utils.checkWinner(squaresCopy);
        const isFull = utils.checkBoard(squaresCopy);
        if( isWinner || squaresCopy[idx] || isFull){
            return;
        }
        // set el of arr at the index to x or o
        squaresCopy[idx]= this.state.isXNext ? "X" : "O";
        this.setState({
            squares: squaresCopy,
            isXNext: !this.state.isXNext, 
            history: history
        });
        
    }
    renderSquare(idx){
        let bgImg;
        if(this.state.squares[idx]){
             bgImg = this.state.isXNext === "X" ? "eggO" : "eggX";
        } else{
             bgImg =''
        }
        return <Square 
            value={this.state.squares[idx]}
            onClick={()=>this.handleClick(idx)}
            bg={bgImg}
             />
    }
    render() {
     
        const winningPlayer = utils.checkWinner(this.state.squares);
        const isFull = utils.checkBoard(this.state.squares);
        let status;
        if(winningPlayer){
            status = `Player ${winningPlayer} won!`
        } else if(!winningPlayer && isFull){
            status = "It's a draw."
        }
        else{
            status = `Player ${this.state.isXNext ? 'X' : 'O'}'s turn.`
        }

        return (
            <div>
                <div>
                  <StyledStatus>{status}</StyledStatus>  
                </div>
                <StyledBoard style={{
                    backgroundImage: 'url(' + require('./../images/tictactoeBoard_lg.svg') + ')',
                         }}>
                     <StyledRow>
                            {this.renderSquare(0)}
                            {this.renderSquare(1)}
                            {this.renderSquare(2)}
                        </StyledRow> 
                        <StyledRow>
                            {this.renderSquare(3)}
                            {this.renderSquare(4)}
                            {this.renderSquare(5)}
                        </StyledRow> 
                        <StyledRow>
                            {this.renderSquare(6)}
                            {this.renderSquare(7)}
                            {this.renderSquare(8)}
                        </StyledRow>
                </StyledBoard>
            </div>
        )
    }
}
export default Board;