import React, { Component } from 'react'
import Square from './Square'
class Board extends Component {
    constructor(props){
        super(props);
        this.state ={
            squares: Array(9).fill(null)
        }
    }
    renderSquare(idx){
        return <Square value={this.state[idx]} onClick0={this.handleClick(idx)}/>
    }
    render() {
        return (
            <div>
               <div>
                    <Square value={this.state.squares[0]} />
                    <Square value={this.state.squares[1]} />
                    <Square value={this.state.squares[2]} />
                </div> 
                <div>
                    <Square value={this.state.squares[3]} />
                    <Square value={this.state.squares[4]} />
                    <Square value={this.state.squares[5]} />
                </div> 
                <div>
                    <Square value={this.state.squares[6]} />
                    <Square value={this.state.squares[7]} />
                    <Square value={this.state.squares[8]} />
                </div>  
            </div>
        )
    }
}
export default Board;