import React from "react";
import { withRouter } from 'react-router-dom';

const User = ({datas, match}) => {

  const user = datas.find(data => data.id == match.params.id);

  console.log(match.params.id);
  console.log(datas);
  console.log(user);

  return (
    <div>
      <ul>
        <li>{datas.length>0&&user.login}</li>
      </ul>
    </div>
  );
};

export default withRouter(User);