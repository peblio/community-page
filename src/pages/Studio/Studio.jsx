import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  setStudioName,
  setStudioPages
} from '../../actions/studio';
import Nav from '../../components/Nav/Nav';
import Pebl from './Pebl/Pebl';
import axios from '../../utils/axios';

require('./studio.scss');

class Studio extends Component {
  componentDidMount() {
    const tag = this.props.match.params.tag;
    this.props.setStudioName(tag);
    const url = `http://localhost:8081/api/pages/withTags?tag=${tag}`;
    axios.get(url)
      .then((response) => {
        this.props.setStudioPages(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  renderPebls(studioPages) {
    return (
      <ul>
        {studioPages.map((page, i) => (
          <li>
            <Pebl
              title={page.title}
              author={page.author}
              tags={page.tags}
            />
          </li>
        ))
        }
      </ul>
    );
  }

  render() {
    console.log(this.props.studioPages);
    return (
      <div>
        <Nav />
        <div className="studio__container">
        Studio
          {this.props.studioName}
        </div>
        <div className="studio__pebls">
          {this.renderPebls(this.props.studioPages)}
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

export default connect(mapStateToProps, mapDispatchToProps)(Studio);
