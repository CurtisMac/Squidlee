import { createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const GlobalStyle = () => {
  return (
    <React.Fragment>
      <Normalize />
      <GlobalStyles />
    </React.Fragment>
  );
};

export default GlobalStyle;
