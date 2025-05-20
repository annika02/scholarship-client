import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Layout/Root";
import Home from "./Pages/HomePage/Home";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import ScholarshipsDetails from "./Pages/ScholarshipsDetails/ScholarshipsDetails";
import AllScholarships from "./Pages/AllScholarshipsPage/AllScholarships";
import ErrorPage from "./Pages/ErrorPage/ErrorPage"; // Recommended to add
import DashboardLayout from "./Layout/DashboardLayout"; // Recommended for dashboard structure
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./Context/PrivateRoute";
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
      },
      {
        path: "/all-scholarships",
        element: (
          <PrivateRoute>
            <AllScholarships />
          </PrivateRoute>
        ),
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
            <ScholarshipsDetails />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          // You can add data loading here
          return fetch(`/api/scholarships/${params.id}`);
        },
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [],
  },
];

const router = createBrowserRouter(routes);

// Render the app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
