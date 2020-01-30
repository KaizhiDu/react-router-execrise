import React, { useState } from "react";
import UserDetail from "./homework4/userDetail.component";
import User from "./homework4/user.component";

const UsersList = ({datas}) => {

  const [user, setUser] = useState('');

  return (
    <>
      <div className='userList'>
        <table>
          {datas.map(data => {
            return <tr key={data.id} onClick={() => setUser(data)}><User data={data}/></tr>;
          })}
        </table>
      </div>
      <div className='showUser'>
        <UserDetail user={user}/>
      </div>
    </>
  );
};

export default UsersList;