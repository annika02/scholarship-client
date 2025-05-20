import { useState } from "react";

const useCreateUser = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const createUser = (user) => {
    fetch("http://localhost:5000/create-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => setError(err.message || "An error occurred"));
  };

  return { createUser, data, error };
};

export default useCreateUser;
