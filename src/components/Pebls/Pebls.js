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
      page: 1,
      pageLimit: 11,
      withStudents: false
    };
  }

  componentWillMount() {
    this.setPeblsPermissions();
    this.retrievePeblsWithTag(this.props.tagName);
  }

  componentWillUpdate(nextProps) {
    if (nextProps.tagName !== this.props.tagName) {
      const tag = nextProps.tagName;
      this.retrievePeblsWithTag(tag);
    }
  }

  increasePageCount = () => {
    this.setState({
      page: this.state.page+1
    })
  }

  setPeblsPermissions=()=> {
    if(this.props.container ==='studio') {
      this.setState({
        withStudents: true
      })
    }
  }

  fetchMoreData = () => {
    this.props.getPeblsFromTag(this.props.tagName, this.state.pageLimit, this.state.page, this.state.withStudents);
    this.increasePageCount();
  }

  retrievePeblsWithTag=(tag) =>{
    this.props.setTagName(tag);
    this.props.getPeblsFromTag(tag, this.state.pageLimit, 1,this.state.withStudents);
    this.increasePageCount();
    this.setState({
      page: 2
    })
  }

  renderPebls(studioPebls) {
    return (
      <ul
        className="pebls__list"
        id="pebls__list"
        >
      <InfiniteScroll
          className="pebls__list-scroll"
          dataLength={this.props.studioPebls.length}
          next={()=>{
            this.fetchMoreData();
          }}
          hasMore={this.props.studioPebls.length<this.props.totalPebls}
          loader={<h4 className="pebls__list-loading">Loading more pebls!</h4>}
          endMessage={
            <a
            className="pebls__list-end"
            href="#pebls__list"
            >
              Back to top
            </a>
          }
          scrollThreshold={"200px"}
        >
        {studioPebls.map((pebl, i) =>  {
          return(
            <li
              key={`pebl-${i}`}
              className="pebls__pebl"
            >
              <Pebl
                key={`pebl-${i}`}
                title={pebl.title}
                author={pebl.author}
                tags={pebl.tags}
                updatedAt={pebl.updatedAt}
                id={pebl.id}
                user={pebl.user}
                description={pebl.description}
                number={i%4}
              />
            </li>
          )}
        )
      }
      </InfiniteScroll>
      </ul>
    );
  }

  render() {
    return (
      <div className="studio__container">
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
