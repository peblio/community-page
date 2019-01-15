import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

require('./contact.scss');

class Contact extends Component {
  render() {
    return (
      <div className="contact__container">
        <a
          href="https://demo.peblio.co/pebl/yWzLLSWLM"
          target="_blank"
          className="contact__button"
        >
        Contact Us
        </a>
        <div className="contact__links">
          <a href="/terms-of-use" target="_blank" className="contact__link">Terms of Use </a>
          {' '}
            |
          {' '}
          <a href="/privacy-policy" target="_blank" className="contact__link">Privacy Policy</a>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {

};

function mapStateToProps(state) {
  return {

  };
}
const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(null, null)(Contact);
