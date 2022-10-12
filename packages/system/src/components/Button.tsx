import { PropsWithChildren } from "react";
import styled from "styled-components";

interface ButtonProps extends PropsWithChildren {}

const StyledButton = styled.button`
  border: 0;
  background: cyan;
  padding: 1rem;
`;

export const Button = ({ children }: ButtonProps) => {
  return <StyledButton type="button">{children}</StyledButton>;
};
