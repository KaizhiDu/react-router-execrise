import React, { useEffect, useState } from "react";
import { Switch, Route } from 'react-router-dom';
import HomePage from "./homepage.component";
import UserList from "./userList.componet";
import User from "./user.component";
import axios from "axios";

const Homework1 = ({match}) => {

  const [usersList, setUserList] = useState([]);

  useEffect(() => {
    axios.get('https://api.github.com/users?per_page=100').then(res => {
      setUserList(res.data);
    });
  }, []);

  return (
    <Switch>
      <Route exact path={`${match.path}/`} component={HomePage}/>
      <Route exact path={`${match.path}/users`} render={() => <UserList datas={usersList}/>}/>
      <Route path={`${match.path}/users/:id`} render={() => <User datas={usersList}/>}/>
</Switch>
)
  ;
};

export default Homework1;