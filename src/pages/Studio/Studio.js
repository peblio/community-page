import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  setTagName
} from '../../actions/tag';
import Nav from '../../components/Nav/Nav';
import Pebls from '../../components/Pebls/Pebls';
import TagInput from '../../components/TagInput/TagInput';

require('./studio.scss');

class Studio extends Component {
  componentDidMount() {
    const tempTag = this.props.match.params.tag;
    console.log(this.props.match.params.tag);
    this.props.setTagName(tempTag);
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="studio__container">
          <Pebls />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {

  };
}
const mapDispatchToProps = dispatch => bindActionCreators({
  setTagName
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Studio);
