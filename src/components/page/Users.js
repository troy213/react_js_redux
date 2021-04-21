import React, { useState, useEffect } from 'react';
import { useFetch } from '../../hooks/UseFetch';

const url = "https://api.github.com/users";

const Users = (props) => {
  const { isLoading, isError, data} = useFetch(url);

  if (isLoading) {
    return <h3>Loading...</h3>
  }
  if (isError) {
    return (
      <>
        <h3>404 Not Found</h3>
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
            <a href={html_url}>profile</a>
          </div>
        );
      })}
    </>
  );
}

export default Users;
