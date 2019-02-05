import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  setTagName,
  setStudioPages
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
    studioPages: state.tag.pages
  };
}
const mapDispatchToProps = dispatch => bindActionCreators({
  setTagName,
  setStudioPages
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TagInput);
