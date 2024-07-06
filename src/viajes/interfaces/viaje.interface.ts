import { Ruta } from "../../rutas/interfaces/ruta.interface";
import { Vehiculo } from "../../vehiculos/interfaces/vehiculo.interface";
import { Gasto } from "./gastos.interface";


export interface Viaje {
    id: number;
    vehiculo: Vehiculo;
    ruta: Ruta;
    fecha: string;
    distanciaRecorrida: number;
    gastos: Gasto[];
}