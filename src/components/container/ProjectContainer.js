import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import './ProjectContainer.css';
import Aos from "aos";
import "aos/dist/aos.css"

function ProjectContainer(props) {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className='projectContainer' id="projects">
      <div className='row  projectClass d-flex justify-content-center' >
        <div className="header-center"><h3>Some of my latest work</h3></div>

        <div>
          <Container className=''>
            <Row xs={1} md={3} className="g-4 h-100">

              {props.constantData.allProjects.map(project =>
              (
                <Col data-aos="fade-up"><a className='appCard' href={project.githubLink} target='_blank'>
                <Card
  className={`appCard ${hoveredCard === project.id ? 'hovered' : ''}`}
  onMouseEnter={() => setHoveredCard(project.id)}
  onMouseLeave={() => setHoveredCard(null)}
>

                    <Card.Img className="imgCard" variant="top" src={project.imgUrl} />
                    <Card.Body>
                      <Card.Title>{project.title}</Card.Title>
                      <Card.Text>
                       {hoveredCard === project.id ? project.description : project.description.split(' ').slice(0, 50).join(' ')}
                       {project.description.split(' ').length > 50 && hoveredCard !== project.id ? '...' : ''}
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer  className="-3">
                      <small className="text-muted">{project.skills}</small>
                    </Card.Footer>
                  </Card></a>
                </Col>
              ))}
            </Row></Container>
        </div>
      </div>

    </div>
  );

}
export default ProjectContainer;
