import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/useAuthContext";
import { login } from "../data/login.data";


export const useLogin = () => {
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginUser  = async () => {
    try {
      const {token} = await login(email, password);
      localStorage.setItem("token",token)
      navigate("/home")
    } catch (error: any) {
      alert ("Error al iniciar sesión")
    }
  }

  const { validateToken, isAuth } = useContext(AuthContext)!;

  

  useEffect(() => {
    validateToken();
    if (isAuth) navigate("/home");
  }, [isAuth]);

  return {
    email,
    password,
    setMail,
    setPassword,
    loginUser,
    navigate
  };
};
