import React, { PropsWithChildren } from "react";
import styled from "@emotion/styled";

type ButtonProps = PropsWithChildren<{
  variant?: "primary" | "secondary";
}>;

export function Button({ variant = "primary", children }: ButtonProps) {
  return <Wrapper variant={variant}>{children}</Wrapper>;
}

const Wrapper = styled("button")<Pick<ButtonProps, "variant">>`
  border: none;
  border-radius: 2px;
  padding: 16px 8px;
  box-sizing: border-box;
  text-align: center;
  letter-spacing: 0.857143px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  color: ${props => (props.variant === "primary" ? "#fff" : "#C8C8C8")};
  border: ${props => props.variant === "secondary" && "1px solid #E6E6E6;"};
  background-color: ${props =>
    props.variant === "primary" ? "#002B56" : "#fff"};
`;
