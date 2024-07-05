import { useEffect, useState } from "react";
import { useForm } from "../../hooks/userForm";
import { Viaje } from "../interfaces/viaje.interface";
import { createViaje, getViajes } from "../data/viajes.data";
import { getVehiculos } from "../../vehiculos/data/vehiculo.data";
import { getRutas } from "../../rutas/data/rutas.data";
import { useNavigate } from "react-router-dom";

export const useViajes = () => {
  const { handleChange, validator, values } = useForm({
    distancia_recorrida: 0,
    fecha: "",
    id_ruta: 0,
    id_vehiculo: 0,
  });
  const [openModal, setOpenModal] = useState(false);
  const [viajes, setViajes] = useState<Viaje[]>([]);
  const [selectVehiculos, setSelectVehiculos] = useState<
    { id: number; nombre: string }[]
  >([]);
  const [selectRutas, setSelectRutas] = useState<
    { id: number; nombre: string }[]
  >([]);
  
  const navigate = useNavigate();

  const create = async () => {
    try {
      const response = await createViaje({
        distancia_recorrida: values.distancia_recorrida,
        fecha: values.fecha,
        id_ruta: values.id_ruta,
        id_vehiculo: values.id_vehiculo,
      });
      if (!response) {
        alert("Error al crear el viaje");
      }
      await setViajesNew();
      setOpenModal(false);
    } catch (error) {
      alert("Error al crear el vehículo");
    }
  };

  const setViajesNew = async () => {
    const viajes = await getViajes();
    setViajes(viajes);
  };

  const getSelectorVehiculos = async () => {
    const vehiculos = await getVehiculos();
    setSelectVehiculos(
      vehiculos.map((vehiculo) => ({ id: vehiculo.id, nombre: vehiculo.placa }))
    );
  };

  const getSelectorRutas = async () => {
    const rutas = await getRutas();
    setSelectRutas(
      rutas.map((ruta) => ({
        id: ruta.id,
        nombre: `${ruta.ciudadOrigen}-${ruta.ciudadDestino}`,
      }))
    );
  };

  useEffect(() => {
    setViajesNew();
    getSelectorVehiculos();
    getSelectorRutas();
  }, []);

  return {
    openModal,
    validator,
    values,
    viajes,
    selectVehiculos,
    selectRutas,
    handleChange,
    setOpenModal,
    createViaje,
    create,
    navigate
  };
};
