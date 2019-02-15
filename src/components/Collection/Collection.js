import PropTypes from 'prop-types';
import React, { Component } from 'react';
import moment from 'moment';

require('./collection.scss');

class Collection extends Component {
  render() {
    return (
      <div className="collection__container">
        <a
          className="collection__link"
          target="_blank"
          href={this.props.link}
        >
          <h1
            className="collection__title"
          >
            {this.props.title}
          </h1>
          <p
            className="collection__no-files"
          >
          5 Files
          </p>
        </a>
      </div>
    );
  }
}

export default Collection;
