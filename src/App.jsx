import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Routes from "./routes";

const App = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Layout>
  );
};

export default App;
