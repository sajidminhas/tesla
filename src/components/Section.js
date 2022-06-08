import React from 'react'
import styledComponents from 'styled-components'
import Fade from 'react-reveal/Fade';
function Section(props) {

    return (
        <Wrap bgImage={props.backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>{props.liftBtnText}</LeftButton>
                        {props.rightBtnText &&
                            <RightButton>{props.rightBtnText}</RightButton>
                        }
                    </ButtonGroup>
                </Fade>
                <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styledComponents.div`
width: 100vw;
height: 100vh;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-image: url("/images/model-s.jpg");
display: flex;
flex-direction: column;
justify-content: space-between; //vertial
align-items: center; // horizontal
background-image: ${props => `url("/images/${props.bgImage}")`}

`
const ItemText = styledComponents.div`
padding-top: 15vh;
text-align: center;
`
const ButtonGroup = styledComponents.div`
display: flex;
margin-bottom:20px;
@media (max-width: 768px){
    flex-direction: column;
}
`
const LeftButton = styledComponents.div`
    background-color: rgba(23, 26, 32, 0.8 );
    height: 40px;
    width: 356px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity:0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 20px;
`
const RightButton = styledComponents(LeftButton)`
background-color: white;
opacity: 0.55;
color: black;
`
const DownArrow = styledComponents.img`
margin-top: 10px;
height: 40px;
animation: animateDown infinite 1.5s ;
`
const Buttons = styledComponents.div`
`