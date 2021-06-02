import React, { createContext, useState, useEffect } from "react";
import { data } from "../services/api";

export const AuthContext = createContext({});

export const AuthProvider = (props) => {
  const [user, setUser] = useState(null);

  const signIn = (email, password) => {
    const userExists = data.find((user) => {
      return user.email === email;
    });

    if (userExists) {
      if (userExists.password === password) {
        setUser(userExists);
      } else {
        alert("Invalid credentials!");
      }
    } else {
      alert("User not found!");
    }
  };

  useEffect(() => {
    console.log("hello world!");
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signIn,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
