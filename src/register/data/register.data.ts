import { http } from "../../axios";
import { RegisterResponse } from "../../login/interfaces/register-response.interface";
import { UserRegister } from "../../login/interfaces/user-register.interface";

export const register = async (user: UserRegister) => {
    try {
      const response = await http.post<RegisterResponse>("/auth/signup", user);
      if (!response.data) {
        throw new Error("No se pudo registrar el usuario");
      }
      return response.data;
    } catch (error: any) {
      alert(error.message);
      throw error;
    }
  };