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
        const { id, email } = userExists;

        const loggedUser = {
          id,
          email,
        };

        setUser(loggedUser);
        localStorage.setItem("@Auth:user", JSON.stringify(loggedUser));
      } else {
        alert("Invalid credentials!");
      }
    } else {
      alert("User not found!");
    }
  };

  const signOut = () => {
    setUser(null);
    localStorage.clear();
  };

  const searchLoggedUser = () => {
    const userExists = localStorage.getItem("@Auth:user");

    if (userExists) {
      setUser(JSON.parse(userExists));
    }
  };

  useEffect(() => {
    searchLoggedUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signIn,
        signOut,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
