import React, { Component } from 'react';
import Nav from '../Nav/Nav';

require('./about.scss');

class About extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="about__container">
          <div className="about__sub-container about__sub-container--green">
            <div className="about__image-container">
              <img src="https://uploads-ssl.webflow.com/5b742f79ea1bb015a93b0c1e/5b7b31227e58f12565e4247a_Group%2028%20(2).svg" alt="" className="about__image" />
            </div>
            <div className="about__text-container">
              <h1 className="about__heading">
            Teach Computer Science with Peblio
              </h1>
              <div className="about__sub-heading">
            Browse, Adapt, Share
              </div>
            </div>
          </div>

          <div className="about__sub-container about__sub-container--red">
            <div className="about__image-container">
              <img src="https://uploads-ssl.webflow.com/5b742f79ea1bb015a93b0c1e/5b7a2e4b22fffc85cdc392cc_Group%205%20(2).png" alt="" className="about__image" />
            </div>
            <div className="about__text-container">
              <h1 className="about__heading">
            Resources
              </h1>
              <div className="about__sub-heading">
            Find curricula, lesson plans, or project ideas on our homepage. Easily adapt content with edit mode and share assignments through Google classroom.
              </div>
            </div>
          </div>

          <div className="about__sub-container about__sub-container--blue">
            <div className="about__image-container about__image-container--full">
              <img src="https://uploads-ssl.webflow.com/5b742f79ea1bb015a93b0c1e/5b7a349ec6a32fe956b60673_Screen%20Shot%202018-08-01%20at%2010.59%202.svg" alt="" className="about__image" />
            </div>
            <div className="about__text-container about__text-container--full">
              <h1 className="about__heading">
            Tools
              </h1>
              <div className="about__sub-heading">
            Our interactive worksheets provide a single document for your code, instructions, images,  questions, and more....
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default About;
