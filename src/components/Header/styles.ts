import styled from "styled-components";

export const UpperContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  top: 0;
  height: 50px;
  width: 100%;
  background-color: #111111;
  z-index: 1;
  gap: 200px;
  box-shadow: 1px 10px 90px 40px rgba(0, 0, 0, 1.8);

  width: 100%;

  .leftElements {
    position: relative;

    & > div {
      color: #ffff;
      font-family: "Nunito Sans", sans-serif;
      font-size: 13px;
    }

    p {
      color: #999999;
    }

    a {
      color: #ffffff;
      cursor: pointer;

      :hover {
        color: #cd003b;
        cursor: pointer;
      }

      :active {
        color: #cd003b;
        cursor: pointer;
      }
    }
  }

  .rightElements {
    display: flex;
    gap: 15px;
    align-items: center;

    & > div {
      color: #ffff;
      font-family: "Nunito Sans", sans-serif;
      font-size: 13px;

      img {
        cursor: pointer;
        margin-left: 4px;
        filter: brightness(0) saturate(100%) invert(100%) sepia(100%)
          saturate(2%) hue-rotate(37deg) brightness(109%) contrast(101%);

        :hover {
          cursor: pointer;
          filter: brightness(0) saturate(100%) invert(13%) sepia(100%)
            saturate(4735%) hue-rotate(335deg) brightness(78%) contrast(108%);
        }

        :active {
          cursor: pointer;
          filter: brightness(0) saturate(100%) invert(13%) sepia(100%)
            saturate(4735%) hue-rotate(335deg) brightness(78%) contrast(108%);
        }
      }
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  top: 0;
  width: 100%;
  height: 80px;
  margin-bottom: 80px;
  max-height: 100px;

  span {
    display: flex;
    margin-top: 140px;
    align-items: center;
    justify-content: center;
    gap: 185px;
    width: 100%;
    position: relative;
    z-index: 2;

    p {
      font-size: 22px;
      padding: 5px 11px;
      box-sizing: border-box;
      font-size: 20px;
      letter-spacing: 3px;

      a {
        color: #ffffff;
        text-decoration: none;

        //codigo novo

        background-size: cover;
      }
      a:hover {
        background-image: none; /* Remove a imagem quando o mouse não estiver mais em cima */
        color: #ffffff; /* Adicione uma cor diferente para o texto quando o mouse estiver em cima */
        background-image: url("https://projectzomboid.com/blog/content/themes/rw-project-zomboid/assets/images/bloodactive.png"); /* Adicione uma cor de fundo diferente quando o mouse estiver em cima */
        background-position: 0 -12px;
      }
    }

    .interpriseLogo {
      width: 151px;
      height: 100px;
      cursor: pointer;
    }

    .indieLogo {
      width: 82px;
      height: 99px;
    }

    img {
      max-width: 100%;
      margin-bottom: 10px;
      height: auto;
    }
  }
`;
