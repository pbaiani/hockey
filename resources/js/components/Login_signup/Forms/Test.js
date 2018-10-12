import React, { Component } from 'react';
import PropTypes from 'prop-types';



const Test = props => {

console.log('called from test:',  props.getCurrentState());

return (

    <div>hi</div>
)

}


export default Test