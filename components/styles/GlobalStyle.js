import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const GlobalStyle = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
    </React.Fragment>
  );
};

export default GlobalStyle;
