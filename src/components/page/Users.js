import React, { useState, useEffect } from 'react';
import Error from './Error';
import { useFetch } from '../../hooks/UseFetch';
import { Link } from 'react-router-dom';

const url = "https://api.github.com/users";

const Users = (props) => {
  const { isLoading, isError, data} = useFetch(url);

  if (isLoading) {
    return <h3>Loading...</h3>
  }
  if (isError) {
    return (
      <>
        <Error />
        <p>Error...</p>
      </>
    );
  }
  return(
    <>
      { data.map((value) => {
        const {login,id,avatar_url,html_url} = value;
        return(
          <div key={id}>
            <img src={avatar_url} alt={login} width="50px" className="avatar" />
            <h4>{login}</h4>
            <Link to={`/person/${login}`}>profile</Link>
          </div>
        );
      })}
    </>
  );
}

export default Users;
