import React from 'react';
import Header from './Header';
import Footer from './Footer';
import List from './List';
import Main from './Main';
import Form from './Form';
import './App.css';

export const imageContext = React.createContext();

const App = () => {
  return(
    <>
      <Header head="Welcome!" />
      <imageContext.Provider
        value={{ link:"https://miro.medium.com/max/800/1*VeM-5lsAtrrJ4jXH96h5kg.png" }}>
          <List />
      </imageContext.Provider>
      <Main list="state daftarList" />
      <Form />
      <Footer foot="Niomic" />
    </>
  );
}

export default App;
