import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

require('./hero.scss');

class Hero extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 50,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="hero__container">
        <Slider {...settings}>
          <div>
            <img
              className="hero__image"
              src="https://placekitten.com/300/300"
            />
          </div>
          <div>
            <img
              className="hero__image"
              src="https://placekitten.com/400/300"
            />
          </div>
        </Slider>
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

// TODO: add below hero images - all should have a button linking to content OR blank page
// 1. p5.js curr
// 2. create your own
// 3. STEM coding
// 4. Hour of code!

/*
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
*/
