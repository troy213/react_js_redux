import React from 'react';

const Header = (props) => {
  const handlePesan = (value,e) => {
    e.preventDefault();
    alert(value);
  }

  return(
    <a href="/" onClick={e => handlePesan("React Redux!",e)}>
      <h1>React Redux</h1>
    </a>
  );
}

export default Header;
