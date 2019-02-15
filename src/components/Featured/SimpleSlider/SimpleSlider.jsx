import React, { Component } from 'react';
import Slider from 'react-slick';

export default class SimpleSlider extends Component {
  createArray=()=> {
    let items=[];
    for(let i=0;i<6;i++) {
      items.push(
        <div>
          <h3>
          {i}
          </h3>
        </div>
      )
    }
    console.log(items)
    return items;
  }

  render() {
    this.createArray();
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    }

    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          {this.createArray()}
        </Slider>
      </div>
    );
  }
}
