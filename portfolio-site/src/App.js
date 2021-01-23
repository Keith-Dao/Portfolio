import React from 'react';
import './App.css';
import './Components/Main Styles/main.css';
// React components
import Landing from './Components/Landing/landing'
import NavBar from './Components/Navbar/nav';
import Footer from './Components/Footer/footer';
import Content from './Components/Content/content'

const App = () => {
  const sections = [
    {header: 'landing page'},
    {header: 'view resume',
    link: 'resume.pdf'}, // TODO add the pdf link
    {header: 'projects',
    content: <div>This is where the projects would go.</div>},
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