import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { increaseCount } from '../../actions/main';
import Hero from './Hero/Hero';
import Contact from '../../components/Contact/Contact';
import Nav from '../../components/Nav/Nav';
import Pebls from '../../components/Pebls/Pebls';
import Profiles from './Profiles/Profiles';
import TagInput from '../../components/TagInput/TagInput';

require('./home.scss');

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav
            activeMenuItem="home"
          />
          <Hero />
          <Profiles />
          <TagInput />
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
