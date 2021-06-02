import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import { AuthProvider } from "./context/auth";
import Routes from "./routes";

const App = () => {
  return (
    <AuthProvider>
      <Layout>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Layout>
    </AuthProvider>
  );
};

export default App;
