import React, { useState, useEffect } from 'react';

const Header = (props) => {
  const handlePesan = (value,e) => {
    e.preventDefault();
    alert(value);
  }

  const [title, setTitle] = useState(props.head);
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  }

  useEffect(()=>{
    window.addEventListener('resize', checkSize);
  }, []);

  const handleMouseOver = () => {
    if ( title === "React Redux") {
      setTitle(props.head);
    } else {
      setTitle('React Redux');
    }
  }

  return(
    <>
    <h1>
        <a
          href="/"
          onClick={e => handlePesan("React Redux!",e)}
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseOver}
        >
          {title}
        </a>
      </h1>
      <h3>{size} Px</h3>
    </>
  );
}

export default Header;
