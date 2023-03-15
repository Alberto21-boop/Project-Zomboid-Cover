import { Container } from "./styles";
import footer from "../../assets/footer.png";

export function Footer() {
  return (
    <Container>
      <div className="FooterList">
        <div>
          <h4>EXPLORE</h4>
          <ul>
            <li>Homepage</li>
            <li>Forum</li>
            <li>The Game</li>
            <li>Game Map</li>
          </ul>
        </div>

        <div>
          <h4>BLOG</h4>
          <ul>
            <li>News</li>
            <li>Modding</li>
            <li>Community</li>
            <li>About Us</li>
          </ul>
        </div>

        <div>
          <h4>SUPPORT</h4>
          <ul>
            <li>FAQ</li>
            <li>Version History</li>
            <li>Returning to PZ</li>
            <li>Tech Support</li>
            <li>Contact us</li>
          </ul>
        </div>

        <div>
          <h4>LEGAL</h4>
          <ul>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Modding Policy</li>
            <li>IP Rights Policy</li>
          </ul>
        </div>
      </div>
      <img src={footer} alt="" />
    </Container>
  );
}
