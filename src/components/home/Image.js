import React, { useContext } from 'react';
import { imageContext } from './App';

const Image = (props) => {
  const {link} = useContext(imageContext);
  return(
    <img src={link} alt="React Redux" width={props.lbr} />
  );
}

export default Image;
