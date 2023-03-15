import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Sales } from "../../components/Sales";
import { Container, Content } from "./styles";
import firstImage from "../../assets/firstImage.png";
import secondImage from "../../assets/secondImage.png";
import thirdImage from "../../assets/thirdImage.png";
import { LatestNews } from "../../components/LatestNews";
import { Footer } from "../../components/Footer";

export function Home() {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <div>
            <h1>
              The ultimate <br /> Zombie Survival RPG
            </h1>
          </div>

          <div>
            <section>
              <Card className="cardOne">
                <Sales isMain={true} message="" picture="" price="" />
              </Card>

              <Card className="cardTwo">
                <Sales isMain={true} message="" picture="" price="" />
              </Card>

              <Card className="cardThree">
                <Sales isMain={true} message="" picture="" price="" />
              </Card>
            </section>
          </div>
        </Content>

        <div className="photographs">
          <div className="group">
            <div>
              <h2>SURVIVE</h2>
              <img src={firstImage} alt="" />
              <p>
                Surviving isn’t just about blowing zombie heads off. Depression,
                starvation, loneliness, infection... Just some of the things to
                deal with...
              </p>
            </div>

            <div>
              <h2>BUILD</h2>
              <img src={secondImage} alt="" />
              <p>
                Craft items to help you stay alive. Whether it’s weapons, food
                or a plank of wood nailed to a door...
              </p>
            </div>

            <div>
              <h2>DEFEND</h2>
              <img src={thirdImage} alt="" />
              <p>
                Protect yourself and your allies from the relentless horde with
                a huge range of weapons and defenses.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <LatestNews />
      <Footer />
    </>
  );
}
