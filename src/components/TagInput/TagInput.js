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
  trySugTag=(e)=>{
      this.props.setTagName(e.target.innerText);
      this.fileUpload.value = e.target.innerText;
  }

  render() {
    return (
      <div className="tag-input__container" id="pebls__list">
      <p className="tag-input__title">
        Search for Resources
      </p>
      <div className="tag-input__sub-container">
        <i className="fa fa-search tag-input__icon" aria-hidden="true"></i>
        <input
          className="tag-input__input"
          type="text"
          placeholder="enter tags..."
          onKeyPress={this.handleKeyPress}
          ref={(input) => { this.fileUpload = input; }}
        />
        </div>
        <div
        className="tag-input__sug-tag-container"
        >
          <ul className="tag-input__sug-tags">

            <button
            onClick={this.trySugTag}
            className="tag-input__sug-tag-button"
            >
              p5.js
            </button>

            <button
            onClick={this.trySugTag}
            className="tag-input__sug-tag-button"
            >
              python
            </button>


            <button
            onClick={this.trySugTag}
            className="tag-input__sug-tag-button"
            >
              beginner
            </button>

            <button
            onClick={this.trySugTag}
            className="tag-input__sug-tag-button"
            >
              scratch
            </button>
          </ul>
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
