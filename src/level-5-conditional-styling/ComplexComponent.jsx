import React, {Component} from 'react';

class ComplexComponent extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {};

    render() {
        return (
            <div className={this.props.className}>
                THIS IS VERY COMPLEX COMPONENT DON'T EVER TRY TO EDIT THIS
            </div>
        );
    }
}

export default ComplexComponent;
