import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Collection from '../Collection/Collection';
import Pebl from '../Pebl/Pebl';
import Profile from '../Profile/Profile';
import SimpleSlider from './SimpleSlider/SimpleSlider';
import * as FeaturedConstants from '../../constants/featureConstants.js';

require('./featured.scss');

class Featured extends Component {
  constructor(props) {
    super(props);
  }

  renderCollections(collections) {
    const newCollections = [];
    console.log(collections);
    collections.map((collection, i) => {
      newCollections.push(
        <li
          key={`collection-${i}`}
          className="featured-collections__collection"
        >
          <Collection
            key={`collection-${i}`}
            title={collection.title}
            id={collection.id}
          />
        </li>
      );
    });
    return newCollections;
  }

  renderPebls(pebls) {
    const newPebls = [];
    console.log(pebls);
    pebls.map((pebl, i) => {
      newPebls.push(
        <li
          key={`pebl-${i}`}
          className="featured-pebls__pebl"
        >
          <Pebl
            key={`pebl-${i}`}
            title={pebl.title}
            // updatedAt={pebl.updatedAt}
            id={pebl.id}
          />
        </li>
      );
    });
    return newPebls;
  }

  renderProfiles(profiles) {
    const newProfiles = [];
    console.log(profiles);
    profiles.map((profile, i) => {
      newProfiles.push(
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
      );
    });
    return newProfiles;
  }

  render() {
    return (
      <div className="featured__container">
        <div className="featured__sub-container">
          <h2
            className="featured__heading"
          >
        Popular Pebls
          </h2>
          <ul
            className="featured__list"
          >
            <SimpleSlider
              items={this.renderPebls(FeaturedConstants.PEBLS)}
              rows={2}
            />
          </ul>
        </div>
        <div className="featured__sub-container">
          <h2
            className="featured__heading"
          >
        Popular Collections
          </h2>
          <ul
            className="featured__list"
          >
            <SimpleSlider
              items={this.renderCollections(FeaturedConstants.COLLECTIONS)}
              rows={1}
            />
          </ul>
        </div>
        <div className="featured__sub-container">
          <h2
            className="featured__heading"
          >
          Featured Creators
          </h2>
          <ul
            className="featured__list"
          >
            <SimpleSlider
              items={this.renderProfiles(FeaturedConstants.PROFILES)}
              rows={1}
            />
          </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(Featured);
