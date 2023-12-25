// /App.jsx

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { backendURL } from "../appConstants";
import { updateUserRole } from "./store/slices/userRoleSlice";
import Navbar from "./Components/Navbar";

const App = () => {
  const dispatch = useDispatch();

  const userRole = useSelector((state) => {
    return state.userRole;
  });

  const [data, setData] = useState({});

  const fetchData = async () => {
    try {
      const response = await axios.get(backendURL);
      setData(response.data);
      dispatch(updateUserRole(response.data.role));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const loginUser = () => {
    dispatch(updateUserRole("user"));
  };

  console.log(data);

  return (
    <>
      <Navbar />
      <div className="text-3xl font-bold underline">{userRole}</div>
      <button onClick={loginUser}>Login</button>
    </>
  );
};

export default App;
