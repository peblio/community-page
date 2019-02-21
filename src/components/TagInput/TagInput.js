import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  setTagName
} from '../../actions/tag';
import axios from '../../utils/axios';

require('./tagInput.scss');

class TagInput extends Component {
  handleKeyPress=(e)=>{
    if(e.key==='Enter') {
      this.props.setTagName(e.target.value);
    }
  }

  render() {
    return (
      <div className="tag-input__container">
      <p className="tag-input__title">
        Search for Resources
      </p>
      <div className="tag-input__sub-container">
        <i class="fa fa-search tag-input__icon" aria-hidden="true"></i>
        <input
          className="tag-input__input"
          type="text"
          placeholder="enter tags..."
          onKeyPress={this.handleKeyPress}
        />
        </div>
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
  setTagName
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TagInput);
