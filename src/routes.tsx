import { createBrowserRouter } from "react-router-dom";
import { Login } from "./login/views/Login";
import { PrivateRoute } from "./ProtectRoute";
import { Register } from "./register/views/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <PrivateRoute><h1>hola</h1></PrivateRoute>,
  },
]);
