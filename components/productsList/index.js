import styled from "styled-components";
import { withRouter } from "next/router";
import SearchBar from "../modules/SearchBar";
import SelectionBar from "./SelectionBar";

class ProductsList extends React.Component {
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
        <p>{this.props.router.query.category}</p>
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

export default withRouter(ProductsList);
