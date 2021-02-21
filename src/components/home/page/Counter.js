import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

const Counter = (props) => {
  return(
    <>
      <h1>mesin penghitung</h1>
      <p>Count: {props.count}</p>
      <Button variant="primary" onClick={props.onIncrementClick}>Increment</Button>
      <Button variant="primary" onClick={props.onDecrementClick}>Decrement</Button>
      <br />
      <br />
      <input type="text" value={props.x} onChange={props.handleChange} />
      <br />
      <Button variant="secondary" onClick={e => handleSubmit(e, props.x)}>Submit</Button>
    </>
  );
}

const mapStateToProps = (state) => {
  console.log("mapStateToProps", state);
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementClick : () => {
      console.log("tombol Increment diklik");
      const action = { type: "INCREMENT" };
      dispatch(action);
    },
    onDecrementClick : () => {
      console.log("tombol Decrement diklik");
      const action = { type: "DECREMENT" };
      dispatch(action);
    },
    handleChange : (e) => {
      const eventTarget = e.target.value;
      const action = { type: "handleChange", value: eventTarget };
      dispatch(action);
    }
  }
}

const handleSubmit = (e, value) => {
  e.preventDefault();
  alert(value);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
