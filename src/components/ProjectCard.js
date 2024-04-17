import Col from 'react-bootstrap/Col';

function ProjectCard({ title, description, imgUrl, projectUrl }) {
  return (
    <Col sm={6} md={6}>
      <a href={projectUrl} target="_blank" rel="noopener noreferrer"> {/* Open link in new tab */}
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
}


export default ProjectCard;