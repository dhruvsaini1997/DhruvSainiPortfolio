import React, { useState, useEffect } from 'react'
import AboutPage from '../container/AboutPage'
import ProjectContainer from '../container/ProjectContainer'
import SkillPage from '../container/SkillPage'
import Timeline from '../container/Timeline'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import ParticleBackground from '../ParticleBackground'
import './AppContainer'

function AppContainer(props) {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <div className='appContainerMain'>
      <ParticleBackground darkMode={darkMode} />
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <AboutPage />
      <ProjectContainer constantData={props.constantData} />
      <SkillPage constantData={props.constantData}></SkillPage>
      <Timeline timelineData={props.constantData.timelineItems}></Timeline>
      <Footer/>
    </div>
  )
}

export default AppContainer;
