import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    height : 100vh
`;


const keyPoints = [
    [
        "Inline Style",
        "Camel Casing",
        "Style code reusability",
        "On Boarding people from different backgrounds"
    ],
    [
        "Have to maintain bunch of style sheet",
        "Separation Of Concerns",
        "Not a component driven framework"
    ],
    [
        "Thinking in components",
        "Variable sharing between css and js",
        "Dead code elimination",
        "Unit tests for CSS!",
        "Learning curve.",
        "New dependencies."
    ],
    [

    ],
];


const COLOR = "#9b9cea";

let Wrapper =  styled.div`
    background: ${COLOR}; 
    padding: 10px;
    margin: 20px;
`;

function LevelWrapper({level, children}) {
    return (
        <StyledDiv>
            <Wrapper>
            {children}
            </Wrapper>
            {
                keyPoints[level].length > 0 && <ul style={{textAlign: "left", fontSize: 22, fontFamily: "-webkit-pictograph"}}>
                    {
                        keyPoints[level].map(item => <li>{item}</li>)
                    }
                </ul>
            }

        </StyledDiv>
    );
}

LevelWrapper.propTypes = {};
LevelWrapper.defaultProps = {};

export default LevelWrapper;
