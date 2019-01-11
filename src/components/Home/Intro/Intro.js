import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Intro extends Component {
  render() {
    return (
      <div className="contact__container">
        <div className="hero-content w-container">
          <div data-ix="hero-text" className="hero-heading">
            Teach coding
            <span className="heroheadersmall">with</span>
            {' '}
            confidence
          </div>
          <div data-ix="hero-text-2" className="hero-subheading">Whether you're a CS teacher, or want to bring code to your class, we'll provide the tools and resources you need to teach coding in your classroom.</div>
          <a data-ix="hero-button" href="#posts" target="_blank" className="button secondarybutton w-button">Find Resources</a>
          <a data-ix="hero-button" href="http://demo.peblio.co" target="_blank" className="button primarybutton demobutton w-button">Start Creating</a>
        </div>

        <div className="iconbar">
          <div className="div-block-2">
            <div className="div-block iconblock" data-ix="icon1">
              <img src="https://uploads-ssl.webflow.com/5b742f79ea1bb015a93b0c1e/5b75861963ff82a35e10d4c9_tools.png" alt="" className="iconimage" />
              <div className="icondescription">One tool for every language</div>
            </div>
            <div className="div-block iconblock" data-ix="icon-2">
              <img src="https://uploads-ssl.webflow.com/5b742f79ea1bb015a93b0c1e/5b7588632c58c5ec7029a18d_worksheets.png" alt="" className="iconimage" />
              <div className="icondescription">Adaptable, interactive worksheets</div>
            </div>
            <div className="div-block iconblock" data-ix="icon-3">
              <img src="https://uploads-ssl.webflow.com/5b742f79ea1bb015a93b0c1e/5b75887416d8f22782c5e3fe_workflow.png" alt="" className="iconimage" />
              <div className="icondescription">A seamless workflow for classes</div>
            </div>
            <div className="div-block iconblock" data-ix="icon-4">
              <img src="https://uploads-ssl.webflow.com/5b742f79ea1bb015a93b0c1e/5b75888e7c629c01bd752acb_community.png" alt="" className="iconimage" />
              <div className="icondescription">An online community of educators</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Intro.propTypes = {

};

function mapStateToProps(state) {
  return {

  };
}
const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(null, null)(Intro);
