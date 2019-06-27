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
  constructor(props) {
    super(props);
    this.state = {
      tagName: 'tag'
    };
  }

  componentDidMount() {
    const tempTag = this.props.match.params.tag;
    this.props.setTagName(tempTag);
    this.setState({
      tagName: tempTag
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="studio__container">
          <h1 className="studio__heading">
            {this.state.tagName}
          </h1>
          <Pebls
            container="studio"
          />
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
