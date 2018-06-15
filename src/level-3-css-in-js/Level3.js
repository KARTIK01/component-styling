import React, {PureComponent} from 'react';
import styled from "styled-components";

let StyledButton =  styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    color: white;
    background: palevioletred;
`;

class Level3 extends PureComponent {
    render() {
        return (
            <StyledButton>
                Styled Button
            </StyledButton>
        );
    }
}

export default Level3;
