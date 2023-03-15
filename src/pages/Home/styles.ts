import styled from "styled-components";

export const Container = styled.div`
  background-image: url("	https://projectzomboid.com/blog/content/uploads/2020/01/zombie-survival-1-scaled.jpg");
  width: 1519.2px;
  height: 1320.05px;

  background-position: center 33%;
  padding-top: 385px;
  background-size: cover;
  z-index: 1;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.9);

  .photographs {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;

    & > div {
      display: flex;
      margin-top: -250px !important;
      gap: 20px;
      padding-left: 165px;

      h2 {
        font-size: 60px;
        line-height: 60px;

        font-family: "Bebas Neue", sans-serif, cursive;
        font-weight: 500;
        letter-spacing: 3px;
        color: #ffffff;
        text-shadow: 2px 2px 4px #000000;

        background-image: url(https://projectzomboid.com/blog/content/themes/rw-project-zomboid/assets/images/bloodline.png);
        width: 48%;
        background-size: contain;
        position: absolute;
        z-index: -1;
        background-repeat: no-repeat;
        background-position: center center;

        position: relative;
        z-index: 5;
      }

      img {
        width: 384px;
        height: 243px;
        margin-top: 10px;
      }

      p {
        font-family: "Nunito Sans", sans-serif;
        letter-spacing: 0px;
        font-size: 17px;
        line-height: 25px;
        color: #ffffff;
        margin-top: 100000;
        margin-top: 5px;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  gap: 360px;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin-bottom: 300px;

    h1 {
      font-size: 75px;
      line-height: 75px;
      text-shadow: 2px 2px 4px #000000;
      color: #ffff;
      font-family: "Bebas Neue", sans-serif, cursive;
      letter-spacing: 3px;
      font-weight: 300;
    }

    section {
      display: flex;
      flex-direction: column;
      width: 100%;

      & .cardOne {
        background-color: #2f3b43;
        width: 285px;
        height: 100px;
        border-radius: 5px;
        text-shadow: 2px 2px 4px #000000;
        margin-bottom: 8px;
      }

      & .cardTwo {
        background-color: #cd003b;
        width: 285px;
        height: 100px;
        border-radius: 5px;
        text-shadow: 2px 2px 4px #000000;
        margin-bottom: 8px;
      }

      & .cardThree {
        background-color: #471666;
        width: 285px;
        height: 100px;
        border-radius: 5px;
        text-shadow: 2px 2px 4px #000000;
        margin-bottom: 8px;
      }
    }
  }
`;
