import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./routes/routes.tsx";
import { RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <Home /> */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
