import Footer from "../../Footer";
import { Container } from "./styles";

const AppLayout = (props) => {
  return (
    <Container>
      {props.children}
      <Footer />
    </Container>
  );
};

export default AppLayout;
