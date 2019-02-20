import PropTypes from 'prop-types';
import React, { Component } from 'react';
import moment from 'moment';
import axios from '../../utils/axios';

require('./pebl.scss');

class Pebl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: ''
    };
  }

  componentDidMount() {
    this.getPeblAuthor(this.props.id);
  }

  getPeblAuthor = (pageId) => {
    const url = `https://api.peblio.co/api/users/pageAuthor/${pageId}`;
    axios.get(url)
      .then((response) => {
        this.setState({userName: response.data.name})
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className={`pebl__container pebl__container-${this.props.number}`}>
        <a
          className="pebl__link pebl__overlay"
          target="_blank"
          href={`https://demo.peblio.co/pebl/${this.props.id}`}
        >
          <div>
            <h1
              className="pebl__overlay-title"
            >
              {this.props.title}
            </h1>
            <p
            className="pebl__overlay-desc"
            >
              {this.props.description}
            </p>
          </div>
          <p
            className="pebl__overlay-author"
          >
            {this.state.userName}
          </p>
        </a>

          <img
            src="https://placekitten.com/200/150"
            className="pebl__image"
          />
          <h1
            className="pebl__title"
          >
            {this.props.title}
          </h1>
          <div className="pebl__info">
          <p
            className="pebl__sub-info"
          >
          {this.state.userName}
          </p>
          <p
            className="pebl__sub-info"
          >
            {moment(this.props.updatedAt).format('DD/MMM/YYYY')}
          </p>
          </div>

      </div>
    );
  }
}

export default Pebl;
