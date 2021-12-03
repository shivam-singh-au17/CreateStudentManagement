import React from "react";

export const LoginContext = React.createContext();

export const LoginContextProvider = ({ children }) => {
  //   const [user, setUser] = React.useState("");
  const [role, setRole] = React.useState("");
  const adminDomain = ".masaischool.com";

  const roleHandler = (email) => {
    setRole(email.includes(adminDomain) ? "admin" : "user");
  };

  return (
    <LoginContext.Provider value={{ role, roleHandler }}>
      {children}
    </LoginContext.Provider>
  );
};
