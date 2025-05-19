import React, { useEffect } from "react";
import Admin from "./Admin";
import User from "./User";
import Moderator from "./Moderator";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = false;
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);
  if (user === "admin") {
    return <Admin />;
  }
  if (user === "moderator") {
    return <Moderator />;
  }
  if (user === "user") {
    return <User />;
  }
};

export default Dashboard;
