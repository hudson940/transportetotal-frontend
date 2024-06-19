import { createBrowserRouter } from "react-router-dom";
import { Login } from "./login/views/Login";
import { PrivateRoute } from "./ProtectRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <PrivateRoute><h1>hola</h1></PrivateRoute>,
  },
]);
