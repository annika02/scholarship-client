import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Context/AuthProvider";

const useRole = () => {
  const [role, setRole] = useState("user");
  const [error, setError] = useState(null);
  const { user, loader } = useContext(AuthContext);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/users/${user.email}`)
        .then((res) => res.json())
        .then((data) => setRole(data.role))
        .catch((err) => setError(err));
    }
  }, [user?.email]);

  return { user, loader, role, error };
};

export default useRole;
