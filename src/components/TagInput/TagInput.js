import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  setTagName,
  setStudioPebls
} from '../../actions/tag';
import axios from '../../utils/axios';

// require('./studio.scss');

class TagInput extends Component {
  handleKeyPress=(e)=>{
    if(e.key==='Enter') {
      this.props.setTagName(e.target.value);
    }
  }

  render() {
    return (
      <div className="tag-input__container">
      <p> Search for resources</p>
        <input
          className="tag-input__input"
          type="text"
          placeholder="enter tags..."
          onKeyPress={this.handleKeyPress}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tagName: state.tag.name,
    studioPebls: state.tag.pebls
  };
}
const mapDispatchToProps = dispatch => bindActionCreators({
  setTagName,
  setStudioPebls
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TagInput);
