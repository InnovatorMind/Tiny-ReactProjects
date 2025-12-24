import { createBrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./auth/Login";
import Register from "./auth/Register"
import DashboardLayout from "./layouts/DashboardLayout";
import DashboardHome from "./pages/DashboardHome";
import Profile from "./pages/Profile";
import AuthLayout from "./layouts/AuthLayout";
import ErrorPage from "./pages/ErrorPage";
import { requireAuth } from "./utils/auth";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <ErrorPage />, // 🌍 global fallback
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <ErrorPage />,
  },
  {
    element: <AuthLayout />,
    errorElement: <ErrorPage />, // 🔐 auth errors land here
    children: [
      {
        path: "/dashboard",
        loader: requireAuth, // loader
        element: <DashboardLayout />,
        errorElement: <ErrorPage />, // dashboard-specific
        children: [
          { index: true, element: <DashboardHome /> },
          { path: "profile", element: <Profile /> },
        ],
      },
    ],
  },
]);
