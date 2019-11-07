import React, { Component } from 'react';
// import ReactHtmlParser from 'react-html-parser';
import { slide as Menu } from 'react-burger-menu';
import axios from '../../utils/axios';
import OldNewsletters from './OldNewsletters';

require('./newsletters.scss');

class Newsletters extends Component {
  componentWillMount() {
    this.getPeblioNewsletters();
  }

  constructor(props) {
    super(props);
    this.state = {
      newsletters: [],
      newsletter: {}
    };
  }

  getPeblioNewsletters() {
    axios.get('http://localhost:8081/api/newsletters/1')
      .then((result) => {
        this.setState({
          newsletters: result.data.newsletters,
          newsletter: result.data.newsletters[result.data.newsletters.length - 1]
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  getNewslettersMenu() {

  }

  getNewsletter=(vol)=> {
    this.setState({
      newsletter: this.state.newsletters[vol]
    });
  }

  render() {
    console.log(this.state.newsletter);
    return (
      <div>
        <nav
          className="newsletter-menu__container"
        >
          <OldNewsletters
            newsletters={this.state.newsletters}
            getNewsletter={this.getNewsletter}
          />

          <div className="newsletter-menu__logo">
            <a href="/" className="logo w-nav-brand w--current">
              <img
                className="newsletter-menu__img"
                src="https://uploads-ssl.webflow.com/5b742f79ea1bb015a93b0c1e/5b75863416d8f20100c5dffe_Logo%20(1).png"
                alt=""
              />
            </a>
          </div>

          <p className="newsletter-menu__vol">
            {this.state.newsletter.month}
            {' '}
            {this.state.newsletter.year}
          </p>

        </nav>
        <div className="newsletters__container">
          <h1 className="newsletters__heading"> Newsletter </h1>
          <hr className="newsletters__line" />
          <div
            className="newsletter__container"
          >
            <h2 className="newsletter__heading">
                  Vol
              {' '}
              {this.state.newsletter.volume}
              {' '}
            </h2>
            <p className="newsletter__intro">
              {this.state.newsletter.intro}
            </p>
            <ul className="article__list">
              {
                this.state.newsletter.articles && this.state.newsletter.articles.map(article => (
                  <li className="article__list-item">
                    {' '}
                    {article.heading}
                    {' '}
                  </li>
                ))
              }
            </ul>
            <a
              className="newsletter__button"
              href="https://www.peblio.co/"
            >
                  Visit Our Website
            </a>
            <div className="newsletter__articles">
            {
              this.state.newsletter.articles && this.state.newsletter.articles.map(article => (
                <div className="article__container">
                  {article.image && (
                    <img
                      className="article__image"
                      src={article.image}
                    />
                  )}
                  <div className="article__text-container">
                    <h3 className="article__heading">
                      {' '}
                      {article.heading}
                      {' '}
                    </h3>
                    <p className="article__para">
                      {' '}
                      {article.para}
                      {' '}
                    </p>
                    <a
                      className="article__link"
                      href={article.link}
                    >
                      {article.linkText}
                    </a>
                  </div>
                </div>
              ))
            }
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Newsletters;
