import { http } from "../../axios";
import { Gasto } from "../interfaces/gastos.interface";
import { RegisterGasto } from "../interfaces/register-gasto";
import { RegisterViaje } from "../interfaces/register-viaje.interface";
import { Viaje } from "../interfaces/viaje.interface";



export const createViaje = async (viaje: RegisterViaje) => {
  try {
    const response = await http.post("/viajes", viaje);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const getViajes = async () => {
    try {
      const response = await http.get<Viaje[]>("/viajes");
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const getViaje = async (id: number) => {
    try {
      const response = await http.get<Viaje>(`/viajes/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };


  export const addGasto = async (gasto: RegisterGasto) => {
    try {
      const response = await http.post<Gasto>(`/viajes/add_gasto`,gasto);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
