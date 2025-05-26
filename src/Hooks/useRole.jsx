// Hooks/useRole.js
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

const useRole = () => {
  const { user, loader } = useContext(AuthContext);

  let role = null;

  if (user?.email === import.meta.env.VITE_ADMIN_EMAIL) {
    role = "admin";
  } else if (user?.email === import.meta.env.VITE_MODERATOR_EMAIL) {
    role = "moderator";
  } else if (user?.email) {
    role = "user";
  }

  return { role, user, userId: user?.uid, loader };
};

export default useRole;
