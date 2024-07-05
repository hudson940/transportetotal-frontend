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
import { useGastos } from "../hooks/useGastos";
import styles from "./../css/viajes.module.css";

export const Gastos = () => {
  const { gastos, openModal, values, handleChange, setOpenModal, create } =
    useGastos();

  return (
    <div>
      <header className={styles.header}>
        <h1>Viajes</h1>
        <Button onClick={() => setOpenModal(true)}>Crear gasto</Button>
      </header>
      <section className={styles.table}>
        <TableContainer>
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>id</Th>
                <Th>Descripcion del Gasto</Th>
                <Th>Monto($)</Th>
              </Tr>
            </Thead>
            <Tbody>
              {gastos.map((gasto) => (
                <Tr key={gasto.id}>
                  <Td>{gasto.id}</Td>
                  <Td>{gasto.nombre}</Td>
                  <Td>{gasto.monto}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </section>
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Crear Gasto</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form className={styles.form}>
              <Input
                placeholder="descripcion del gasto"
                name="nombre"
                value={values.nombre}
                onChange={handleChange}
              />
              <Input
                placeholder="monto"
                name="monto"
                type="number"
                value={values.monto}
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
