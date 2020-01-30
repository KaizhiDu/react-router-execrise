import React, { useState } from "react";
import { Redirect } from 'react-router-dom';

const Login = ({match, isLogin}) => {

  const uu = {
    username: 'dukaizhi',
    password: '123456'
  };

  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const [login, setLogin] = useState(0);

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    if (user.password == uu.password && user.username == uu.username) setLogin(1);
    else {
      alert("login fail");
      setLogin(2);
      setUser({username: '', password: ''});
    }

  };

  return (
    <div>
      {login === 1 && <Redirect to={{pathname: `${match.url}/users`}}/>}
      {login === 2 && <Redirect to={{pathname: `${match.url}`}}/>}
      <form onSubmit={handleSubmit}>
        username:
        <input name='username' type='text' onChange={handleInputChange}/>
        password:
        <input name='password' type='password' onChange={handleInputChange}/>
        <button>Submit</button>
      </form>
    </div>


  );
};

export default Login;