import React, { Component } from "react";
import styled from "styled-components";

import SearchBar from "../modules/SearchBar";

class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: {}
    };
  }

  render() {
    return <SpacedSearchBar />;
  }
}

const SpacedSearchBar = styled(SearchBar)`
  margin: 20px;
`;

export default ProductsList;
