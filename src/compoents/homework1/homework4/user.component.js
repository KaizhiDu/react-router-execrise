import React from "react";

const User = ({data}) => {

  return (
    <div>
      <td>{data.id}</td>
      <td>{data.login}</td>
      <td><img src={data.avatar_url} height="100" width="100"/></td>
    </div>
  );
};

export default User;