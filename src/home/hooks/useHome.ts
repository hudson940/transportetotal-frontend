import { useNavigate } from "react-router-dom"

export const useHome = () => {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token');
        navigate('/',{replace: true})
    }

    return{
        navigate,
        logout
    }
}