import React from "react";
import { Switch, Route } from 'react-router-dom';
import Login from "./login.component";
import UserList from "./userList.component";

const Homework2 = ({match}) => {
  return (
    <Switch>
      <Route exact path={`${match.url}/`} component={Login}/>
      <Route path={`${match.url}/users`} component={UserList}/>
    </Switch>
  );
};

export default Homework2;