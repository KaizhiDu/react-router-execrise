import React, { useState } from "react";
import User from "./user.component";
import './homework4.styles.css';
import UserDetail from "./userDetail.component";

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