import { Button } from "@chakra-ui/react";
import styles from "./../css/home.module.css";
import { Outlet } from "react-router-dom";
import { useHome } from "../hooks/useHome";

export const Home = () => {
  const { navigate } = useHome();

  return (
    <div className={styles.container}>
      <nav>
        <h3>Menu</h3>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <span>{localStorage.getItem("userName") ?? "Nombre de usuario"}</span>
          <Button>Cerrar sesión</Button>
        </div>
      </nav>
      <main>
        <div className={styles.navbar}>
          <span onClick={() => navigate("viajes")}>Viajes</span>
          <span onClick={() => navigate("vehiculos")}>Vehiculos</span>
          <span onClick={() => navigate("rutas")}>Rutas</span>
        </div>
        <section style={{padding: 20}}>
          <Outlet />
        </section>
      </main>
    </div>
  );
};
