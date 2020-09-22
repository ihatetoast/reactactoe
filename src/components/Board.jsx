import React, { Component } from 'react'
import styled from 'styled-components'
import Square from './Square'
import * as utils from '../utils/helperFcns'
const StyledStatus = styled.p`
`;
const StyledBoard = styled.div`
background-image:url('../tictactoeBoard_sm.svg');
    ${'' /* background: rebeccapurple; */}
    display:inline-flex;
    flex-direction:column;
    flex:1;
    align-items: center;
    justify-content: center;
    
`;
const StyledRow = styled.div`

    display:flex;
    align-items: center;
    justify-content: center;
    
`;
class Board extends Component {
    constructor(props){
        super(props);
        this.state ={
            squares: Array(9).fill(null),
            isXNext: true
        }
    }
    handleClick(idx){
        // copy squares arr
        const squaresCopy = [...this.state.squares];
        // check for winner or that the square has already been clicked:
        if(utils.checkWinner(squaresCopy) || squaresCopy[idx]){
            return;
        }
        // set el of arr at the index to x or o
        squaresCopy[idx]= this.state.isXNext ? "X" : "O";
        this.setState({
            squares: squaresCopy,
            isXNext: !this.state.isXNext
        });
    }
    renderSquare(idx){
        return <Square 
            value={this.state.squares[idx]}
            onClick={()=>this.handleClick(idx)}
             />
    }
    render() {
     
        const winningPlayer = utils.checkWinner(this.state.squares);
        let status;
        if(winningPlayer){
            status = `Player ${winningPlayer} won!`
        } else{
            status = `Player ${this.state.isXNext ? 'X' : 'O'}'s turn.`
        }

        return (
            <div>
                <div>
                  <StyledStatus>{status}</StyledStatus>  
                </div>
                <StyledBoard>
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