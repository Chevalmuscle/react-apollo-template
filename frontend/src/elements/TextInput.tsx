import React from "react";
import styled from "styled-components";

type InputProps = {
  placeholder?: string;
};

export const Input = styled.input<InputProps>`
  font-size: 0.75rem;
  padding: 12px;
  width: 100%;
  border: 1px solid black;
  border-radius: 5px;
`;

export function TextInput(props: any) {
  const { label, ...other } = props;
  if (typeof label !== "string") {
    throw new Error("label prop must be of type string in TextInput");
  }
  return (
    <div>
      <label>{label}</label>
      <Input {...other} />
    </div>
  );
}
