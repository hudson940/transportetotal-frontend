import { createContext, useState, ReactNode } from 'react';

export interface UserContextType {
    isAuth: boolean;
    updateAuth: (isAuth: boolean) => void;
    validateToken: () => void
  }

// Define el contexto con el tipo o null como valor inicial
export const AuthContext = createContext<UserContextType | null>(null);

interface Props {
  children: ReactNode;
}

export const AuthProvider = ({ children }:Props) => {
  const [user, setUser] = useState({isAuth: false});
  
  const updateAuth =(isAuth: boolean) => {
    setUser({ isAuth: isAuth });
  };
  const validateToken =() => {
     const token = localStorage.getItem('token');
     if(token){
        updateAuth(true)
     }
  };

  return (
    <AuthContext.Provider value={{ ...user, updateAuth,validateToken }}>
      {children}
    </AuthContext.Provider>
  );
};