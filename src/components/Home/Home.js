import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { increaseCount } from '../../actions/main';
import Intro from './Intro/Intro';
import Contact from './Contact/Contact';
import Nav from '../Nav/Nav';
import Pebls from './Pebls/Pebls';
import Profiles from './Profiles/Profiles';

require('./home.scss');

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav />
          <Intro />
          <Profiles />
          <Pebls />
          <Contact />
          <p>
            Count :
            {this.props.count}
          </p>
        </header>
      </div>
    );
  }
}

Home.propTypes = {
  count: PropTypes.number.isRequired,
  increaseCount: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    count: state.main.count
  };
}
const mapDispatchToProps = dispatch => bindActionCreators({
  increaseCount
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
