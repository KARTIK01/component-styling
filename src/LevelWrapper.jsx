import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    height : 100vh
`;


const keyPoints = [
    [
        "Inline Style"
    ],
    [
        "Have to maintain bunch of style sheet",
        "Separation Of Concerns",
        "Not a component driven framework"
    ],
    [
        ""
    ],
    [
        ""
    ],
    [
        ""
    ],
    [
        ""
    ],
    [
        ""
    ],
];

function LevelWrapper({level, children}) {
    return (
        <StyledDiv>
            <div>
            {children}
            </div>
            <ul>
                {
                    keyPoints[level].map(item => <ul>{item}</ul>)
                }
            </ul>
        </StyledDiv>
    );
}

LevelWrapper.propTypes = {};
LevelWrapper.defaultProps = {};

export default LevelWrapper;
