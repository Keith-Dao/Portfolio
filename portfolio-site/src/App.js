import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './Components/Main Styles/main.css';
import Landing from './Components/Landing/landing'
import NavBar from './Components/Navbar/nav';
import Footer from './Components/Footer/footer';
import Content from './Components/Content/content'


const App = () => {
  const sections = [
    {header: 'resume',
    content: <div>This is where the resume would go.</div>},
    {header: 'projects',
    content: <div>This is where the projects would go.</div>},
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