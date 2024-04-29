import ProjectCard from "./ProjectCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Projects() {
  const projects = [
    {
      title: "Casual Blog",
      description:
        "A blog website that lets you create an account, see other's posts and create your own! Using Javascript, React and CSS on the front end, and Express, Node and MongoDB on the backend. I chose MongoDB for this database as it's more flexible with how the site will evolve over time using new features.",
      imgUrl: "/images/Casual Blog website.png",
      projectUrl:"https://blog-app-mo57.onrender.com"
    },

    {
      title: "CRUD's Book Store",
      description:
        "A CRUD application where you can upload, edit and delete book-listings! Using Javascript, React and CSS on the front end, and Express, MySQL and Node on the backend. I chose a MySQL for this database as each item has a relatively strict schema and also due to the relational nature of e-commerce websites.",
      imgUrl: "/images/CRUD's Book Store.png",
      projectUrl:"https://book-listing-app.onrender.com"
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              This Portfolio along with the two projects below are built using
              Javascript, React, Bootstrap, CSS for the front end and Node,
              Express, MongoDB and MySQL on the backend.
            </p>
            <Row>
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
