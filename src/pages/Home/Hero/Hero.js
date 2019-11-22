import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import welcome from '../../../assets/welcome-01.png';
import lesson from '../../../assets/lesson-01.png';
import curr from '../../../assets/curr-01.png';


require('./hero.scss');

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [
        {
          title: 'Welcome',
          heading: 'Teach coding with confidence',
          text: "Whether you're a CS teacher, or want to bring code to your class, we'll provide the tools and resources you need to teach 21st century skills in your classroom.",
          image: welcome
        },
        {
          title: 'New Curriculum',
          heading: 'Teach Creative Coding in p5.js!',
          text: 'Check out this curriculum developed by the NYC Department of education and learn to code by creating graphics and games for the web with this exciting Javascript library.',
          image: curr
        },
        {
          title: 'New Lessons',
          heading: 'Physics and Code!',
          text: 'Bring code to your physics class with these lessons developed by STEM coding. STEM coding uses the p5.js library to create engaging physics lessons with cool simulations!',
          image: lesson
        }
      ]
    };
  }

  render() {
    // console.log(p5);
    const settings = {
      arrows: false,
      autoplay: false,
      autoplaySpeed: 5000,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="hero__container">
        <div className="hero-menu__container">
          <ul className="hero-menu__list">
            {this.state.content.map((content, i) => (
              <li className="hero-menu__list-item">
                <button
                  className="hero-menu__button"
                  onClick={() => { this.slider.slickGoTo(i); }}
                >
                  {content.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="hero__slider-container">
          <Slider ref={slider => (this.slider = slider)} {...settings}>
            {this.state.content.map((content, i) => (
              <div className="hero__slider">
                <div className="hero__content">
                  <h1 className="hero__heading hero__heading-desktop">
                    {content.heading}
                  </h1>
                  <p className="hero__text">
                    {content.text}
                  </p>
                  <div className="hero__button-container">
                    <a className="hero__button" href="#">
                    Learn More
                    </a>
                    <a className="hero__button hero__button--green" href="#">
                    Start Creating
                    </a>
                  </div>
                </div>
                <img
                  className="hero__image"
                  src={content.image}
                />
                <h1 className="hero__heading hero__heading-mobile">
                  {content.heading}
                </h1>
              </div>
            ))}
          </Slider>
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

// TODO: add below hero images - all should have a button linking to content OR blank page
// 1. p5.js curr
// 2. create your own
// 3. STEM coding
// 4. Hour of code!
