import PropTypes from 'prop-types';
import React, { Component } from 'react';

// require('./pebl.scss');

class Pebl extends Component {
  render() {
    console.log(this.props.studioPages);
    return (
      <div>
        {this.props.title}
        {this.props.author}
        {this.props.tags}
      </div>
    );
  }
}


export default Pebl;
