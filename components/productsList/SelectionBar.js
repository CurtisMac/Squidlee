import React, { useState, useContext, useEffect } from "react";
import Router from "next/router";
import styled from "styled-components";
import { AppContext } from "../AppProvider";

const SelectionBar = props => {
  const [make, setMake] = useState();
  const [currentModels, setCurrentModels] = useState();
  const [model, setModel] = useState();
  const [id, setId] = useState(0);
  const context = useContext(AppContext);
  const cats = context.state.categories;
  useEffect(() => {
    setCurrentModels(cats.find(e => e.name === make));
  }, [make]);

  useEffect(() => {
    if (model) {
      let selectedModel = currentModels.printers.find(e => e.name === model);
      let currentId = selectedModel.id;
      setId(currentId);
    }
  }, [model]);

  useEffect(() => {
    if (id) {
      const href = `/products?id=${id}`;
      const as = href;
      Router.push(href, as, { shallow: true });
    }
  }, [id]);

  const listMakes = cats.map(obj => (
    <option value={obj.name} key={obj.id}>
      {obj.name}
    </option>
  ));

  const listModel = currentModels
    ? currentModels.printers.map(obj => (
        <option value={obj.name} key={obj.id}>
          {obj.name}
        </option>
      ))
    : null;

  return (
    <Form className={props.className}>
      <Label>Select:</Label>
      <Selector name="make" onChange={e => setMake(e.target.value)}>
        <option value="make">Make:</option>
        {listMakes}
      </Selector>
      <Selector name="model" onChange={e => setModel(e.target.value)}>
        <option>Model:</option>
        {listModel}
      </Selector>
    </Form>
  );
};

const Form = styled.form`
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
  min-width: 120px;
  padding: 5px;
`;

export default SelectionBar;
