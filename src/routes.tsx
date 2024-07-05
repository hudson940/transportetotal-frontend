import { createBrowserRouter } from "react-router-dom";
import { Login } from "./login/views/Login";
import { PrivateRoute } from "./ProtectRoute";
import { Register } from "./register/views/Register";
import { Home } from "./home/views/Home";
import { Vehiculos } from "./vehiculos/views/Vehiculos";
import { Rutas } from "./rutas/views/Ruta";
import { Viajes } from "./viajes/views/Viajes";
import { Gastos } from "./viajes/views/Gastos";

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
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
    children: [
      {
        path: "viajes",
        element: <Viajes/>,
      },
      {
        path: "vehiculos",
        element: <Vehiculos/>,
      },
      {
        path: "rutas",
        element: <Rutas/>,
      },
      {
        path: "viaje-gastos/:id",
        element: <Gastos />,
      }
    ]
  },
]);
