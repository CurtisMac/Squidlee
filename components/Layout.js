import { default as Head } from "./Meta";
import Header from "./header";
import Footer from "./footer";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Head />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </React.Fragment>
  );
};

const Main = styled.main`
  height: 80vh;
`;

export default Layout;
