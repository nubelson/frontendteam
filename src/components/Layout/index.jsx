import GlobalStyles from "../../styles/global";

const Layout = (props) => {
  return (
    <>
      {props.children}
      <GlobalStyles />
    </>
  );
};

export default Layout;
