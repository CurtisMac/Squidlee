import App, { Container } from "next/app";
import { ThemeProvider } from "styled-components";

import Layout from "../components/Layout";
import GlobalStyle from "../components/styles/GlobalStyle";
import { MainTheme } from "../components/styles/Themes";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <ThemeProvider theme={MainTheme}>
          <React.Fragment>
            <GlobalStyle />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </React.Fragment>
        </ThemeProvider>
      </Container>
    );
  }
}

export default MyApp;
