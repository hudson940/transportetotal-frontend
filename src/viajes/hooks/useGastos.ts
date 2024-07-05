import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addGasto, getViaje } from "../data/viajes.data";
import { Gasto } from "../interfaces/gastos.interface";
import { useForm } from "../../hooks/userForm";

export const useGastos = () => {
  const { id } = useParams();
  const [gastos, setGastos] = useState<Gasto[]>([]);
  const [openModal, setOpenModal] = useState(false);

  const { values, handleChange } = useForm({
    monto: 0,
    nombre: "",
  });

  const getViajeWithGastos = async () => {
    if (!id) {
      return;
    }
    const viaje = await getViaje(Number(id));
    setGastos(viaje.gastos);
  };

  const create = async () => {
    try {
      const response = await addGasto({
        monto: values.monto,
        nombre: values.nombre,
        id_viaje: Number(id),
      });
      if (!response) {
        alert("Ocurrio un error al crear el gasto");
      }
      setOpenModal(false);
      await getViajeWithGastos();
    } catch (error) {
      alert("Ocurrio un error al crear el gasto");
    }
  };

  useEffect(() => {
    if (id) {
      getViajeWithGastos();
    }
  }, [id]);

  return {
    id,
    openModal,
    values,
    gastos,
    handleChange,
    setOpenModal,
    create,
  };
};
