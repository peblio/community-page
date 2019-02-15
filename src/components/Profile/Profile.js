import PropTypes from 'prop-types';
import React, { Component } from 'react';
import moment from 'moment';

require('./profile.scss');

class Profile extends Component {
  render() {
    return (
      <div className="profile__container">
        <a
          className="profile__link"
          target="_blank"
          href={this.props.link}
        >
          <img
            src={this.props.image}
            className="profile__image"
          />
          <h1
            className="profile__title"
          >
            {this.props.name}
          </h1>
        </a>
      </div>
    );
  }
}

export default Profile;
