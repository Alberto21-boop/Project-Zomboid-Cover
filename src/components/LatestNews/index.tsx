import { Container } from "./styles";
import imageOne from "../../assets/image-one.png";
import imageTwo from "../../assets/image-two.png";
import imageThree from "../../assets/image-three.png";
import arrow from "../../assets/arrow-icon.svg";
import BloodNews from "../../assets/blood-news.png";

export function LatestNews() {
  return (
    <Container>
      <div>
        <img src={BloodNews} alt="" />
        <h2>LATEST NEWS</h2>
      </div>

      <div className="image-container">
        <img className="ImageOne" src={imageOne} alt="" />
        <img className="ImageTwo" src={imageTwo} alt="" />
        <img className="ImageThree" src={imageThree} alt="" />

        <div>
          <div>
            <div className="FirstElement">
              <h3>CRITTERZ</h3>
              <img className="arrow" src={arrow} alt="" />
            </div>
            <p>
              Happy March survivors, let’s check in with some of the <br />
              departments we didn’t visit in the blogapalooza of two…
            </p>
          </div>

          <div>
            <div className="SecondElement">
              <h3>PLAY YOUR CARDZ RITFHT</h3>
              <img className="arrow" src={arrow} alt="" />
            </div>
            <p>
              Hey all, let’s chime in with some of the feverish work being
              <br />
              done in the musty basements and damp holes…
            </p>
          </div>

          <div>
            <div className="ThirdElement">
              <h3>MY ZEDS IS ON FIRE</h3>
              <img className="arrow" src={arrow} alt="" />
            </div>
            <p>
              How do all. Here’s a check-in from a few different Build 42 <br />
              departments, that also occurs in the lead-up to…
            </p>
          </div>
        </div>
      </div>

      <div className="NewsDev">
        <div className="LeftElement">
          <p className="TextRed">News & Dev</p>
          <p className="TextWhite">&emsp;|&emsp; March 2, 2023</p>
        </div>

        <div className="CenterElement">
          <p className="TextRed">News & Dev</p>
          <p className="TextWhite">&emsp;|&emsp; February 16, 2023</p>
        </div>

        <div className="RightElement">
          <p className="TextRed">News & Dev</p>
          <p className="TextWhite">&emsp;|&emsp; March 2, 2023</p>
        </div>
      </div>

      <button>VIEW ALL NEWS</button>
    </Container>
  );
}
