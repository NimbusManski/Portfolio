function Projects() {
  const projects = [
    {
      title: 'Business Start Up',
      description: 'Some description',
      url: project1,
    },
    {
      title: 'Business Start Up',
      description: 'Some description',
      url: project2,
    },
    {
      title: 'Business Start Up',
      description: 'Some description',
      url: project3,
    },
    {
      title: 'Business Start Up',
      description: 'Some description',
      url: project4,
    },
    {
      title: 'Business Start Up',
      description: 'Some description',
      url: project5,
    },
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
            <Tabs.Container id='projects-tabs' defaultActiveKey='first'>
            <Nav variant='pills' defaultActiveKey='/home'>
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
                        <p>{project.title}</p>
                      )
                    })
                  }
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey='second'>Some Shit</Tab.Pane>
              <Tab.Pane eventKey='third'>Some Bullshit</Tab.Pane>
            </Tab.Content>
            </Tabs.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
