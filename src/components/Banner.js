import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ArrowRightCircle } from "react-bootstrap-icons";

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const toRotate = ["Web Developer", "UX/UI Designer"];
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  function tick() {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {"Hi, I'm Daniel Shaw "}
              <span className="wrap">{text}</span>
            </h1>
            <p>
              Hello! I'm a software developer from Katy, Texas. I'm very
              passionate about learning and writing code, whether it's solving
              problems or building interesting applications. I enjoy playing
              chess and making music in my free time, as well as exercising to
              keep myself healthy.
            </p>
            <button>
              <a
                href='https://mail.google.com/mail/u/0/?view=cm&fs=1&to=nimbusmanski@gmail.com'
                target="_blank"
              >
                Connect <ArrowRightCircle size={25} />
              </a>
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={"./images/My project.png"} alt="Header image"></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
