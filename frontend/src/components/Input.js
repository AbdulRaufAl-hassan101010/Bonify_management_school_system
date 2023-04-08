import { useState } from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  width: 100%;
  input {
    width: 100%;
    padding: 1.6rem;
    margin-top: 1rem;
    border: 0.01rem solid #ccc;
    outline: 0.01rem solid var(--secondary-color);
    border-radius: 0.5rem;
    font-family: var(--primary-font);
  }
`;

const Input = (props) => {
  const inputHandler = (e) => {
    if (props.value !== undefined) {
      props.setValue(e.target.value);
    }
  };

  return (
    <InputContainer>
      {props.label && <label>{props.label}</label>}
      <input value={props.value} onChange={inputHandler} />
    </InputContainer>
  );
};

export default Input;
