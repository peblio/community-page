import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

require('./nav.scss');

class Nav extends Component {
  componentDidMount() {
    const elt = document.getElementById(this.props.activeMenuItem);
    if (elt) { elt.className += ' nav__item--selected'; }
  }

  render() {
    return (
      <div className="nav__container">
        <div className="nav__left">
          <a href="/" className="logo w-nav-brand w--current"><img src="https://uploads-ssl.webflow.com/5b742f79ea1bb015a93b0c1e/5b75863416d8f20100c5dffe_Logo%20(1).png" alt="" /></a>
        </div>
        <div className="nav__right">
          <nav role="navigation" className="nav__menu">
            <a
              href="/"
              className="nav__item"
              id="home"
            >
              Home
            </a>
            <a
              href="/about"
              className="nav__item"
              id="about"
            >
              About
            </a>
            <a
              href="https://demo.peblio.co/pebl/XeJAt6pVQ"
              target="_blank"
              className="nav__item"
            >
              Guide
            </a>
          </nav>
        </div>
      </div>
    );
  }
}

export default connect(null, null)(Nav);
