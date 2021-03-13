import React, { useState, useEffect } from 'react';

const url = "https://api.github.com/users";

const Users = (props) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false)

  //--async - await fetching format--
  // const getUsers = async () => {
  //   const response = await fetch(url);
  //   const users = await response.json();
  //   setUsers(users);
  // }
  //
  // useEffect(()=>{
  //   getUsers();
  // }, []);

  useEffect(()=>{
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setIsLoading(false);
          setIsError(true);
        }
      })
      .then((user) => {
        setUsers(user);
        setIsLoading(false);
      })
      .catch(err => console.log(err))
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return (
      <>
        <h2>404 Not Found</h2>
        <p>Error...</p>
      </>
    );
  }
  return(
    <>
      { users.map((value) => {
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
