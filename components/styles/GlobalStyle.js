import { createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  body {
    background-image: ${props => props.theme.gradient};
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
