import React, { useEffect, useState } from "react";
import axios from "axios";

function EffectCode() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setData(response.data[0].title);
      console.log("API");
    });
  }, []);

  return <div>Data is: {data}</div>;
}

export default EffectCode;
