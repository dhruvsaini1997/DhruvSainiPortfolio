import React, { useEffect } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import './ProjectContainer.css';
import Aos from "aos";
import "aos/dist/aos.css"

function ProjectContainer(props) {
  
  useEffect(()=>{
    Aos.init({duration:2000});
},[]);

  return (
    <div className='projectContainer' id="projects">
      <div className='row ' >
        <div className='col-12 projectClass d-flex justify-content-center'>
          <div className="header-center"><h3>Some of my latest work</h3></div>
        </div>
        <div>
          <Container className=''>
          <Row xs={1} md={3} className="g-4 h-100"> 
            
            { props.constantData.allProjects.map(project => 
            (
              <Col  data-aos="fade-up"><a className='appCard'href={project.githubLink} target='_blank'>
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
