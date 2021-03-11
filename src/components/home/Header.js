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
    if (title === props.head) {
      setTitle("React Redux");
    } else {
      setTitle(props.head);
    }
  }

  return(
    <>
      <h1>
        <a
          href="/"
          onClick={e => handlePesan(title,e)}
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseOver}
        >
          {title}
        </a>
      </h1>
      <h4>{size} px</h4>
    </>
  );
}

export default Header;
