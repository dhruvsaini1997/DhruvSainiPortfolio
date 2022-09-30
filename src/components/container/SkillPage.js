import React, { useEffect } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import './SkillPage.css'
import { FaTools,FaCloud,FaDatabase ,FaMicrosoft} from 'react-icons/fa'
import { BsLaptopFill,BsFileEarmarkCodeFill } from "react-icons/bs";
import {AiFillCodeSandboxSquare} from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css"


function SkillPage(props) {

    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    return (
        <div className='projectContainer' id="skillPage">
            <div className='row ' >
                <div className='col-12 projectClass d-flex justify-content-center'>
                    <div className="header-center"><h3><FaTools />   The Skills</h3></div>
                </div>
                <div>
                    <Container className=''>
                        <Row xs={1} md={3} className="g-4 h-100">

                            {props.constantData.allSkills.map((skill) =>
                            (<Col data-aos="fade-up">
                                <Card className='appcard'>
                                    <Card.Header className='title'>

                                    {skill.index==1 && <BsLaptopFill color='black'/>}
                                    {skill.index==2 && <BsFileEarmarkCodeFill color='black'/>}
                                    {skill.index==3 && <FaCloud color='black'/>}
                                    {skill.index==4 && <FaDatabase color='black'/>}
                                    {skill.index==5 && <AiFillCodeSandboxSquare color='black' size='40px'/>}
                                    {skill.index==6 && <FaMicrosoft color='black'/>}

                                    &nbsp;
                                    {skill.title}</Card.Header>
                                    <Card.Body className='cardBody'>
                                        <ul>
                                            {skill.list.map(i => (
                                                <li>
                                                    {i}
                                                </li>
                                            ))}
                                        </ul>
                                    </Card.Body>
                                </Card></Col>
                            ))}
                        </Row>
                    </Container>
                </div>
            </div>

        </div>
    );

}
export default SkillPage;
