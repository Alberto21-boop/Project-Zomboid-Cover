import { Container, UpperContent } from "./styles";
import logo from "../../assets/logo.png";
import indie from "../../assets/indie-logo.png";
import blog from "../../assets/blog.svg";
import steam from "../../assets/steam.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import youtube from "../../assets/youtube.svg";
import discord from "../../assets/discord.svg";

export function Header() {
  return (
    <Container>
      <UpperContent>
        <div className="leftElements">
          <div>
            <p>
              Stable Build: 41.78.16 &emsp;| &emsp;IWBUMS Beta: 41.78.16
              &emsp;|&emsp; <a>Version history</a> &emsp;|&emsp; <a>Wiki</a>
            </p>
          </div>
        </div>

        <div className="rightElements">
          <div>
            <p>Follow us</p>
          </div>

          <div>
            <img src={blog} alt="" />
            <img src={steam} alt="" />
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={youtube} alt="" />
            <img src={discord} alt="" />
          </div>
        </div>
      </UpperContent>

      <span>
        <div className="interpriseLogo">
          <img src={logo} alt="" />
        </div>
        <p>
          <a href="">HOME</a>
          &emsp;<a href="">THE GAME</a>
          &emsp;<a href="">NEWS</a>
          &emsp;<a href="">FORUM</a>
          &emsp;<a href="">SUPPORT</a>
          &emsp;<a href="">GAME MAP</a>
          &emsp;<a href="">JOBS</a>
        </p>

        <div className="indieLogo">
          <img src={indie} alt="" />
        </div>
      </span>
    </Container>
  );
}
