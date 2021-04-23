import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const Person = (props) => {
  const {name} = useParams();

  return (
    <>
      <h1>{name}</h1>
      <Link to="/users">back</Link>
    </>
  );
}

export default Person;
