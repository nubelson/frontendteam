import { Route } from "react-router-dom";
import Home from "../pages/App";
import AppLayout from "../components/Layout/App";

const AppRoutes = () => {
  return (
    <AppLayout>
      <Route path="/" exact component={Home} />
    </AppLayout>
  );
};

export default AppRoutes;
