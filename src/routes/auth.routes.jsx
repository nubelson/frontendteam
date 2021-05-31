import { Route } from "react-router-dom";
import SignIn from "../pages/Auth/SignIn";

const AuthRoutes = () => {
  return <Route path="/" exact component={SignIn} />;
};

export default AuthRoutes;
