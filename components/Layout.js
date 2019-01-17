import { default as Head } from "./Meta";
import Header from "./header";
import Footer from "./footer";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <div>
      <Head />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};

const Main = styled.main`
  height: 100vh;
`;

export default Layout;
