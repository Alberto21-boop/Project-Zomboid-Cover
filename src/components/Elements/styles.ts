import styled from "styled-components";
interface ContainerProps {
  isMain: boolean;
}

export const Container = styled.div<ContainerProps>`
  ${({ isMain }) => {
    return isMain
      ? `
    
    `
      : ``;
  }}
`;
