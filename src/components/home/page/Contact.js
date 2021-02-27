import React from 'react';
import Counter from './Counter';
import store from '../../../store/';

function Contact(props){
  return(
    <>
      <h1>Contact</h1>
      <p>hub: 0838xxxxxxxx</p>
      <Counter store={store} />
    </>
  );
}

export default Contact;
