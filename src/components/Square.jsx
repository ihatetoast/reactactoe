import React  from 'react'
import styled from 'styled-components'
import eggO from '../images/egg.png'
import eggX from '../images/friedegg.png'

const StyledButton = styled.div`
    background-color: transparent;
    background-size: contain;
    height: 10em;
    margin: 1em;
    width: 10em;
    position: relative;
    border-radius: 15%;
    border: none;
    `
function Square(props) {
    
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
