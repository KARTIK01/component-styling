import React, {PureComponent} from 'react';
import styled from "styled-components";

let Wrapper =  styled.div`
    background: #9b9cea;
    padding: 10px;
    margin: 20px;
`;

class Level3 extends PureComponent {
    render() {
        return (
            <Wrapper>
                HELLO STYLE 3
            </Wrapper>
        );
    }
}

export default Level3;
