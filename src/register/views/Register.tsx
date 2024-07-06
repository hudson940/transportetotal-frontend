import { Button, Card, CardBody, CardHeader, Input } from "@chakra-ui/react";
import styles from "./../css/register.module.css";
import { useRegister } from "../hooks/useRegister";


export const Register = () => {
  const {values,handleChange,handleSubmit,registerUser,navigate} = useRegister();

  return (
    <form className={styles.container} onSubmit={(e) => handleSubmit(e, registerUser)}>
      <Card className={styles.login}>
        <CardHeader>Registrar</CardHeader>
        <CardBody className={styles.body}>
          <Input
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
          />
          <Input
            name="name"
            placeholder="Nombre"
            value={values.name}
            onChange={handleChange}
          />
          <Input
            name="password"
            type="password"
            placeholder="Contraseña"
            value={values.password}
            onChange={handleChange}
          />
          <Button colorScheme="blue" type="submit">
            Registrar
          </Button>
          <Button colorScheme="red" onClick={() => navigate("/")}>
            Iniciar Sesion
          </Button>
        </CardBody>
      </Card>
    </form>
  );
};
