import React, { createContext, useContext, useState , useEffect} from 'react';
const AuthContext = createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [course, setCourse] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };


  useEffect(()=>{
  },[user , course])

  return (
    <AuthContext.Provider value={{ user, login, logout , course, setCourse }}>
      {children}
    </AuthContext.Provider>
  );
};
