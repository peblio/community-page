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
        <div className="hero__sub-container">
          <div className="hero__icons">
            <div className="hero__icon-block" data-ix="icon1">
              <img src="https://uploads-ssl.webflow.com/5b742f79ea1bb015a93b0c1e/5b75861963ff82a35e10d4c9_tools.png" alt="" className="hero__icon-img" />
              <div className="hero__icon-desc">One tool for every language</div>
            </div>
            <div className="hero__icon-block" data-ix="icon-2">
              <img src="https://uploads-ssl.webflow.com/5b742f79ea1bb015a93b0c1e/5b7588632c58c5ec7029a18d_worksheets.png" alt="" className="hero__icon-img" />
              <div className="hero__icon-desc">Adaptable, interactive worksheets</div>
            </div>
            <div className="hero__icon-block" data-ix="icon-3">
              <img src="https://uploads-ssl.webflow.com/5b742f79ea1bb015a93b0c1e/5b75887416d8f22782c5e3fe_workflow.png" alt="" className="hero__icon-img" />
              <div className="hero__icon-desc">A seamless workflow for classes</div>
            </div>
            <div className="hero__icon-block" data-ix="icon-4">
              <img src="https://uploads-ssl.webflow.com/5b742f79ea1bb015a93b0c1e/5b75888e7c629c01bd752acb_community.png" alt="" className="hero__icon-img" />
              <div className="hero__icon-desc">An online community of educators</div>
            </div>
          </div>
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
