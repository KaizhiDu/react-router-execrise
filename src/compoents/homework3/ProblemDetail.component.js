import React, { useEffect, useState } from "react";
import axios from "axios";

const ProblemDetail = ({match}) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://api.haochuan.io/oj/problems').then(res => setData(res.data.questions.find(question=>question.id==match.params.id)));
  }, []);

  console.log(match);
  return (
    <ul>
      <li>{data.id}</li>
      <li>{data.title}</li>
      <li>{data.content}</li>
    </ul>
  );
};

export default ProblemDetail;