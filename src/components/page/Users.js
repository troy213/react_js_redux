import React, { useState, useEffect } from 'react';

const url = "https://api.github.com/users";



const Users = (props) => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  }

  useEffect(()=>{
    getUsers();
  }, []);

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
