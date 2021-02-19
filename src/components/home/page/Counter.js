import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

function Counter(props) {
  return(
    <>
      <h1>Saya mesin penghitung</h1>
      <p>Count: {props.count}</p>
      <Button onClick={props.onIncrementClick}>Increment</Button>
      <Button onClick={props.onDecrementClick}>Decrement</Button>
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
      console.log("tombol increment diklik");
      const action = { type : "INCREMENT" };
      dispatch(action);
    },
    onDecrementClick : () => {
      console.log("tombol decrement diklik");
      const action = { type : "DECREMENT" };
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
