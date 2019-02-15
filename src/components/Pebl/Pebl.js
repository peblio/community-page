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
    const url = `https://staging-api.peblio.co/api/users/pageAuthor/${pageId}`;
    axios.get(url)
      .then((response) => {
        console.log(response.data.name);
        this.setState({userName: response.data.name})
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="pebl__container">
        <a
          className="pebl__link"
          target="_blank"
          href={`https://staging.peblio.co/pebl/${this.props.id}`}
        >
          <img
            src="https://placekitten.com/200/150"
            className="pebl__image"
          />
          <h1
            className="pebl__title"
          >
            {this.props.title}
          </h1>
          <p
            className="pebl__updated"
          >
          {this.state.userName}
          Last Update
            {' '}
            {moment(this.props.updatedAt).format('DD/MMM/YYYY')}
          </p>
        </a>
      </div>
    );
  }
}

export default Pebl;
