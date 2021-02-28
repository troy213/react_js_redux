import React from 'react';

function Footer(props){
  const date = new Date();
  const x = date.getFullYear();

  return(
    <p>{props.foot} @{x}</p>
  );
}

export default Footer;
