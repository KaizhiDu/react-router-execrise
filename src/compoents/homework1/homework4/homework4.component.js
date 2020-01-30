import React, { useEffect, useState } from "react";
import axios from 'axios';
import UsersList from "./usersList.component";

const Homework4 = () => {

  const [usersList, setUserList] = useState([]);

  useEffect(() => {
    axios.get('https://api.github.com/users?per_page=100').then(res => {
      setUserList(res.data);
    });
  }, []);

  return (
    <>
      <UsersList datas={usersList}/>
    </>
  );
};

export default Homework4;