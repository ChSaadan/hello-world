import React, { useEffect, useState } from "react";
import axios from "axios";

function WholeFile() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log(response);
      setData(response.data);
    });
  }, []);

  return (
    <div>
      Data is:
      <ul>
        {data.map((data) => (
          <li key={data.id}>{data.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default WholeFile;
