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
    {header: 'landing page',
    interaction: 'toggle',
    toggle: ''},
    {header: 'resume',
    interaction: 'viewable',
    viewable: ''},
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
      <NavBar sections={sections}/>
      <Content sections={sections}/>
      <Footer />
    </div>
  )
}

export default App;