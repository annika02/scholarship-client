import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AllUser = () => {
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();

  // 1. Get current user's role using /users/:email
  useEffect(() => {
    if (!user?.email) return;

    fetch(`https://scholarship-server-beta.vercel.app/users/${user.email}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch user role");
        return res.json();
      })
      .then((data) => {
        setUserRole(data?.role);
        if (data?.role !== "admin") {
          toast.error("Access denied. Admins only.");
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        toast.error("Unauthorized access");
        navigate("/dashboard");
      });
  }, [user, navigate]);

  // 2. Fetch all users if admin
  useEffect(() => {
    if (userRole !== "admin") return;

    setLoading(true);
    fetch(
      `https://scholarship-server-beta.vercel.app/all-users?email=${user?.email}`
    )
      .then((res) => {
        if (res.status === 403) throw new Error("Forbidden: Not an admin");
        return res.json();
      })
      .then((data) => setUsers(data))
      .catch((err) => {
        toast.error(err.message);
        navigate("/dashboard");
      })
      .finally(() => setLoading(false));
  }, [userRole, user, navigate]);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this user?")) return;

    try {
      const res = await fetch(
        `https://scholarship-server-beta.vercel.app/delete-user/${id}?email=${user.email}`,
        { method: "DELETE" }
      );
      if (!res.ok) throw new Error("Delete failed");
      toast.success("User deleted");
      setUsers((prev) => prev.filter((u) => u._id !== id));
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleRoleUpdate = async (e, id) => {
    const newRole = e.target.value;

    try {
      const res = await fetch(
        `https://scholarship-server-beta.vercel.app/update-role/${id}?role=${newRole}&email=${user.email}`,
        { method: "PATCH" }
      );
      if (!res.ok) throw new Error("Update failed");
      toast.success("Role updated");
      setUsers((prev) =>
        prev.map((u) => (u._id === id ? { ...u, role: newRole } : u))
      );
    } catch (err) {
      toast.error(err.message);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Manage Users</h1>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user._id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {user.userName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.userEmail}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <select
                    onChange={(e) => handleRoleUpdate(e, user._id)}
                    value={user.role}
                    className="border rounded px-2 py-1"
                  >
                    <option value="user">User</option>
                    <option value="moderator">Moderator</option>
                    <option value="admin">Admin</option>
                  </select>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-red-500">
                  <button onClick={() => handleDelete(user._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
