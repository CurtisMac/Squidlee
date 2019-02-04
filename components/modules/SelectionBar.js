import React, { Component } from "react";
import styled from "styled-components";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      make: "",
      model: ""
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({ query: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    alert(this.state.query);
    this.setState({ query: "" });
  }

  render() {
    return (
      <FlexParent onSubmit={this.handleSubmit} className={this.props.className}>
        <Label>Select:</Label>
        <Selector name="make">
          <option value="canon">Canon</option>
          <option value="epson">Epson</option>
          <option value="lexmark">Lexmark</option>
          <option value="brother">Brother</option>
          <option value="hp">HP</option>
        </Selector>
        <Selector name="model">
          <option value="pixma922">Pixma MX922</option>
          <option value="pixmamx722">Pixma MX122</option>
          <option value="pixmamx722">Pixma MX222</option>
          <option value="pixmamx722">Pixma MX322</option>
          <option value="pixmamx722">Pixma MX422</option>
          <option value="pixmamx722">Pixma MX522</option>
          <option value="pixmamx722">Pixma MX622</option>
          <option value="pixmamx722">Pixma MX722</option>
          <option value="pixmamx722">Pixma MX822</option>
          <option value="pixmamx722">Pixma MX922</option>
          <option value="pixmamx722">Pixma MX1022</option>
          <option value="pixmamx722">Pixma MX1122</option>
          <option value="pixmamx722">Pixma MX1222</option>
          <option value="pixmamx722">Pixma MX1322</option>
          <option value="pixmamx722">Pixma MX1422</option>
          <option value="pixmamx722">Pixma MX1522</option>
        </Selector>
      </FlexParent>
    );
  }
}

const FlexParent = styled.form`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.theme.primary};
  height: 3rem;
  border-radius: 3px;
  padding: 0 1.5rem;
`;

const Label = styled.h3`
  color: white;
`;

const Selector = styled.select`
  border: solid 2px ${props => props.theme.complement};
  border-radius: 20px;

  padding: 5px;
`;

export default SearchBar;
