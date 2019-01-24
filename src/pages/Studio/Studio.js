import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  setStudioName,
  setStudioPages
} from '../../actions/studio';
import Nav from '../../components/Nav/Nav';
import Pebls from '../../components/Pebls/Pebls';

require('./studio.scss');

class Studio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: ''
    };
  }

  componentDidMount() {
    const tempTag = this.props.match.params.tag;
    this.setState({
      tag: tempTag
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <Pebls
          tag={this.state.tag}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {

  };
}
const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Studio);
