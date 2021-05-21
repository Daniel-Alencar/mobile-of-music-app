import React,{ createContext } from 'react';

interface AuthContextData {
  
}

const AuthContext = createContext({ signed: true });

export const AuthProvider: React.FC = ({ children }) => {
  return(
    <AuthContext.Provider value={{ signed: true }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;