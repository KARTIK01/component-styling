import React, {Component} from 'react';

class ComplexComponent extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {};

    render() {
        return (
            <div className={this.props.className}>
                SOME UI LIB COMPONENT
            </div>
        );
    }
}

export default ComplexComponent;
