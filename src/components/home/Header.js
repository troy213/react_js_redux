import React, { useState } from 'react';

const Header = (props) => {
  const handlePesan = (value,e) => {
    e.preventDefault();
    alert(value);
  }

  const [title, setTitle] = useState('Welcome!');

  const handleMouseOver = () => {
    if ( title === "React Redux") {
      setTitle('Welcome!');
    } else {
      setTitle('React Redux');
    }
  }

  return(
    <a
      href="/"
      onClick={e => handlePesan("React Redux!",e)}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOver}
    >
      <h1>{title}</h1>
    </a>
  );
}

export default Header;
