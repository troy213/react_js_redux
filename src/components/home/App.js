import React from 'react';
import Header from './Header';
import Footer from './Footer';
import List from './List';
import Main from './Main';
import Form from './Form';
import './App.css';

function App(){
  return(
    <>
      <Header head="React Redux" />
      <List />
      <Main list="state daftarList" />
      <Form />
      <Footer foot="Niomic" />
    </>
  );
}

export default App;
