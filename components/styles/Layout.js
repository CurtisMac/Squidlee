import styled from "styled-components";

import { default as Head } from "../Meta";
import Header from "../header/index";
import Footer from "../footer/index";

const Layout = props => {
  return (
    <React.Fragment>
      <Head title={props.title} />
      <Body whiteBackground={props.whiteBackground}>
        <Header noNav={props.noNav} whiteBackground={props.whiteBackground} />
        <Main>{props.children}</Main>
        {!props.noFooter && <Footer />}
      </Body>
    </React.Fragment>
  );
};

const Main = styled.main`
  max-width: 960px;
  margin: 0 auto;
`;

const Body = styled.div`
  background: ${props => (props.whiteBackground ? "white" : "transparent")};
`;

export default Layout;
