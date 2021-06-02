import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

import { useAuth } from "../hooks";

const Routes = () => {
  const { signed } = useAuth();

  if (!signed) {
    return <AuthRoutes />;
  } else {
    return <AppRoutes />;
  }
};

export default Routes;
