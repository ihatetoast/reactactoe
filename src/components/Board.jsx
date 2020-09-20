import React, { Component } from 'react'
import styled from 'styled-components'
import Square from './Square'
import {checkWinner} from '../utils/helperFcns'
const StyledTitle = styled.h2`
    margin:0;
`
class Board extends Component {
    constructor(props){
        super(props);
        this.state ={
            squares: Array(9).fill(null),
            isXNext: true
        }
    }
    handleClick(idx){
        const squaresCopy = [...this.state.squares];
        squaresCopy[idx]= this.state.isXNext ? "X" : "O";
        this.setState({
            squares: squaresCopy,
            isXNext: !this.state.isXNext
        });
        checkWinner(this.state.squares);
    }
    renderSquare(idx){
        return <Square 
            value={this.state.squares[idx]}
            onClick={()=>this.handleClick(idx)}
             />
    }
    render() {
        return (
            <div>
                <StyledTitle>Next player {this.state.isXNext ? "X" : "O"}</StyledTitle>
               <div>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div> 
                <div>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div> 
                <div>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>  
            </div>
        )
    }
}
export default Board;