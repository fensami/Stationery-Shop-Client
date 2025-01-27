import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
import Main from "../components/layout/main/Main";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      // { path: "about", element: <About></About> },
    ],
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
