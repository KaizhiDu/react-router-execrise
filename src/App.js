import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from "./compoents/dashboard/dashboard.component";
import Homework1 from "./compoents/homework1/homework1.component";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/hm1' component={Homework1}/>
      </Switch>
    </div>
  );
}

export default App;
