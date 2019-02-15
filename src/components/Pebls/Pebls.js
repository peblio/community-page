import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import {
  setTagName,
  getPeblsFromTag
} from '../../actions/tag';
import Nav from '../Nav/Nav';
import Pebl from '../Pebl/Pebl';

require('./pebls.scss');

class Pebls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pebls: [],
      offset: 0,
      pageLimit:11,
      potato:"poop"
    };
  }

  increasePageOffset = () => {
    this.setState({
      offset: this.state.offset+this.state.pageLimit
    })
  }
  retrievePeblsWithTag=(tag) =>{
    this.props.setTagName(tag);
    this.props.getPeblsFromTag(tag, this.state.pageLimit, 0);
    this.increasePageOffset();
    this.setState({
      offset:this.state.pageLimit
    })
  }

  fetchMoreData = () => {
    this.props.getPeblsFromTag(this.props.tagName, this.state.pageLimit, this.state.offset);
    this.increasePageOffset();
  }

  componentWillUpdate(nextProps) {
    // // console.log(nextProps.studioPebls)
    // console.log(Object.keys(nextProps.studioPebls).length)
    // Object.keys(nextProps.studioPebls).forEach((key)=>{
    //   console.log("For Each Key: ", key)
    //   console.log("For Each Value: ", studioPebls[key])
    // })
    if (nextProps.tagName !== this.props.tagName) {
      const tag = nextProps.tagName;
      this.retrievePeblsWithTag(tag);
    }
  }

  componentWillMount() {
    // console.log(this.props.tagName)
    this.retrievePeblsWithTag(this.props.tagName);
  }

  renderPebls(studioPebls) {
    Object.keys(studioPebls).forEach((i)=>{
      console.log(studioPebls[i])
    })
    return (
      <div>
        <h1>Potato</h1>
        <ul className="pebls__list">
          {this.state.potato}
        </ul>
      </div>
    );
  }

  render() {
    console.log(this.props.studioPebls)
    debugger;
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
    studioPebls: state.tag.pebls,
    totalPebls: state.tag.totalPebls
  };
}
const mapDispatchToProps = dispatch => bindActionCreators({
  setTagName,
  getPeblsFromTag
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Pebls);


/*
<InfiniteScroll
    className="pebls__list-scroll"
    dataLength={this.props.totalPebls}
    next={this.fetchMoreData}
    hasMore={true}
    loader={<h4>Loading...</h4>}
    endMessage={
      <p style={{textAlign: 'center'}}>
        <b>Yay! You have seen it all</b>
      </p>
    }
    height={window.innerHeight*0.8}
  >

*/
