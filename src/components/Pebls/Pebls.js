import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  setTagName,
  setStudioPages
} from '../../actions/tag';
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

  retrievePeblsWithTag=(tag) =>{
    this.props.setTagName(tag);
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

  componentWillUpdate(nextProps) {
    console.log(nextProps.tagName)
    console.log(nextProps.tag)
    if (nextProps.tagName !== this.props.tagName) {
      const tag = nextProps.tagName;
      this.retrievePeblsWithTag(tag);
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
        {this.props.tagName}
        <div className="studio__pebls">
          {this.renderPebls(this.props.studioPages, this.state.pebls)}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tagName: state.tag.name,
    studioPages: state.tag.pages
  };
}
const mapDispatchToProps = dispatch => bindActionCreators({
  setTagName,
  setStudioPages
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Pebls);
