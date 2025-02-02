import UserDashboard from "../pages/user/UserDashboard";

export const userPaths = [
  {
    name: "User",
    path: "dashboard",
    element: <UserDashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create A. Semester",
        path: "create-academic-semester",
        // element: <CreateStationeryProduct />,
      },
    ],
  },
];
