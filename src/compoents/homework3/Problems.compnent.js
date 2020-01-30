import React, { useEffect, useState } from "react";
import axios from 'axios';

const Problems = ({match, history}) => {

  const [datas, setData] = useState([]);

  useEffect(() => {
    axios.get('http://api.haochuan.io/oj/problems').then(res => setData(res.data.questions));
  }, []);

  return (
    <div>
      {datas.map(data => {
        return <div key={data.id} onClick={() => history.push(`${match.url}/${data.id}`)}>{data.title}</div>;
      })}
    </div>
  );
};

export default Problems;