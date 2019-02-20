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
      pageLimit:11
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
    if (nextProps.tagName !== this.props.tagName) {
      const tag = nextProps.tagName;
      this.retrievePeblsWithTag(tag);
    }
  }

  componentWillMount() {
    this.retrievePeblsWithTag(this.props.tagName);
  }


  renderPebls(studioPebls) {
    return (
      <ul className="pebls__list">
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
