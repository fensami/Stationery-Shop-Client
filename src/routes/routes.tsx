import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layout/main/Main";
import Home from "../pages/home/Home";
import About from "../pages/home/About";
// import DashboardLayout from "../components/layout/dashboard/dashboardLayout";
// import { routeGenerator } from "../utils/routeGeneretor";
// import { adminPaths } from "./adminRoutes";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import ProductDetails from "../pages/products/ProductDetails";
import DashboardLayout from "../components/layout/dashboard/DashboardLayout";
import ProtectedRoutes from "../lib/ProtectedRoutes";
// import CreateStationeryProduct from "../pages/products/CreateStationeryProduct";

import { routeGenerator } from "../utils/routeGeneretor";
import { adminPaths } from "./admin.routes";
import ProductPage from "../pages/products/ProductPage";
import { userPaths } from "./user.routes";
import CartPage from "../pages/products/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/about", element: <About></About> },
      { path: "login", element: <Login></Login> },
      { path: "signup", element: <SignUp></SignUp> },
      { path: "productPage", element: <ProductPage></ProductPage> },
      { path: "cart", element: <CartPage></CartPage> },
      {
        path: "/productDetails/:id",
        element: <ProductDetails></ProductDetails>,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoutes role="admin">
        <DashboardLayout></DashboardLayout>
      </ProtectedRoutes>
    ),
    children: routeGenerator(adminPaths),
  },
  {
    path: "/user",
    element: (
      <ProtectedRoutes role="user">
        <DashboardLayout></DashboardLayout>
      </ProtectedRoutes>
    ),
    children: routeGenerator(userPaths),
  },

  // {
  //   path: "/admin",
  //   element: (
  //     <ProtectedRoutes role="admin">
  //       <App></App>
  //     </ProtectedRoutes>
  //   ),
  //   children: routeGenerator(adminPaths),
  // },
]);

export default router;
