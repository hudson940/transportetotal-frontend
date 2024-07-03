import { http } from "../../axios";
import { RegisterVehicule } from "../interfaces/register-vehicle";
import { Vehiculo } from "../interfaces/vehiculo.interface";

export const createVehiculo = async (vehiculo: RegisterVehicule) => {
  try {
    const response = await http.post("/vehiculos", vehiculo);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const getVehiculos = async () => {
    try {
      const response = await http.get<Vehiculo[]>("/vehiculos");
      return response.data;
    } catch (error) {
      throw error;
    }
  };
