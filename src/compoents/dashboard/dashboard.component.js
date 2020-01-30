import React from "react";

const Dashboard = ({history}) => {
  return (
    <div>
      <button onClick={() => history.push('/hm1')}>Homework1</button>
      <button onClick={() => history.push('/hm2')}>Homework2</button>
    </div>
  );
};

export default Dashboard;