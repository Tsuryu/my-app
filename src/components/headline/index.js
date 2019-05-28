import React, { Component } from 'react';
import './style.scss';
import PropTypes from 'prop-types';

class Headline extends Component {
    render(){
        const { header, description: desc } = this.props;

        if(!header){
            return null;
        }

        return (
            <div data-test="wrapper">
                <h1 data-test="header">{header}</h1>
                <p data-test="description">{desc}</p>
            </div>
        )
    }
} 

Headline.propTypes = {
    header: PropTypes.string,
    description: PropTypes.string
}

export default Headline;