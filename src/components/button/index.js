import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {

    submitEvent = () => {
        if(this.props.emitEvent){
            this.props.emitEvent();
        }
    }

    render(){
        const { text } = this.props;
        return(
            <button data-test='buttonComponent' onClick={this.submitEvent}>
                {text}
            </button>
        )
    }
}

Button.propTypes = {
    text: PropTypes.string,
    emitEvent: PropTypes.func
};

export default Button;