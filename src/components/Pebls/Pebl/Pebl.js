import PropTypes from 'prop-types';
import React, { Component } from 'react';

require('./pebl.scss');

class Pebl extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="pebl__container">
        <h1
          className="pebl__title"
        >
          {this.props.title}
        </h1>
        <h2
          className="pebl__author"
        >
          by
          {' '}
          {this.props.author}
        </h2>
        <ul>
          {this.props.tags.map((tag, i) => (
            <li>
              {tag}
            </li>
          ))
          }
        </ul>
      </div>
    );
  }
}


export default Pebl;
