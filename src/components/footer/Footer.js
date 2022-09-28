import React from 'react'
import './Footer.css'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'
import {ImMail4} from 'react-icons/im'

function Footer(props) {
  return (
<>
    <div className ='footerClass' >
	<div className="row">
		<div className="col-12">
                <p className="transition">Copyright © 2022<br/>Created by Dhruv Saini using ReactJS Framework.<br/>
                <a className="emailNote" href="mailto:dhruvsaini1997@gmail.com">Email Me</a></p>
                </div>
	</div>
	<div className="gradient-white">
        <a href='mailto:dhruvsaini1997@gmail.com'><ImMail4 className='mailIcon'/></a>
		<a href="#top"><BsFillArrowUpCircleFill className='backToTopIcon'/></a>
	</div>
</div>
</>

  );
}
export default Footer;
