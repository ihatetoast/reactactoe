import React, { Component } from 'react'
import Square from './Square'
class Board extends Component {
    renderSquare(idx){
        return(
            <Square key={idx} value={this.state.squares[idx]} />
        )
    }
    render() {
        const gridSize = 3;
        let squares = [];
        for (let i = 0; i<gridSize; ++i){
            let row = [];
            for (let j = 0; j< gridSize; ++j){
                row.push(this.renderSquare(i * gridSize + j))
            }
            squares.push(<div key={i} className="grid-row">{row}</div>)
        }
        return (
            <div>
              {squares}
            </div>
        )
    }
}
export default Board

