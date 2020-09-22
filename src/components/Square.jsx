import React  from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
        border:1px solid #044fd9;
        background:transparent;
        height:12em;
        margin: 1em;
        width: 12em;
        position: relative;
        span{
            position:absolute;
        }
        `


function Square(props) {


        return(
            <StyledButton className="game-square" onClick={props.onClick}>
                <span>{props.value}</span>    
            </StyledButton>
        )
    
}
export default Square;
