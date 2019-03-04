import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import Contact from '../../components/Contact/Contact';

require('./hourOfCode.scss');

class HourOfCode extends Component {
  render() {
    return (
      <div>
        <Nav />

        <div className="her02">
          <div className="hero-content w-container">
            <div data-ix="hero-text" className="hero-heading">
            Peblio Hour of Code
            </div>

            <div data-duration-in="300" data-duration-out="100" className="tabs w-tabs">
              <div className="w-tab-content">
                <div data-w-tab="Tab 2" className="w-tab-pane" />
                <div data-w-tab="Tab 3" className="w-tab-pane" />
              </div>
            </div>

            <div data-ix="hero-text-2" className="hero-subheading">
            Welcome to the Peblio Hour of Code! In this activity, you'll &nbsp;create interactive works of art with code, inspired by famous artists. Let's get started!
            </div>

            <div id="w-node-3cfee68526f0-dcd79c76" className="w-video w-embed">
              <iframe className="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Ffast.wistia.net%2Fembed%2Fiframe%2Fl6k0a8mku4&amp;url=https%3A%2F%2Fpeblio.wistia.com%2Fmedias%2Fl6k0a8mku4&amp;image=https%3A%2F%2Fembed-ssl.wistia.com%2Fdeliveries%2F28ed3830d6cd5e95d315f137dcbac47abf9dcf7b.jpg%3Fimage_crop_resized%3D960x538&amp;key=96f1f04c5f4143bcb0f2e68c87d65feb&amp;type=text%2Fhtml&amp;schema=wistia" scrolling="no" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen="true" />
            </div>

            <div className="div-block-16" />

            <a data-ix="hero-button" href="https://demo.peblio.co/pebl/AXcwQlcDZ" className="button primarybutton demobutton w-button">Get Started!</a>

            <div className="text-block-7">
This challenge is inspired by the
              <a href="#https://drive.google.com/drive/folders/1BJo_LQ0qX32vQbsiny_ffRi0bZeqferI" className="cs4all" target="_blank">
                {' '}
                CS4All middle school Intro to Computational Media curriculum
                {' '}
              </a>
            </div>
          </div>
        </div>

        <div className="columns w-row">
          <div className="w-clearfix w-col w-col-6">
            <a href="http://hello.p5js.org/" target="_blank" className="link-block w-inline-block">
              <img src="https://uploads-ssl.webflow.com/5b742f79ea1bb015a93b0c1e/5bb24c48418c177ce289c06e_download%20(24).png" srcSet="https://uploads-ssl.webflow.com/5b742f79ea1bb015a93b0c1e/5bb24c48418c177ce289c06e_download%20(24)-p-500.png 500w, https://uploads-ssl.webflow.com/5b742f79ea1bb015a93b0c1e/5bb24c48418c177ce289c06e_download%20(24).png 766w" sizes="70px" alt="" className="image-10" />
              <div className="text-block-6 learnmore">Learn more about p5.js </div>
            </a>
          </div>
          <div className="column-2 w-clearfix w-col w-col-6">
            <a href="https://peblio-community-site.webflow.io/hour-of-code-teacher-notes" target="_blank" className="link-block-2 w-inline-block">
              <img src="https://uploads-ssl.webflow.com/5b742f79ea1bb015a93b0c1e/5bb24f05ee586d7e3ec3a03a_noun_Teacher_1099569_000000.png" srcSet="https://uploads-ssl.webflow.com/5b742f79ea1bb015a93b0c1e/5bb24f05ee586d7e3ec3a03a_noun_Teacher_1099569_000000-p-500.png 500w, https://uploads-ssl.webflow.com/5b742f79ea1bb015a93b0c1e/5bb24f05ee586d7e3ec3a03a_noun_Teacher_1099569_000000-p-800.png 800w, https://uploads-ssl.webflow.com/5b742f79ea1bb015a93b0c1e/5bb24f05ee586d7e3ec3a03a_noun_Teacher_1099569_000000.png 1340w" sizes="(max-width: 479px) 90vw, 100px" alt="" className="image-11" />
              <div className="text-block-6 learnmore">Teacher Reference </div>
            </a>
          </div>
        </div>

        <Contact />

      </div>
    );
  }
}


export default HourOfCode;
