import React from 'react';

function Footer(props) {
  const year = new Date();
  const x = year.getFullYear();
  return(
    <p>{props.foot} @{x}</p>
  );
}

export default Footer;
