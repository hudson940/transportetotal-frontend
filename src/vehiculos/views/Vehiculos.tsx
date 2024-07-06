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
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import styles from "./../css/vehiculos.module.css";
import { useVehiculos } from "../hooks/useVehiculos";

export const Vehiculos = () => {
  const { openModal, values, vehiculos, handleChange, setOpenModal, create } =
    useVehiculos();

  return (
    <div>
      <header className={styles.header}>
        <h1>Vehiculos</h1>
        <Button onClick={() => setOpenModal(true)}>Crear vehiculo</Button>
      </header>
      <section className={styles.table}>
        <TableContainer>
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>id</Th>
                <Th>Conductor</Th>
                <Th>Marca</Th>
                <Th>Modelo</Th>
                <Th>Placa</Th>
              </Tr>
            </Thead>
            <Tbody>
              {vehiculos.map((vehiculo) => (
                <Tr key={vehiculo.id}>
                  <Td>{vehiculo.id}</Td>
                  <Td>{vehiculo.conductor}</Td>
                  <Td>{vehiculo.marca}</Td>
                  <Td>{vehiculo.modelo}</Td>
                  <Td>{vehiculo.placa}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </section>
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Crear Vehiculo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form className={styles.form}>
              <Input
                placeholder="placa"
                name="placa"
                value={values.placa}
                onChange={handleChange}
              />
              <Input
                placeholder="marca"
                name="marca"
                value={values.marca}
                onChange={handleChange}
              />
              <Input
                placeholder="modelo"
                name="modelo"
                value={values.modelo}
                onChange={handleChange}
              />
              <Input
                placeholder="conductor"
                name="conductor"
                value={values.conductor}
                onChange={handleChange}
              />
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
