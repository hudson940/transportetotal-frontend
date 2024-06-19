import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/useAuthContext";

export const useLogin = () => {
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { validateToken, isAuth } = useContext(AuthContext)!;

  const login = () => {
    if (email === "admin@gmail.com" && password === "123456") {
      localStorage.setItem("token", "shashajhad");
      validateToken();
      navigate("/home");
    } else {
      alert("Datos Invalidos");
    }
  };

  useEffect(() => {
    validateToken();
    if (isAuth) navigate("/home");
  }, [isAuth]);

  return { email, setMail, password, setPassword, login };
};
