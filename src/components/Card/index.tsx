import { HTMLAttributes } from "react";
import { Container } from "./styles";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: JSX.Element | JSX.Element[];
}

export function Card({ children, ...props }: CardProps) {
  return <Container {...props}>{children}</Container>;
}
