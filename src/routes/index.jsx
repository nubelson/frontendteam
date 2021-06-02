import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

const Routes = () => {
  return (
    <>
      <AuthRoutes />
      <AppRoutes />
    </>
  );
};

export default Routes;
