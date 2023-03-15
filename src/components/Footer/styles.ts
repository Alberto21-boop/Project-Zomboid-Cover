import styled from "styled-components";

export const Container = styled.div`
  width: 1519px;
  height: 395px;
  color: #212529;
  background-color: #111111;

  .FooterList {
    display: flex;

    width: 100%;
    padding-right: 600px;
    padding-left: 200px;
    margin-right: auto;
    margin-left: auto;

    box-sizing: border-box;

    gap: 135px;

    & > div {
      margin: 0px 10px 0px 3px;
    }

    h4 {
      margin-top: 50px;
      color: red;
      margin-bottom: 40px;
      letter-spacing: 3px;

      font-family: "Bebas Neue", sans-serif, cursive;
      font-weight: 500;
      letter-spacing: 2px;
      font-size: 15px;
    }

    ul {
      color: #999999;
      font-family: "Nunito Sans", sans-serif;
      letter-spacing: 0px;
      font-size: 14px;

      list-style: none;
      padding: 0 0;

      font-size: 1.0625rem;
      font-weight: 400;
      line-height: 1.47;
      color: #212529;
      text-align: left;

      li {
        width: 980px;
        height: 40px;
        margin-right: -5550px;

        color: #999999;
        font-family: "Nunito Sans", sans-serif;
        letter-spacing: 0px;
        font-size: 14px;

        cursor: pointer;
      }

      li:hover {
        color: #ffffff;
      }
    }
  }

  img {
    width: 700px;
    margin-top: -310px;
    margin-left: 820px;
  }
`;
