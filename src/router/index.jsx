import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/Layouts/RootLayout/RootLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import NotFound from "../pages/NotFound/NotFound";
import Orders from "../pages/Orders/Orders";
import Products from "../pages/Products/Products";
import Users from "../pages/Users/Users";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
    ],
  },
]);
export default router;
