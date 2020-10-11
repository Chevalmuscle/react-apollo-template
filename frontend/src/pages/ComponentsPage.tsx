import React from "react";
import styled from "styled-components";
import { Button, TextInput } from "../elements";

const Wrapper = styled.ul`
  list-style: none;
  margin: 60px;
`;

const ComponentWrapper = styled.li`
  margin: 20px;
`;

export function ComponentsPage() {
  return (
    <Wrapper>
      <ComponentWrapper>
        <Button hasRippleEffect>light button</Button>
      </ComponentWrapper>
      <ComponentWrapper>
        <Button hasRippleEffect isDark>
          dark button
        </Button>
      </ComponentWrapper>
      <ComponentWrapper>
        <TextInput label="email" placeholder="yourname@example.com" type="email" />
      </ComponentWrapper>
      <ComponentWrapper>
        <TextInput label="password" placeholder="Password" type="password" />
      </ComponentWrapper>
    </Wrapper>
  );
}
