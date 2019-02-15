import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as featuredPebls from '../../../constants/featureConstants.js';
import Profile from '../../Profile/Profile';

require('./profiles.scss');

class Profiles extends Component {
  renderPebls(profiles) {
    return (
      <ul className="featured__list">
        {profiles.map((profile, i) => (
          <li
            key={`profile-${i}`}
            className="featured-profiles__profile"
          >
            <Profile
              key={`profile-${i}`}
              name={profile.name}
              // updatedAt={pebl.updatedAt}
              id={profile.id}
              image={profile.image}
            />
          </li>
        ))
        }
      </ul>
    );
  }

  render() {
    return (
      <div className="featured__sub-container">
        <h2
          className="featured__heading"
        >
        Featured Creators
        </h2>
        <div>
          {this.renderPebls(featuredPebls.PROFILES)}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // tagName: state.tag.name,
    // studioPebls: state.tag.pebls,
    // totalPebls: state.tag.totalPebls
  };
}
const mapDispatchToProps = dispatch => bindActionCreators({
  // setTagName,
  // getPeblsFromTag
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profiles);
