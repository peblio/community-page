import PropTypes from 'prop-types';
import React, { Component } from 'react';

require('./pebl.scss');

class Pebl extends Component {
  render() {
    return (
      <div className="pebl__container">
        <img
          src="https://placekitten.com/200/200"
          className="pebl__image"
        />
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
        <ul
          className="pebl__tag-list"
        >
          {this.props.tags.map((tag, i) => (
            <li
              key={`tag-${i}`}
              className="pebl__tag"
            >
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
