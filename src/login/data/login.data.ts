import { http } from "../../axios";
import { RegisterResponse } from "../interfaces/register-response.interface";

export const login = async (email: string, password: string) => {
  try {
    const response = await http.post<{ token: string; expiresIn: number }>(
      "/auth/login",
      { email, password }
    );
    if (!response.data) {
      throw new Error("Error al ingresar");
    }
    return response.data;
  } catch (error: any) {
    alert(error.message);
    throw error;
  }
};