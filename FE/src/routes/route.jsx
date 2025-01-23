import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";

export const routes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
];
