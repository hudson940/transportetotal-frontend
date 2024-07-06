import { useNavigate } from "react-router-dom";
import { UserRegister } from "../../login/interfaces/user-register.interface";
import { register } from "../data/register.data";
import { useForm } from "../../hooks/userForm";

export const useRegister = () => {
  const { values, validator, handleSubmit, handleChange } =
    useForm<UserRegister>({
      email: "",
      password: "",
      name: "",
    });
  const navigate = useNavigate();

  const registerUser = async (values: UserRegister, valid: boolean) => {
    try {
      if (!valid) {
        return;
      }
      const response = await register(values);
      if (!response) {
        alert("Error al registrar");
      }
      alert("Usuario Registrado");
      navigate("/");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return {
    values,
    validator,
    handleSubmit,
    handleChange,
    registerUser,
    navigate,
  };
};
