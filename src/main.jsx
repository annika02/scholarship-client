import { StrictMode, useContext } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import Root from "./Layout/Root";
import Home from "./Pages/HomePage/Home";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import ScholarshipsDetails from "./Pages/ScholarshipsDetails/ScholarshipsDetails";
import AllScholarships from "./Pages/AllScholarshipsPage/AllScholarships";
import ErrorPage from "./Pages/ErrorPage/ErrorPage"; // Recommended to add
import DashboardLayout from "./Layout/DashboardLayout"; // Recommended for dashboard structure
import AuthProvider, { AuthContext } from "./Context/AuthProvider";
import PrivateRoute from "./Context/PrivateRoute";
import AddScholarships from "./Pages/Dashboard/Admin/AddScholarships";
import ManageScholarships from "./Pages/Dashboard/Admin/ManageScholarships";
import Profile from "./Pages/Dashboard/Admin/Profile";
import ManageApplications from "./Pages/Dashboard/Admin/ManageApplications";
import AllUser from "./Pages/Dashboard/Admin/AllUser";
import Review from "./Pages/ScholarshipsDetails/Review";
import ManageReviews from "./Pages/Dashboard/Admin/ManageReviews";
// Create routes configuration
const routes = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />, // Add error handling
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("http://localhost:5000/"),
      },
      {
        path: "/all-scholarships",
        element: (
          <PrivateRoute>
            <AllScholarships />
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/all-data"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/scholarship-details/:id",
        element: (
          <PrivateRoute>
            {" "}
            <ScholarshipsDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/scholarship/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      // admin routes
      {
        path: "/dashboard",
        element: <Navigate replace to={"profile"} />,
      },
      {
        index: true,
        path: "profile",
        element: <Profile />,
      },
      {
        path: "add-scholarships",
        element: <AddScholarships />,
      },
      {
        path: "manage-scholarships",
        element: <ManageScholarships />,
      },
      {
        path: "manage-applications",
        element: <ManageApplications />,
      },
      {
        path: "manage-users",
        element: <AllUser />,
      },
      {
        path: "manage-reviews",
        element: <ManageReviews />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

// Render the app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  </StrictMode>
);
