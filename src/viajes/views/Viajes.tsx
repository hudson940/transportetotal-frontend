import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import styles from "./../css/viajes.module.css";
import { useViajes } from "../hooks/useViajes";

export const Viajes = () => {
  const {
    openModal,
    values,
    viajes,
    selectVehiculos,
    selectRutas,
    handleChange,
    setOpenModal,
    create,
    navigate,
  } = useViajes();

  return (
    <div>
      <header className={styles.header}>
        <h1>Viajes</h1>
        <Button onClick={() => setOpenModal(true)}>Crear viaje</Button>
      </header>
      <section className={styles.table}>
        <TableContainer>
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>id</Th>
                <Th>Vehiculo</Th>
                <Th>Ruta</Th>
                <Th>Distancia(Km)</Th>
                <Th>Fecha</Th>
                <Th>Gastos</Th>
              </Tr>
            </Thead>
            <Tbody>
              {viajes.map((viaje) => (
                <Tr key={viaje.id}>
                  <Td>{viaje.id}</Td>
                  <Td>{viaje.vehiculo.placa}</Td>
                  <Td>
                    {viaje.ruta.ciudadOrigen} - {viaje.ruta.ciudadDestino}
                  </Td>
                  <Td>{viaje.distanciaRecorrida}</Td>
                  <Td>{viaje.fecha}</Td>
                  <Td>
                    <Button
                      onClick={() => navigate(`/home/viaje-gastos/${viaje.id}`)}
                    >
                      Ver Gastos
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </section>
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Crear Viaje</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form className={styles.form}>
              <Input
                placeholder="distancia recorrida"
                name="distancia_recorrida"
                value={values.distancia_recorrida}
                onChange={handleChange}
              />
              <Input
                placeholder="fecha"
                name="fecha"
                type="date"
                value={values.fecha}
                onChange={handleChange}
              />
              <Select
                placeholder="Selecione el Vehiculo"
                value={values.id_vehiculo}
                name="id_vehiculo"
                onChange={handleChange}
              >
                <option value={0}>Selecione Vehiculo</option>
                {selectVehiculos.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.nombre}
                  </option>
                ))}
              </Select>
              <Select
                placeholder="Selecione la ruta"
                value={values.id_ruta}
                name="id_ruta"
                onChange={handleChange}
              >
                <option value={0}>Selecione la ruta</option>
                {selectRutas.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.nombre}
                  </option>
                ))}
              </Select>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => setOpenModal(false)}
            >
              Cerrar
            </Button>
            <Button variant="ghost" onClick={() => create()}>
              Crear
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
