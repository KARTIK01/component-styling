import React, {PureComponent} from 'react';
import styled from "styled-components";

let Wrapper =  styled.div`
    background: #9b9cea;
    padding: 10px;
    margin: 20px;
`;

let Text = styled.h1`
     color: white;
     background: #ca7c7c;
    
     :hover {
         background: aliceblue;
         color: black;
         cursor: pointer; 
     }
     
     @media (max-width: 700px) {
         background: #20d056;
     }
`;

class Level4 extends PureComponent {
    render() {
        return (
            <Wrapper>
                <Text>HELLO STYLE 4</Text>
            </Wrapper>
        );
    }
}

export default Level4;
