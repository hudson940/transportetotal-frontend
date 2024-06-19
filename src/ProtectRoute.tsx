import { ReactNode, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./context/useAuthContext";

interface Props {
  children: ReactNode;
}

export const PrivateRoute = ({ children }: Props) => {

  const {isAuth} = useContext(AuthContext)!

  if (!isAuth) {
    return <Navigate to="/" replace />;
  }

  return children;
};
