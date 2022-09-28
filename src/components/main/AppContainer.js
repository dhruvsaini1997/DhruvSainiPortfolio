import React, { Component } from 'react'
import AboutPage from '../container/AboutPage'
import ProjectContainer from '../container/ProjectContainer'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import './AppContainer'

function AppContainer(props) {
  return (
    <div className='appContainerMain'>
      <Header />
      <AboutPage />
      <ProjectContainer constantData={props.constantData} />
      <Footer/>
    </div>
  )

}
export default AppContainer;
