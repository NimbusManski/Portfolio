import ProjectCard from './ProjectCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';



function Projects() {
  const projects = [
    {
      title: 'Explosive Connect',
      description: 'Create an accout, match the proper icons and trigger different explosions!',
      imgUrl: '/images/Explosive-Connect.png',
    },
    {
      title: 'Chess',
      description: 'A javascript implentation of one of my favorite games!',
      imgUrl: '/images/chess-project-screenshot.png',
    },
    {
      title: 'Proper Ledger',
      description: 'A mock website of a top accounting firm!',
      imgUrl: '/images/Proper Ledger.png',
    }
  
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam eum id cupiditate incidunt dolor officiis, inventore,
              reprehenderit illo vitae corrupti earum voluptatem cum esse odit
              mollitia nemo odio voluptate atque.
            </p>
            <Tab.Container id='projects-tabs' defaultActiveKey='first'>
            <Nav variant='pills' className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
              <Nav.Item>
                <Nav.Link eventKey='first'>Tab One</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='second'>Tab Two</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='third'>Tab Three</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey='first'>
                <Row>
                  {
                    projects.map((project, index) => {
                      return(
                        <ProjectCard
                        key={index}
                        {...project} />
                      )
                    })
                  }
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey='second'>Some Shit</Tab.Pane>
              <Tab.Pane eventKey='third'>Some Bullshit</Tab.Pane>
            </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container> 
    </section>
  );
}

export default Projects;