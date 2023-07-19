import React from 'react';
import './App.css';
import profileImage from './yerrmie.jpg';

// Header component
const Header = () => {
  return (
    <header>
      <div className="profile-image">
        <img src={profileImage} alt="Profile" />
      </div>
      <h1>Taylor Dallimore</h1>
      <ul><p>taylordallimore98@gmail.com</p> </ul>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </nav>
    </header>
  );
};

// About component
const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>
        Hello! I'm Taylor. I am currently in my third and final year 
        of studying Computer Science at Victoria University of 
        Wellington. <br></br> I am interested in software and web 
        development. I made this website to show my skills and help 
        you realise why you should hire me.
      </p>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills"> 
      <h2>Skills</h2>
      <ul>
        <li>
          <h3>Java</h3>
          <p>I have been learning Java for 3 years now and have a good understanding of the language.</p>
        </li>
        <li>
          <h3>HTML</h3>
          <p>I have been learning HTML for 3 years now and have a good understanding of the language.</p>
        </li>
        <li>
          <h3>CSS</h3>
          <p>I have been learning CSS for 3 years now and have a good understanding of the language.</p>
        </li>
        <li>
          <h3>JavaScript</h3>
          <p>I have been learning JavaScript for 3 years now and have a good understanding of the language.</p>
        </li>
        <li>
          <h3>React</h3>
          <p>I have been learning React for 3 years now and have a good understanding of the language.</p>
        </li>
        <li>
          <h3>Python</h3>
          <p>I have been learning Python for 3 years now and have a good understanding of the language.</p>
        </li>
        <li>
          <h3>SQL</h3>
          <p>I have been learning SQL for 3 years now and have a good understanding of the language.</p>
        </li>
        <li>
          <h3>Git</h3>
          <p>I have been learning Git for 3 years now and have a good understanding of the language.</p>
        </li>
        <li>
          <h3>GitHub</h3>
          <p>I have been learning GitHub for 3 years now and have a good understanding of the language.</p>
        </li>
        </ul>
        </section>
  );
};

// Projects component
const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul>
        <li>
          <h3>Java Game</h3>
          <p>I have developed my own game using Java. It can be found here: gitlab/taylordallimore</p>
        </li>
        <li>
          <h3>WHAT ELSE HAVE I DONE</h3>
          <p>HELLO</p>
        </li>
        {/* Add more projects here */}
      </ul>
    </section>
  );
};

// App component
const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
      <About />
      <Skills />
      <Projects />

      {/* Add more sections here */}
      </div>
    </div>
  );
};

export default App;
