import PropTypes from 'prop-types';
import React, { Component } from 'react';
import moment from 'moment';

require('./pebl.scss');

class Pebl extends Component {
  render() {
    return (
      <div className="pebl__container">
        <a
          className="pebl__link"
          target="_blank"
          href={`https://staging.peblio.co/pebl/${this.props.id}`}
        >
          <img
            src="https://placekitten.com/200/200"
            className="pebl__image"
          />
          <h1
            className="pebl__title"
          >
            {this.props.title}
          </h1>
          <p
            className="pebl__updated"
          >
          Last Update
            {' '}
            {moment(this.props.updatedAt).format('DD/MMM/YYYY')}
          </p>
        </a>
      </div>
    );
  }
}

export default Pebl;