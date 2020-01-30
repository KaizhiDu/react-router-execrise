import React from "react";

const UserDetail = ({user}) => {
  return (
    <>
      {user?(
        <ul>
          <li>Name: {user.login}</li>
          <li>Location: {user.location}</li>
          <li>Following: {user.following}</li>
          <li>Followers: {user.follpwers}</li>
        </ul>
      ):"no user show"}
    </>
  );
};

export default UserDetail;