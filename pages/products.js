import styled from "styled-components";

import { default as Head } from "../components/Meta";
import Header from "../components/header/index";
import Footer from "../components/footer/index";
import Layout from "../components/styles/Layout";
import ProductsList from "../components/productsList";

const Products = () => {
  return (
    <Layout title={"Products"} whiteBackground>
      <ProductsList />
    </Layout>
  );
};

export default Products;
