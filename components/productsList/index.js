import React, { Component } from "react";
import styled from "styled-components";

import SearchBar from "../modules/SearchBar";
import SelectionBar from "../modules/SelectionBar";

class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: {}
    };
  }

  render() {
    return (
      <Container>
        <SpacedSearchBar />
        <SpacedSelectionBar />
      </Container>
    );
  }
}
const Container = styled.div`
  min-height: 90vh;
`;
const SpacedSearchBar = styled(SearchBar)`
  margin: 20px;
`;
const SpacedSelectionBar = styled(SelectionBar)`
  margin: 0 20px 0 20px;
`;

export default ProductsList;
