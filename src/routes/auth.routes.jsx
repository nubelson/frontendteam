import { Route } from "react-router-dom";
import AuthLayout from "../components/Layout/Auth";
import SignIn from "../pages/Auth/SignIn";

const AuthRoutes = () => {
  return (
    <AuthLayout>
      <Route path="/" exact component={SignIn} />
    </AuthLayout>
  );
};

export default AuthRoutes;
