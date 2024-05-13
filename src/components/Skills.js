import Carousel from "react-multi-carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "react-multi-carousel/lib/styles.css";

function Skills() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-box">
              <h2>Skills</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img
                    src={
                      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                    }
                    alt="img"
                  ></img>
                  <h5>Html5</h5>
                </div>
                <div className="item">
                  <img
                    src={
                      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                    }
                    alt="img"
                  ></img>
                  <h5>Css3</h5>
                </div>
                <div className="item">
                  <img
                    src={
                      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    }
                    alt="img"
                  ></img>
                  <h5>Javascript</h5>
                </div>

                <div className="item">
                  <img
                    src={
                      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    }
                    alt="img"
                  ></img>
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"></img>
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" />
                  <h5>C#</h5>
                </div>
                <div className="item">
                  <img
                    src={
                      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                    }
                    alt="img"
                  ></img>
                  <h5>Express</h5>
                </div>
                <div className="item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"></img>
                  <h5>Node</h5>
                </div>
                <div className="item">
                  <img
                    src={
                      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
                    }
                    alt="img"
                  ></img>
                  <h5>MySQL</h5>
                </div>
                <div className="item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"></img>
                  <h5>MongoDB</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={""}></img>
    </section>
  );
}

export default Skills;
