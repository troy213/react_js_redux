import React, { useReducer } from 'react';
import Counter from './Counter';
import store from '../../store';

const Contact = () => {
  const reducer = (state, action) => {
    if (action.type === "SHOW_CONTACT") {
      const newPhone = action.payload;
      return {
        ...state,
        phone: newPhone
      };
    }
    return state;
  }

  const defaultState = {
    heading: "Contact",
    phone: "klik disini"
  }

  const [state, dispatch] = useReducer(reducer, defaultState);

  const handlePesan = (e) => {
    e.preventDefault();
    dispatch({ type: "SHOW_CONTACT", payload: "0838xxxxxxxx"})
  }

  return(
    <>
      <h1>{state.heading}</h1>
      <p onClick={handlePesan}>Hub: {state.phone}</p>
      <Counter store={store} />
    </>
  );
}

export default Contact;
