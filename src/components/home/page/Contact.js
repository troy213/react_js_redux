import React from 'react';
import Counter from './Counter';
import store from '../../../store/';

const Contact = (props) => {
  return(
    <>
      <h1>Contact</h1>
      <p>hubungi: 0838xxxxxxxx</p>
      <Counter store={store} />
    </>
  );
}

export default Contact;
