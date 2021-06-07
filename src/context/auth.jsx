import React, { createContext, useState, useEffect } from "react";
import { data } from "../services/api";

export const AuthContext = createContext({});

export const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

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

        setTimeout(() => {
          setUser(loggedUser);
          localStorage.setItem("@Auth:user", JSON.stringify(loggedUser));
        }, 2000);
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

  useEffect(() => {
    const userExists = localStorage.getItem("@Auth:user");

    if (userExists) {
      setTimeout(() => {
        setUser(JSON.parse(userExists));
        setLoading(false);
      }, 1000);
    } else {
      setTimeout(() => {
        setUser(null);
        setLoading(false);
      }, 1000);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        loading,
        signIn,
        signOut,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
