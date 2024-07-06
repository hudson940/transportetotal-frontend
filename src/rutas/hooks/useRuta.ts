import { useEffect, useState } from "react";
import { useForm } from "../../hooks/userForm";
import { Ruta } from "../interfaces/ruta.interface";
import { createRuta, getRutas } from "../data/rutas.data";


export const useRutas = () => {
  const { handleChange, validator, values } = useForm({
    ciudad_destino: "",
    ciudad_origen: "",
    distancia: 0,
  });
  const [openModal, setOpenModal] = useState(false);
  const [rutas, setRutas] = useState<Ruta[]>([]);

  const create = async () => {
    try {
      const response = await createRuta({
        ciudad_destino: values.ciudad_destino,
        ciudad_origen: values.ciudad_origen,
        distancia: values.distancia,
      });
      if (!response) {
        alert("Error al crear el ruta");
      }
      await setRutasNews();
      setOpenModal(false);
    } catch (error) {
      alert("Error al crear el ruta");
    }
  };

  const setRutasNews = async () => {
    const rutas = await getRutas();
    setRutas(rutas);
  };
  

  useEffect(() => {
    setRutasNews();
  }, []);

  return {
    openModal,
    validator,
    values,
    rutas,
    handleChange,
    setOpenModal,
    create,
  };
};
