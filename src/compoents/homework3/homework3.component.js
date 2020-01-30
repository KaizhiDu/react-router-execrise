import React from "react";
import { Route, Switch } from "react-router-dom";
import Problems from "./Problems.compnent";
import ProblemDetail from "./ProblemDetail.component";


const Homework3 = ({match}) => {

  return (
    <Switch>
      <Route exact path={`${match.url}/`} component={Problems}/>
      <Route path={`${match.url}/:id`} component={ProblemDetail}/>
    </Switch>
  );
};

export default Homework3;