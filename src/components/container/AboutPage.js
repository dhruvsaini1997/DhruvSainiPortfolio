import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import './AboutPage.css'
import dsbackpic from '../../images/IMG1.jpg'

export default class AboutPage extends Component {
  render() {
    return (
      <Container className='aboutContainer' id="about">
        <div className='row' >
          <div className='col-12 aboutClass'>
            <img className='bgImg' alt="background" src={dsbackpic} />
            <div className="contentLeft">
              <div className="coder description">
                <h1><span className="chevron-left">&lt;</span>coder<span className="chevron-right">&gt;</span></h1>
                <p>Front end developer who writes clean, elegant and efficient code.</p>
              </div>


              <div className="coder description">
                <h1>Product Engineer</h1>
                <p>Front end developer who writes clean, elegant and efficient code.</p>
              </div>
            </div>
            <div className="contentRight">
              <div className="coder description">
                <h1><span className="chevron-left">&lt;</span>coder<span className="chevron-right">&gt;</span></h1>
                <p>Front end developer who writes clean, elegant and efficient code.</p>
              </div>


              <div className="developer description">
                <h1>Product Engineer</h1>
                <p>Front end developer who writes clean, elegant and efficient code.</p>
              </div>
            </div>
          </div>
        </div>

      </Container>
    )
  }
}
