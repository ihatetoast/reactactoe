import React, { Component }  from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
        background: #044fd9;
        border-radius: 3px;
        border: none;
        height:12em;
        margin: 1em;
        width:12em;
        `


function Square() {


        return(
            <StyledButton 
            className="game-square" 
            onClick={this.props.onClick()}>{this.props.value} </StyledButton>
        )
    
}
export default Square;
