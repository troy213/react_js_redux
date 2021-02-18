import React from 'react';
import { connect } from 'react-redux';

function Counter(props) {
  return(
    <>
      <h1>Saya mesin penghitung</h1>
      <p>Count: {props.count}</p>
      <button onClick={props.onIncrementClick}>Increment</button>
    </>
  );
}

function mapStateToProps(state){
  console.log('mapStateToProps', state);
  return {
    count: state.count
  }
}

function mapDispatchToProps(dispatch){
  return {
    onIncrementClick : () => {
      console.log("tombol ditekan");
      const action = { type : "INCREMENT" };
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
