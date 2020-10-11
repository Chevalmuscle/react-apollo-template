import React from "react";
import styled, { withTheme } from "styled-components";
import { RippleEffect } from "./RippleEffect";

type ButtonProps = {
  isDark?: boolean;
};

const ButtonElement = styled.button<ButtonProps>`
  background-color: ${(props) => (props.isDark ? props.theme.colors.dark : props.theme.colors.light)};
  color: ${(props) => (props.isDark ? props.theme.colors.light : props.theme.colors.dark)};

  font-size: 1rem;
  font-weight: 600;
  padding: 10px 36px;
  border: 1px solid black;
  border-radius: 5px;

  cursor: pointer;
  overflow: hidden;
  position: relative;
  outline-width: 0;
`;

type ButtonComponentProps = {
  isDark?: boolean;
  hasRippleEffect?: boolean;
  theme: any; // styled-components theme
  children?: any;
};

function ButtonComponent(props: ButtonComponentProps) {
  const { theme, hasRippleEffect, isDark, ...other } = props;
  return (
    <ButtonElement theme={theme} isDark={isDark} {...other}>
      {props.children}
      {hasRippleEffect && <RippleEffect color={isDark ? theme.colors.light : theme.colors.dark} />}
    </ButtonElement>
  );
}

export const Button = withTheme(ButtonComponent);
