import React, { Component } from 'react';
import axios from '../../utils/axios';

require('./newsletters.scss');

class Newsletters extends Component {
  componentWillMount() {
    this.getPeblioNewsletters();
  }

  constructor(props) {
    super(props);
    this.state = {
      newsletters: []
    };
  }

  getPeblioNewsletters() {
    axios.get('http://localhost:8081/api/newsletters/1')
      .then((result) => {
        this.setState({
          newsletters: result.data.newsletters
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div className="newsletters__container">
        <h1 className="newsletters__heading"> Newsletters </h1>
        {
          this.state.newsletters.map((nl, i) => (
            <div className="newsletter__container">
              <h2 className="newsletter__heading">
              Vol
                {' '}
                {nl.volume}
                {' '}
              |
                {' '}
                {nl.month}
                {' '}
                {nl.year}
              </h2>
              <p>
                {nl.intro}
              </p>
              {
                nl.articles.map(article => (
                  <div className="article__container">
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
                    {article.image && (
                      <img
                        className="article__image"
                        src={article.image}
                      />
                    )}
                  </div>
                ))
              }
            </div>
          ))
        }
      </div>
    );
  }
}


export default Newsletters;
