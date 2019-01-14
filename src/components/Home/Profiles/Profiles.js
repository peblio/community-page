import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Profiles extends Component {
  render() {
    return (
      <div className="contact__container">
      Profiles
      </div>
    );
  }
}

Profiles.propTypes = {

};

function mapStateToProps(state) {
  return {

  };
}
const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(null, null)(Profiles);
