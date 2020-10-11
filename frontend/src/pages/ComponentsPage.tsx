import React from "react";
import styled from "styled-components";
import { Button } from "../elements";

const Wrapper = styled.ul`
  list-style: none;
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
        <Button hasRippleEffect isDark>dark button</Button>
      </ComponentWrapper>
    </Wrapper>
  );
}
