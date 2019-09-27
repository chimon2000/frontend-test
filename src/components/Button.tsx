import React, { PropsWithChildren } from "react";
import styled from "@emotion/styled";

export function Button({
  variant = "primary",
  className,
  children,
  onClick
}: ButtonProps) {
  return (
    <Wrapper variant={variant} onClick={onClick} className={className}>
      {children}
    </Wrapper>
  );
}

type ButtonProps = PropsWithChildren<{
  variant?: "primary" | "secondary";
  onClick?;
  className?;
}>;

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
  color: ${props => (props.variant === "primary" ? "#fff" : "#002B56")};
  border: ${props => props.variant === "secondary" && "1px solid #002B56;"};
  background-color: ${props =>
    props.variant === "primary" ? "#002B56" : "#fff"};
`;
