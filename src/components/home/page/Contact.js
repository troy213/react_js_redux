import React, { Component } from 'react';
import Counter from './Counter';
import store from '../../../store/';

class Contact extends Component{
  render(){
    return(
      <>
        <h1>Contact</h1>
        <p>Silahkan Hubungi: 0838xxxxxxxx</p>
        <Counter store={store} />
      </>
    );
  }
}

export default Contact;
