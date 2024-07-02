import { Button, Card, CardBody, CardHeader, Input } from "@chakra-ui/react";
import styles from "./../css/login.module.css";
import { useLogin } from "../hooks/useLogin";

export const Login = () => {
  const { email, password, setMail, setPassword, navigate, loginUser } =
    useLogin();

  return (
    <div className={styles.container}>
      <Card className={styles.login}>
        <CardHeader>Login</CardHeader>
        <CardBody className={styles.body}>
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setMail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button colorScheme="blue" onClick={() => loginUser()}>
            Iniciar
          </Button>
          <Button colorScheme="red" onClick={() => navigate("/register")}>
            Registrar
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};
