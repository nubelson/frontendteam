import Header from "../../Header";
import Footer from "../../Footer";
import { Container } from "./styles";

const AppLayout = (props) => {
  return (
    <Container>
      <Header />
      {props.children}
      <Footer />
    </Container>
  );
};

export default AppLayout;
