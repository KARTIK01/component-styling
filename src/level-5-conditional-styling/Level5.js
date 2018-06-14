import React, {PureComponent} from 'react';
import styled from "styled-components";
import ComplexComponent from "./ComplexComponent";

const COLOR = "#9b9cea";

let Wrapper =  styled.div`
    background: ${COLOR}; 
    padding: 10px;
    margin: 20px;
`;

let Text = styled.h1`
     background: #ca7c7c;
     color: ${props => props.color};          
     :hover {
         background: aliceblue;
         color: black;
         cursor: pointer; 
     }
`;


const Button = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
  width: 90px;
  height: 30px;
  margin-left: 10px;
`;

const TomatoButton = styled(Button)`
  background: tomato;
`;

const StyledComplexComponent = styled(ComplexComponent)`
  padding-top : 20px
  font-size : 30px
`;

class Level5 extends PureComponent {

    render() {
        return (
            <Wrapper>
                <Text color="red">HELLO FROM RED</Text>
                <Text color="blue">HELLO FROM BLUE</Text>
                <Button >RED</Button>
                <TomatoButton >Tomato RED</TomatoButton>
                <StyledComplexComponent />
            </Wrapper>
        );
    }
}

export default Level5;
