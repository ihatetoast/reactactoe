import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
        background: #044fd9;
        border-radius: 3px;
        border: none;
        height:12em;
        margin: 1em;
        width:12em;
        `
const Square = (props) =>{
    
    return(
        <StyledButton className="game-square" onClick={props.handleClick}>{props.val} </StyledButton>
    )
};

export default Square;