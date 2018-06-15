import React, {PureComponent} from 'react';

const buttonStyle = {
    fontSize: "1em",
    margin: "1em",
    padding: "0.25em 1em",
    border: "2px solid palevioletred",
    borderRadius: 3,
    color: "white",
    background: "palevioletred"
};


class Level1 extends PureComponent {
    render() {
        return (
            <button style={buttonStyle}>
                Inline Style Button
            </button>
        );
    }
}

export default Level1;
