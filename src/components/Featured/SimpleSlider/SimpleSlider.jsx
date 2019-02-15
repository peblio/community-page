import React, { Component } from 'react';
import Slider from 'react-slick';
import Collection from '../../Collection/Collection';

export default class SimpleSlider extends Component {
  render() {
    const rows = this.props.rows;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      rows: 1,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 4,
          }
        }
      ]

    };

    return (
      <div>
        <Slider {...settings}>
          {this.props.items}
        </Slider>
      </div>
    );
  }
}
