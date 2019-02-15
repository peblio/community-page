import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as featuredPebls from '../../../constants/featureConstants.js';
import Pebl from '../../Pebl/Pebl';

require('./pebls.scss');

class Pebls extends Component {
  renderPebls(pebls) {
    return (
      <ul className="featured__list">
        {pebls.map((pebl, i) => (
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
        Featured Pebls
        </h2>
        <div className="studio__pebls">
          {this.renderPebls(featuredPebls.PEBLS)}
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

export default connect(mapStateToProps, mapDispatchToProps)(Pebls);
