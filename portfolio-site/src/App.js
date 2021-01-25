import React from 'react';
import { useState } from 'react'; 
import './App.css';
import './Components/Main Styles/main.css';
// React components
import Landing from './Components/Landing/landing'
import NavBar from './Components/Navbar/nav';
import Footer from './Components/Footer/footer';
import Content from './Components/Content/content';
import Project from './Components/Content/projects';

const App = () => {
  const [showSlideShow, toggleSlideShow] = useState(true);

  const sections = [
    {header: 'landing page'},
    {header: 'view resume',
    link: 'resume.pdf'}, // TODO add the pdf link
    {header: 'projects',
    content: <Project showSlideShow={showSlideShow} toggleSlideShow={toggleSlideShow} projects={[]}/>},
    {header: 'about me',
    content: <div>This is where info about me would go.</div>},
    {header: 'social',
    content: <div>This is where the social media links would go.</div>}
  ];

  return (
    <div className="App">
      <Landing />
      <div className="parallax"></div>
      <NavBar sections={sections}/>
      <Content sections={sections}/>
      <Footer />
    </div>
  )
}

export default App;