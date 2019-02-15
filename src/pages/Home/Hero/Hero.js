import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

require('./hero.scss');

class Hero extends Component {
  render() {
    return (
      <div className="hero__container">
        <div className="hero__sub-container">
          <div data-ix="hero-text" className="hero__header">
            Teach coding
            {' '}
            <span className="hero__header-small">with</span>
            {' '}
            confidence
          </div>
          <div
            className="hero__subheader"
          >
            Whether you're a CS teacher, or want to bring code to your class, we'll provide the tools and resources you need to teach coding in your classroom.
          </div>
          <div className="hero__button-container">
            <a
              href="#posts"
              target="_blank"
              className="hero__button hero__button-1"
            >
          Find Resources
            </a>
            <a
              href="http://demo.peblio.co"
              target="_blank"
              className="hero__button hero__button-2"
            >
          Start Creating
            </a>
          </div>
        </div>

        {' '}
        <div className="hero__main-image">
          <img src="https://s3.amazonaws.com/peblio-files/TeachCS/images/BylWSVXH4_Group%203%20%284%29.png" alt="" className="hero__pebl" />
        </div>
      </div>
    );
  }
}

Hero.propTypes = {

};

function mapStateToProps(state) {
  return {

  };
}
const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(null, null)(Hero);
