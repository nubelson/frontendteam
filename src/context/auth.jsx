import React, { createContext, useState, useEffect } from "react";
import { userData } from "../services/api";

export const AuthContext = createContext({});

export const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const [favoriteRepos, setFavoriteRepos] = useState(null);
  const [loading, setLoading] = useState(true);

  const signIn = (email, password) => {
    const userExists = userData.find((user) => {
      return user.email === email;
    });

    if (userExists) {
      if (userExists.password === password) {
        const { id, email } = userExists;

        const loggedUser = {
          id,
          email,
        };

        const favoritesMap = new Map();

        setTimeout(() => {
          setUser(loggedUser);
          localStorage.setItem("@Auth:user", JSON.stringify(loggedUser));
          localStorage.setItem(
            `@App:${email}`,
            JSON.stringify(Array.from(favoritesMap))
          );
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

  //? Repositories
  const starRepo = (user, repoId) => {
    const favoriteData = localStorage.getItem(`@App:${user}`);
    const favoriteMap = new Map(JSON.parse(favoriteData));

    if (favoriteMap.has(repoId)) {
      favoriteMap.set(repoId, !favoriteMap.get(repoId));
    } else {
      favoriteMap.set(repoId, true);
    }

    localStorage.setItem(
      `@App:${user}`,
      JSON.stringify(Array.from(favoriteMap))
    );
    setFavoriteRepos(favoriteMap);
  };

  useEffect(() => {
    const userExists = localStorage.getItem("@Auth:user");

    if (userExists) {
      const user = JSON.parse(userExists);

      setTimeout(() => {
        setUser(user);
        setLoading(false);
      }, 1000);

      const favoritesExists = localStorage.getItem(`@App:${user.email}`);

      if (favoritesExists) {
        const favoriteMap = new Map(JSON.parse(favoritesExists));

        setFavoriteRepos(favoriteMap);
      }
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
        starRepo,
        favoriteRepos,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
