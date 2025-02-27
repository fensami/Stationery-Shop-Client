import MyOrders from "../pages/products/MyOrders";
import UserDashboard from "../pages/user/UserDashboard";

export const userPaths = [
  {
    name: "User",
    path: "dashboard",
    element: <UserDashboard />,
  },
  {
    name: "My Orders",
    path: "my-orders",
    element: <MyOrders />,
  },
];
