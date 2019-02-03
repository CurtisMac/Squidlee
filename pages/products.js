import styled from "styled-components";

import { default as Head } from "../components/Meta";
import Header from "../components/header/index";
import Footer from "../components/footer/index";
import ProductsList from "../components/productsList";

const Products = () => {
  return (
    <React.Fragment>
      <Head title={"Products"} />
      <Header />
      <Container>
        <ProductsList />
      </Container>
      <Footer />
    </React.Fragment>
  );
};

const Container = styled.div`
  min-height: 85vh;
`;

export default Products;
