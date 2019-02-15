import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FeaturedProfiles from './Profiles/Profiles';
import FeaturedPebls from './Pebls/Pebls';
import FeaturedCollections from './Collections/Collections';

require('./featured.scss');

class Featured extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="featured__container">
        <FeaturedPebls />
        <FeaturedCollections />
        <FeaturedProfiles />
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
