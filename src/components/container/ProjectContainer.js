import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './ProjectContainer.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

function ProjectContainer(props) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className='projectContainer' id='projects'>
      <div className='row projectClass d-flex justify-content-center'>
        <div className='header-center'>
          <h3>Some of my latest work</h3>
        </div>

        <div>
          <Container>
            <Row xs={1} md={3} className='g-4 h-100'>
              {props.constantData.allProjects.map((project) => {
                const isHovered = hoveredCard === project.id;
                const words = project.description.split(' ');
                return (
                <Col data-aos='fade-up' key={project.id}>
                  <a className='appCard' href={project.githubLink} target='_blank'>
                    <Card
                      className={`appCard ${isHovered ? 'hovered' : ''}`}
                      onMouseEnter={() => setHoveredCard(project.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <Card.Img className='imgCard' variant='top' src={project.imgUrl} />
                      <Card.Body>
                        <Card.Title>{project.title}</Card.Title>
                        <div className='project-skills'>
                          {project.skills.split('|').map((skill) => (
                            <span key={skill.trim()} className='skill-badge'>{skill.trim()}</span>
                          ))}
                        </div>
                        <Card.Text>
                          {isHovered ? project.description : words.slice(0, 50).join(' ')}
                          {words.length > 50 && !isHovered ? '...' : ''}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </a>
                </Col>
                );
              })}
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default ProjectContainer;
