import React  from 'react'
import styled from 'styled-components'
import eggO from '../images/egg.png'
import eggX from '../images/friedegg.png'

const StyledButton = styled.button`
    background-color: transparent;
    background-size: contain;
    height: 12em;
    margin: 1em;
    width: 12em;
    position: relative;
    border-radius: 15%;
    border: none;
    `
function Square(props) {
    console.log(props)
    
    let egg;
    if(props.value){
       egg = props.value === "X" ? eggX : eggO;
    }

        return(
            <StyledButton 
                className="game-square" 
                onClick={props.onClick} value={props.value}
                style={{
                    backgroundImage: 'url('+egg+')',
                         }}
                >
                
            </StyledButton>
        )
    
}
export default Square;
