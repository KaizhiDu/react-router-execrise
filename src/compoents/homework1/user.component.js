import React from "react";
import { withRouter } from 'react-router-dom';

const User = ({datas, match}) => {

  const user = datas.find(data => data.id == match.params.id);

  return (
    <div>
      <ul>
        <li>{datas.length>0&&user.login}</li>
      </ul>
    </div>
  );
};

export default withRouter(User);