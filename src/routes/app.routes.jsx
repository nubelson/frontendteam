import { Route } from "react-router-dom";
import Home from "../pages/App";

const AppRoutes = () => {
  return <Route path="/home" exact component={Home} />;
};

export default AppRoutes;
