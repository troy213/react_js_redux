import React from 'react';

const Header = (props) => {
  const handlePesan = (value,e) => {
    e.preventDefault();
    alert(value);
  }

  var x = "Header";
  return(
    <>
      <a href="/" onClick={e => handlePesan("Header",e)} >
        <h1>{x} {props.head}</h1>
      </a>
    </>
  );
}

export default Header;
