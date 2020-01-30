import React from "react";

const Dashboard = ({history}) => {
  return (
    <div>
      <button onClick={() => history.push('/hm1')}>Homework1</button>
    </div>
  );
};

export default Dashboard;