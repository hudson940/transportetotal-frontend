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
  import styles from "./../css/rutas.module.css";
import { useRutas } from "../hooks/useRuta";

  
  export const Rutas = () => {
    const { openModal, values, rutas, handleChange, setOpenModal, create } =
      useRutas();
  
    return (
      <div>
        <header className={styles.header}>
          <h1>Rutas</h1>
          <Button onClick={() => setOpenModal(true)}>Crear Ruta</Button>
        </header>
        <section className={styles.table}>
          <TableContainer>
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th>id</Th>
                  <Th>Ciudad Origen</Th>
                  <Th>Ciudad Destino</Th>
                  <Th>Distancia</Th>
                </Tr>
              </Thead>
              <Tbody>
                {rutas.map((ruta) => (
                  <Tr key={ruta.id}>
                    <Td>{ruta.id}</Td>
                    <Td>{ruta.ciudadOrigen}</Td>
                    <Td>{ruta.ciudadDestino}</Td>
                    <Td>{ruta.distancia}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </section>
        <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Crear Ruta</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <form className={styles.form}>
                <Input
                  placeholder="ciudad origen"
                  name="ciudad_origen"
                  value={values.ciudad_origen}
                  onChange={handleChange}
                />
                <Input
                  placeholder="ciudad destino"
                  name="ciudad_destino"
                  value={values.ciudad_destino}
                  onChange={handleChange}
                />
                <Input
                  placeholder="distancia"
                  name="distancia"
                  value={values.distancia}
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
  