import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FeaturedCollections from '../../../constants/featureConstants.js';
import Collection from '../../Collection/Collection';

require('./collections.scss');

class Collections extends Component {
  renderCollections(collections) {
    return (
      <ul className="featured__list">
        {collections.map((collection, i) => (
          <li
            key={`collection-${i}`}
            className="featured-collections__collection"
          >
            <Collection
              key={`collection-${i}`}
              title={collection.title}
              // updatedAt={pebl.updatedAt}
              id={collection.id}
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
        Featured collections
        </h2>
        {this.renderCollections(FeaturedCollections.COLLECTIONS)}
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

export default connect(mapStateToProps, mapDispatchToProps)(Collections);
