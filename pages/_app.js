import App, { Container } from "next/app";
import Header from "../components/layout/Header";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Header />
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
