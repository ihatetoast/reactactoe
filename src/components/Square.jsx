import React from 'react'

const Square = (props) =>{
    return(
        <button className="game-square" onClick={props.handleClick}>{props.val}</button>
    )
};

export default Square;