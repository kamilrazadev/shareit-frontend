import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendURL } from "../appConstants";

const App = () => {
  const [data, setData] = useState("");

  const fetchData = async () => {
    await axios
      .get(backendURL)
      .then((response) => {
        setData(response.data.name);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  });

  console.log(data);

  return <div>App</div>;
};

export default App;
