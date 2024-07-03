import { useEffect, useState } from "react";
import { useForm } from "../../hooks/userForm";
import { createVehiculo, getVehiculos } from "../data/vehiculo.data";
import { Vehiculo } from "../interfaces/vehiculo.interface";

export const useVehiculos = () => {
  const { handleChange, validator, values } = useForm({
    placa: "",
    modelo: "",
    marca: "",
    conductor: "",
  });
  const [openModal, setOpenModal] = useState(false);
  const [vehiculos, setVehiculos] = useState<Vehiculo[]>([]);

  const create = async () => {
    try {
      const response = await createVehiculo({
        placa: values.placa,
        modelo: values.modelo,
        marca: values.marca,
        conductor: values.conductor,
      });
      if (!response) {
        alert("Error al crear el vehículo");
      }
      await setVehiculosNew();
      setOpenModal(false);
    } catch (error) {
      alert("Error al crear el vehículo");
    }
  };

  const setVehiculosNew = async () => {
    const vehiculos = await getVehiculos();
    setVehiculos(vehiculos);
  }

  useEffect(() => {
    setVehiculosNew();
  }, []);

  return {
    openModal,
    validator,
    values,
    vehiculos,
    handleChange,
    setOpenModal,
    createVehiculo,
    create,
  };
};
