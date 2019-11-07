import React, { Component } from 'react';
import { fallDown as Menu } from 'react-burger-menu';

require('./newsletters.scss');

class OldNewsletters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  isMenuOpen=(state)=> {
    this.setState({
      isOpen: state.isOpen
    });
  }

  render() {
    return (
      <div className={`newsletters__hamburger newsletters__hamburger--${this.state.isOpen}`}>
        <Menu
          onStateChange={this.isMenuOpen}
        >
        <ul className="newsletter-menu__items">
          {this.props.newsletters.slice(0).reverse().map((nl, i) => (
            <li className="newsletter-menu__item">
              <button
                onClick={()=>{this.props.getNewsletter(nl.volume-1)}}
                className="newsletter-menu__button"
              >
              Vol
                {' '}
                {nl.volume}
                {' '}
              |
                {' '}
                {nl.month}
                {' '}
                {nl.year}
              </button>
            </li>
          ))}
        </ul>
        </Menu>
      </div>
    );
  }
}

export default OldNewsletters;
