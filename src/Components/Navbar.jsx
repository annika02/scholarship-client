import React, { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const location = useLocation();

  const handleLogout = async () => {
    try {
      await signOutUser();
      toast.success("Signed out successfully");
    } catch (error) {
      toast.error("Error signing out");
    }
  };

  const navLinks = [
    { path: "/", label: "Home", end: true },
    { path: "/all-scholarships", label: "All Scholarships" },
    { path: "/dashboard/profile", label: "Dashboard" },
  ];

  const renderNavLink = ({ path, label, end = false }) => (
    <NavLink
      key={path}
      to={path}
      end={end}
      className={({ isActive }) => `
        px-4 py-2 rounded-lg transition-all duration-300
        ${
          isActive
            ? "bg-emerald-800 text-white font-medium shadow-inner"
            : "text-gray-800 hover:bg-emerald-50 hover:text-emerald-800"
        }
      `}
    >
      {label}
    </NavLink>
  );

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left side - Logo and mobile menu */}
          <div className="flex items-center">
            {/* Mobile menu button */}
            <div className="lg:hidden mr-2">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
                aria-label="Main menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <img
                src="/logo.png"
                alt="ScholarshipHub Logo"
                className="h-8 w-auto transition-transform group-hover:scale-105"
              />
              <span className="ml-2 text-xl font-semibold text-gray-900 hidden sm:block">
                ScholarshipHub
              </span>
            </Link>

            {/* Desktop navigation */}
            <div className="hidden lg:ml-8 lg:flex lg:space-x-2">
              {navLinks.map(renderNavLink)}
            </div>
          </div>

          {/* Right side - User actions */}
          <div className="flex items-center">
            {user ? (
              <div className="ml-4 relative">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <button
                      className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                      aria-label="User menu"
                    >
                      <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-emerald-100">
                        <img
                          className="h-full w-full object-cover"
                          src={
                            user.photoURL ||
                            "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
                          }
                          alt={user.displayName || "User avatar"}
                        />
                      </div>
                    </button>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors duration-200"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            ) : (
              <NavLink
                to="/register"
                className={({ isActive }) => `
                  ml-4 px-4 py-2 rounded-md shadow-sm text-sm font-medium
                  transition-colors duration-200
                  ${
                    isActive
                      ? "bg-emerald-700 text-white"
                      : "bg-emerald-600 text-white hover:bg-emerald-700"
                  }
                `}
              >
                Register
              </NavLink>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="lg:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map(renderNavLink)}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
