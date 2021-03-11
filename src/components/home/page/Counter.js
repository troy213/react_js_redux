import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

const Counter = (props) => {
  let textInput = null;

  const handleClick = () => {
    textInput.focus();
    props.handleReset();
  }

  useEffect(()=>{
    if (props.count > 0) {
      document.title = `New Message(${props.count})`;
    } else {
      document.title = 'React App';
    }
  }, [props.count]);

  return(
    <>
      <h1>Mesin Penghitung</h1>
      <p>Count: {props.count}</p>
      <Button variant="primary" onClick={props.onIncrementClick}>Increment</Button>
      <Button variant="primary" onClick={props.onDecrementClick}>Decrement</Button>
      <br />
      <input type="text" value={props.x} onChange={props.handleChange} ref={(input) => { textInput = input; }}/>
      <Button variant="secondary" onClick={e => handlePesan(props.x, e)}>Kirim</Button>
      <br />
      <Button variant="info" onClick={handleClick}>Reset</Button>
    </>
  );
}

const mapStateToProps = (state) => {
  console.log("mapStateToProps", state);
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return{
    onIncrementClick : () => {
      console.log("tombol increment diklik");
      const action = { type: "INCREMENT" };
      dispatch(action);
    },
    onDecrementClick : () => {
      console.log("tombol decrement diklik");
      const action = { type: "DECREMENT" };
      dispatch(action);
    },
    handleChange : (e) => {
      const eventTarget = e.target.value;
      const action = { type: "handleChange", value: eventTarget };
      dispatch(action);
    },
    handleReset : () => {
      const action = { type: "handleReset" };
      dispatch(action);
    }
  }
}

const handlePesan = (value, e) => {
  e.preventDefault();
  alert(value);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
