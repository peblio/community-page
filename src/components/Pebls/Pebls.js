import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  setStudioName,
  setStudioPages
} from '../../actions/studio';
import Nav from '../Nav/Nav';
import Pebl from './Pebl/Pebl';
import axios from '../../utils/axios';

// require('./studio.scss');

class Pebls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pebls: []
    };
  }

  componentWillUpdate(nextProps) {
    if (nextProps.tag !== this.props.tag) {
      const tag = nextProps.tag;
      this.props.setStudioName(tag);
      const url = `http://localhost:8081/api/pages/withTags?tag=${tag}`;
      const tempPebls = [];
      axios.get(url)
        .then((response) => {
          this.props.setStudioPages(response.data);
          response.data.map((page, i) => {
            axios.get(`http://localhost:8081/api/users/${page.user}`)
              .then((response) => {
                tempPebls.push({
                  title: page.title,
                  tags: page.tags,
                  author: response.data.name
                });
                this.setState({ pebls: tempPebls });
              });
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  renderPebls(studioPages, pebls) {
    let author;
    return (
      <ul>
        {pebls.map((pebl, i) => {
          axios.get(`http://localhost:8081/api/users/${pebl.user}`)
            .then((response) => {
              author = response.data.name;
            });
          return (
            <li>
              <Pebl
                title={pebl.title}
                author={pebl.author}
                tags={pebl.tags}
                updatedAt={pebl.updatedAt}
              />
            </li>
          );
        })
        }
      </ul>
    );
  }

  render() {
    return (
      <div className="studio__container">
        {this.props.studioName}
        <div className="studio__pebls">
          {this.renderPebls(this.props.studioPages, this.state.pebls)}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    studioName: state.studio.name,
    studioPages: state.studio.pages
  };
}
const mapDispatchToProps = dispatch => bindActionCreators({
  setStudioName,
  setStudioPages
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Pebls);
