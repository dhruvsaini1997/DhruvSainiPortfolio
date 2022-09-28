import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import './ProjectContainer.css'

function ProjectContainer(props) {
  return (
    <div className='projectContainer' id="projects">
      <div className='row' >
        <div className='col-12 projectClass'>
          <div className="header-center"><h3>Some of my latest work</h3></div>
        </div>
        <div>
          <Container>
          <Row xs={1} md={3} className="g-4 h-100">
            
            { props.constantData.allProjects.map(project => 
            (
              <Col><a className='appCard'href={project.githubLink} target='_blank'>
                <Card className='appCard'>
                  <Card.Img className="imgCard" variant="top" src= {project.imgUrl} />
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>
                      {project.description}
                    </Card.Text>
                  </Card.Body>
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
