import React, {PureComponent} from 'react';
import styled, { css }  from "styled-components";
import ComplexComponent from "./ComplexComponent";

const COLOR = "palevioletred";

const RedButton = styled.button`
  background: ${COLOR};
  border-radius: 3px;
  border: none;
  color: white;
  width: 90px;
  height: 30px;
  margin-left: 10px;
`;

const TomatoButton = styled(RedButton)`
  background: tomato;
`;

const Button = styled.button`
    font-size : 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid ${COLOR};
    border-radius: 3px;
    color: white;
    background: ${COLOR};
    
    :hover {
        cursor : pointer;
        background: #e85d8a
    }
    
    ${props=> props.primary && css`
        background : white;
        color: ${COLOR};
        :hover {
            cursor : pointer;
            background: white;
            color: #e85d8a;
         }
    `} 
`;


const StyledComplexComponent = styled(ComplexComponent)`
  font-size : 30px;
  border: 2px solid palevioletred;
  margin: 0px auto;
  margin-top: 20px;
  width: 400px;
`;

class Level4 extends PureComponent {

    render() {
        return (
            <div>
                <RedButton >RED</RedButton>
                <TomatoButton >Tomato RED</TomatoButton>
                <Button >Option A</Button>
                <Button primary>Option B</Button>
                <StyledComplexComponent />
            </div>
        );
    }
}

export default Level4;
