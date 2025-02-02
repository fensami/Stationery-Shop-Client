// import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AllProductsDashboard from "../pages/admin/adminProductMangement/AllProductsDashboard";
import UpdateProduct from "../pages/admin/adminProductMangement/UpdateProduct";
import CreateStationeryProduct from "../pages/products/CreateStationeryProduct";
// import { NavLink } from "react-router-dom";
// type TRoute = {
//   path: string;
//   element: ReactNode;
// };

// type TSidebarItem = {
//   key: string;
//   label: ReactNode;
//   children?: TSidebarItem[];
// };
export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Product Management",
    children: [
      {
        name: "Create S. Product",
        path: "create-product",
        element: <CreateStationeryProduct />,
      },
      {
        name: "Products",
        path: "stationery-all-product",
        element: <AllProductsDashboard />,
      },
      {
        name: "update-products",
        path: "update-product/:id",
        element: <UpdateProduct />,
      },
    ],
  },
];

// Row Program
// export const adminRoutes = adminPaths.reduce((acc: TRoute[], item) => {
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }
//   if (item.children) {
//     item.children.forEach((child) => {
//       acc.push({
//         path: child.path,
//         element: child.element,
//       });
//     });
//   }
//   //   acc.push(item);
//   return acc;
// }, []);

// export const adminSidebarItems = adminPaths.reduce(
//   (acc: TSidebarItem[], item) => {
//     if (item.path && item.name) {
//       acc.push({
//         key: item.name,
//         label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
//       });
//     }
//     if (item.children) {
//       acc.push({
//         key: item.name,
//         label: item.name,
//         children: item.children.map((child) => ({
//           key: child.name,
//           label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
//         })),
//       });
//     }
//     return acc;
//   },
//   []
// );

// export const adminPath = [
//   { path: "dashboard", element: <AdminDashboard></AdminDashboard> },
//   { path: "create-student", element: <CreateStudent></CreateStudent> },
//   { path: "create-faculty", element: <CreateFaculty></CreateFaculty> },
//   { path: "create-admin", element: <CreateAdmin></CreateAdmin> },
// ];
