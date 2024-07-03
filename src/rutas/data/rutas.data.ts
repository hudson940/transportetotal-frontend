import { http } from "../../axios";

import { RegisterRuta } from "../interfaces/register.interface";
import { Ruta } from "../interfaces/ruta.interface";


export const createRuta = async (ruta: RegisterRuta) => {
  try {
    const response = await http.post("/rutas", ruta);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const getRutas = async () => {
    try {
      const response = await http.get<Ruta[]>("/rutas");
      return response.data;
    } catch (error) {
      throw error;
    }
  };
