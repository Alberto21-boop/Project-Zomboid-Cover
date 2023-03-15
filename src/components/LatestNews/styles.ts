import styled from "styled-components";

export const Container = styled.div`
  top: 100%;
  width: 1520px;
  height: 820px;
  background-color: #0d191f;
  padding: 100px 10px 0 10px;

  & > div {
    padding: 120px;
    margin-top: -190px;
    margin-right: 28px;
    margin-left: -10px;

    & > h2 {
      font-size: 60px;
      font-weight: 400;
      line-height: 70px;
      color: #ffffff;
      padding-bottom: 30px;

      margin: -198px 0px 0px 40px;

      border-bottom: 1px solid #cd003b;
    }

    img {
      width: 400px;
      margin-bottom: 50px;
      margin-left: -70px;
      margin-top: -70px;
    }

    .image-container {
      display: flex;
    }

    .ImageOne {
      height: 250px;
      width: 384px;

      margin: -25px 0px 15px 40px;
    }

    .ImageTwo {
      height: 250px;
      width: 384px;

      margin: -25px 20px 15px;
    }

    .ImageThree {
      height: 250px;
      width: 384px;

      margin: -25px 0px 15px;
    }

    & > div {
      display: inline-flex;
      flex-direction: row;

      width: 100%;
      align-items: center;

      position: relative;

      padding-right: 50px;

      .FirstElement {
        display: flex;
        align-items: center;
        align-items: baseline;
        gap: 8px;
      }

      .SecondElement {
        display: flex;
        align-items: center;
        align-items: baseline;
        gap: 8px;
        margin-left: 5px;
      }

      .ThirdElement {
        display: flex;
        align-items: center;
        align-items: baseline;
        gap: 8px;
        margin-left: 1px;
      }

      h3 {
        color: #ffffff;
        font-size: 20px;
        line-height: 20px;
        letter-spacing: 2px;
        font-family: "Bebas Neue", sans-serif, cursive;
        font-weight: 500;

        margin-bottom: -150px;

        margin-left: 41px;

        cursor: pointer;
      }

      .arrow {
        filter: brightness(0) saturate(100%) invert(14%) sepia(91%)
          saturate(5717%) hue-rotate(336deg) brightness(78%) contrast(107%);
        width: 8px;
        display: flex;
        margin-left: 2px;
      }

      p {
        color: #ffffff;
        font-size: 14px;
        line-height: 20px;
        font-family: "Nunito Sans", sans-serif;
        letter-spacing: 0px;

        margin-bottom: 1rem;
        margin-left: 40px;
        //margin-right: -2px;
        margin-top: -35px;
      }
    }
  }

  .NewsDev {
    display: flex;
    margin-top: -200px;
    margin-right: 150px;
    margin-bottom: -50px;

    .NewsDev > .LeftElement {
      display: inline-block;
      font-size: 14px;
      line-height: 14px;
      font-family: "Nunito Sans", sans-serif;
      letter-spacing: 0px;
      display: flex;
    }

    .NewsDev > .CenterElement {
      display: inline-block;
      font-size: 14px;
      line-height: 14px;
      font-family: "Nunito Sans", sans-serif;
      letter-spacing: 0px;
      display: flex;
    }

    .NewsDev .RightElement {
      display: inline-block;
      font-size: 14px;
      line-height: 14px;
      font-family: "Nunito Sans", sans-serif;
      letter-spacing: 0px;
      display: flex;
    }

    .TextRed {
      color: red;
      cursor: pointer;
    }

    .TextRed:hover {
      color: #4e0217;
      background-color: transparent;
    }
    .TextWhite {
      color: #ffffff;
      margin: -35px 0px 16px;
    }
  }

  button {
    width: 166px;
    height: 58px;
    border-radius: 5px;
    color: #ffffff;
    background-color: red;

    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";

    margin: 0px 0px 0px 650px;

    border: none;

    cursor: pointer;
  }
`;
