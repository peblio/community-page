import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  setTagName,
  setStudioPebls,
  getPeblsFromTag
} from '../../actions/tag';
import Nav from '../Nav/Nav';
import Pebl from './Pebl/Pebl';

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
    this.props.getPeblsFromTag(tag);
  }

  componentWillUpdate(nextProps) {
    if (nextProps.tagName !== this.props.tagName) {
      const tag = nextProps.tagName;
      this.retrievePeblsWithTag(tag);
    }
  }

  renderPebls(studioPebls) {
    return (
      <ul>
        {studioPebls.map((pebl, i) =>  {
          return(
            <li
              key={`pebl-${i}`}
            > yp yp
              <Pebl
                key={`pebl-${i}`}
                title={pebl.title}
                author={pebl.author}
                tags={pebl.tags}
                updatedAt={pebl.updatedAt}
              />
            </li>
          )}
        )
      }
      </ul>
    );
  }

  render() {
    console.log(this.props.studioPebls)
    console.log(this.props.studioPebls)
    return (
      <div className="studio__container">
        {this.props.tagName}
        <div className="studio__pebls">
          {this.renderPebls(this.props.studioPebls)}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tagName: state.tag.name,
    studioPebls: state.tag.pebls
  };
}
const mapDispatchToProps = dispatch => bindActionCreators({
  setTagName,
  setStudioPebls,
  getPeblsFromTag
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Pebls);
