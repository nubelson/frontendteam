import { useContext } from "react";
import { AuthContext } from "../context/auth";

const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("`useAuth` must be within a `AuthProvider`");
  }

  return context;
};

export default useAuth;
