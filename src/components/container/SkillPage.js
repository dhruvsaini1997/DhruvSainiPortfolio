import React, { useEffect } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import './SkillPage.css'
import { FaTools, FaCloud, FaDatabase, FaPython } from 'react-icons/fa'
import { BsLaptopFill, BsFileEarmarkCodeFill } from "react-icons/bs";
import { AiFillCodeSandboxSquare } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css"


const SKILL_ICONS = {
  1: <BsLaptopFill />,
  2: <BsFileEarmarkCodeFill />,
  3: <FaCloud />,
  4: <FaDatabase />,
  5: <AiFillCodeSandboxSquare size='1.5em' />,
  6: <FaPython />,
};

function SkillPage(props) {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div className='projectContainer skillSection pt-5' id="skillPage">
            <div className='row projectClass d-flex justify-content-center' >
                <div className="header-center"><h3><FaTools />   The Skills</h3></div>
                <div>
                    <Container className=''>
                        <Row xs={1} md={3} className="g-4 h-100">

                            {props.constantData.allSkills.map((skill) =>
                            (<Col data-aos="fade-up" key={skill.index}>
                                <Card className='appcard'>
                                    <Card.Header className='title'>
                                        {SKILL_ICONS[skill.index]}
                                        &nbsp;
                                        {skill.title}</Card.Header>
                                    <Card.Body className='cardBody'>
                                        <ul>
                                            {skill.list.map(i => (
                                                <li key={i}>
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
