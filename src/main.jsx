import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import TaskPage from "./components/TaskPage.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/task",
    element: <TaskPage></TaskPage>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
