import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import { LoadingPage } from "../components/LoadingPage";

import { useAuth } from "../hooks";

const Routes = () => {
  const { signed, loading } = useAuth();

  if (loading) {
    return <LoadingPage />;
  }

  if (!signed) {
    return <AuthRoutes />;
  } else {
    return <AppRoutes />;
  }
};

export default Routes;
