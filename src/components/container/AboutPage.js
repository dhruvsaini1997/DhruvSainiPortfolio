import React, {  useEffect } from 'react'
import { Container } from 'react-bootstrap'
import './AboutPage.css'
import dsbackpic from '../../images/IMG1.jpg'
import dsResume from '../../images/DhruvSaini_Resume.pdf'
import Aos from "aos";
import "aos/dist/aos.css";
import CountUp from 'react-countup';

function AboutPage(props) {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Container className='aboutContainer' id="about">
      <div className='row' >
        <div  className='col-12 aboutClass'>
          <img className='bgImg' data-aos="fade-up" alt="background" src={dsbackpic} />
          <div className="contentLeft" data-aos="fade-up">
            <div className="coder description">
              <h1><span className="chevron-left">&lt;</span>coder<span className="chevron-right">&gt;</span></h1>
              <p>Front end developer who writes clean, elegant and efficient code.</p>
            </div>


            <div className="coder description" >
              <h1>Product Engineer</h1>
              <p>Front end developer who writes clean, elegant and efficient code.</p>
            </div>
           
          </div>
          <div className="contentRight" data-aos="fade-up">
              <div className='countClass'>
              <h1><CountUp start={0} end={1000000} duration={3} delay={0.01}/>+</h1>
              <h5>  Lines of code</h5>
              </div>
              <a className='downloadBtn' href={dsResume} download><div className='countClass downloadClass'>
                <p>Download Resume</p>
            </div></a>

            <div className='mobileDownloadClass'>
              <p><a className='downloadBtn' href={dsResume} download>Download Resume.</a></p>
            </div>
          </div>
        </div>
      </div>

    </Container>
  )
}
export default AboutPage;
