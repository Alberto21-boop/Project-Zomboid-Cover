import { HTMLAttributes } from "react";
import { Container } from "./styles";

interface SalesProps {
  message: string;
  picture?: string;
  price: string;
  isMain?: boolean;
}

export function Sales({ message, picture, price, isMan = false }: SalesProps) {
  return (
    <Container isMan={isMan}>
      <div>
        <div>
          <img src={picture} alt="" />
          <h3>{message}</h3>
          <p>{price}</p>
        </div>
      </div>
    </Container>
  );
}
