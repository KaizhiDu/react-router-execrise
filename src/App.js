import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from "./compoents/dashboard/dashboard.component";
import Homework1 from "./compoents/homework1/homework1.component";
import Homework2 from "./compoents/homework2/homework2.component";
import Homework3 from "./compoents/homework3/homework3.component";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/hm1' component={Homework1}/>
        <Route path='/hm2' component={Homework2}/>
        <Route path='/hm3' component={Homework3}/>
      </Switch>
    </div>
  );
}

export default App;
