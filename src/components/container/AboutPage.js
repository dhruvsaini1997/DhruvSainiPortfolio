import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './AboutPage.css';
import dsbackpic from '../../images/IMG1.jpg';
import dsResume from '../../images/Dhruv_Saini.pdf';
import Aos from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup';

function AboutPage(props) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const handleContactMe = () => {
    window.location.href = 'mailto:saini.dh@northeastern.edu';
  };

  return (
    <Container className="aboutContainer" id="about">
      <div className="row">
        <div className="col-12 aboutClass">
          <img className="bgImg" data-aos="fade-up" alt="background" src={dsbackpic} />
          <div className="contentLeft" data-aos="fade-up">
            <div className=" text-center coder description">
              <h1 >Software Engineer <br/>+ <br/>Master's Student</h1>
              <p>
  Hello! I am a passionate software developer and dedicated computer science graduate student from India, currently based in Boston, United States.
  <br /><br />
  With an insatiable curiosity for technology and an unwavering commitment to solving complex problems, I thrive in designing and implementing scalable software solutions that drive remarkable outcomes.
</p>

              <button className="contactBtn" onClick={handleContactMe}>
                Contact Me
              </button>
            </div>
          </div>
          <div className="contentRight" data-aos="fade-up">
            <div className="countClass">
              <h1>
                <CountUp start={0} end={1000000} duration={3} delay={0.01} />+
              </h1>
              <h5>Lines of code</h5>
            </div>
            <div className="whatsNew">
  <h2>What's New With Me ?</h2>
  <p>
  I’m currently exploring the immense potential of data by diving into various algorithms and best practices for optimal data management and processing.</p><p>
  I’m excited to apply this knowledge to tackle real-world challenges and contribute to the development of intelligent and impactful solutions.
  </p>
</div>

            <a className="downloadBtn" href={dsResume} download>
              <div className="countClass downloadClass">
                <p>Download Resume</p>
              </div>
            </a>
            <div className="mobileDownloadClass">
              <p>
                <a className="downloadBtn" href={dsResume} download>
                  Download Resume.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default AboutPage;
