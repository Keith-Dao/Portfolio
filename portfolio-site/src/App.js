import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './Components/Main Styles/main.css';
import Landing from './Components/Landing/landing'
import NavBar from './Components/Navbar/nav';
import Footer from './Components/Footer/footer';
import Content from './Components/Content/content'

function App() {
  return (
    <div className="App">
      <Landing />
      <NavBar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
