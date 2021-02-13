import React from 'react';
import Header from './Header';
import Footer from './Footer';
import List from './List';
import Main from './Main';
import Form from './Form';

function App() {
  return (
    <div>
      <Header head="React Redux" />
      <List />
      <Main list="State Daftar List" />
      <Form />
      <Footer foot="Niomic" />
    </div>
  );
}

export default App;
