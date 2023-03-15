import { Container } from "../Header/styles";

interface TextProps {
  message: string;
  title: string;
  picture: string;
  isMain: boolean;
}

export function Elements({
  message,
  title,
  picture,
  isMain = false,
}: TextProps) {
  return (
    <Container isMain={isMain}>
      <div>
        <div>
          <img src={picture} alt="" />
          <h3>{title}</h3>
        </div>
        <p>{message}</p>
      </div>
    </Container>
  );
}
