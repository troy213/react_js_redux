import React from 'react';
import { connect } from 'react-redux';

function Counter(props){
  return(
    <>
      <h1>Saya mesin penghitung</h1>
      <p>Count: {props.count}</p>
      <button>Increment</button>
    </>
  );
}

function mapStateToProps(state){
  console.log('mapStateToProps', state);
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(Counter);
