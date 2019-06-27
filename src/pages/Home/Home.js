import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { increaseCount } from '../../actions/main';
import Hero from './Hero/Hero';
import Contact from '../../components/Contact/Contact';
import Nav from '../../components/Nav/Nav';
import Pebls from '../../components/Pebls/Pebls';
import TagInput from '../../components/TagInput/TagInput';
import Featured from '../../components/Featured/Featured.js';

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
          <TagInput />
          {!this.props.name &&
            <Featured />
          }
          {this.props.name && (
            <Pebls
              container="home"
            />
          )}
          <Contact />
        </header>
      </div>
    );
  }
}

Home.propTypes = {

};

function mapStateToProps(state) {
  return {
    name: state.tag.name
  };
}
const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
