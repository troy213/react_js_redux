import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: this.props.count
    }
  }

  render(){
    return(
      <>
        <h1>Saya mesin penghitung</h1>
        <p>Count: {this.state.value}</p>
        <button>Increment</button>
      </>
    );
  }
}

function mapStateToProps(state){
  console.log('mapStateToProps', state);
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(Counter);
