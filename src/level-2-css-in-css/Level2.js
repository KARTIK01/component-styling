import React, {PureComponent} from 'react';
import './main.css';

class Level2 extends PureComponent {
    render() {
        return (
            <div>
                <button className="buttonstyle">
                    Styling Using Class
                </button>
                <button className="buttonstyle primary">
                    Styling Using Class
                </button>
            </div>
        );
    }
}

export default Level2;
