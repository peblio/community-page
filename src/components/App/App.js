import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { increaseCount } from '../../actions/main'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Peblio </h1>
          <button
            onClick={this.props.increaseCount}
          > 
              Click to increase count 
          </button>
          <p> Count : {this.props.count} </p>
        </header>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.main.count
  };
}
const mapDispatchToProps = dispatch => bindActionCreators({
  increaseCount
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
