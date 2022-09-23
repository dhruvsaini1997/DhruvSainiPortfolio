import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import './Body.css'

export default class Body extends Component {
  render() {
    return (
      <Container className='appContainer'>
      <div className='row'>
      <div className='col-12 backgroundImg'>
      <img className='bgImg'  alt="background" src='IMG1.jpg'/>
      <div className="contentLeft">
                <div className="coder description">
									<h1><span className="chevron-left">&lt;</span>coder<span className="chevron-right">&gt;</span></h1>
									<p>Front end developer who writes clean, elegant and efficient code.</p>
								</div>


                <div className="developer description">
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
      </div></div>

   </Container>
    )
  }
}
