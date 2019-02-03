import React, { Component } from "react";
import styled from "styled-components";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
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
        <Input
          type="text"
          placeholder="Search..."
          onChange={this.handleInput}
          value={this.state.query}
        />
        <Button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
              fill="#ffffff"
              stroke="#ffffff"
            />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </Button>
      </FlexParent>
    );
  }
}

const FlexParent = styled.form`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`;

const Input = styled.input`
  margin-left: 2rem;
  width: 100%;
  height: 2rem;
  padding-left: 1rem;
  font-size: 1.5rem;
  border-style: solid none solid solid;
  border-width: 1.5px;
  border-color: gray;
  border-radius: 20px 0 0 20px;
`;

const Button = styled.button`
  margin-right: 2rem;
  background: ${props => props.theme.gradient};
  border: none;
  border-radius: 0 20px 20px 0;
  padding: 0 20px;
  color: white;
`;

export default SearchBar;
