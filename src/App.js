import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './App.css';
import profileImage from './yerrmie.jpg';

const contact = `public class ContactMe {	
  public String myEmail = "taylordallimore98@gmail.com";
  public int myPhoneNumber = 0223930750;
  public String myGithub = "https://github.com/taylordallimore";
  public String myLinkedin = "https://www.linkedin.com/in/taylor-dallimore";
  }
}`;

const aboutme = `public class AboutMe {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
    System.out.println("I'm Taylor Dallimore!");
    System.out.println("I am a third year Computer Science student at Victoria University of Wellington");
    System.out.println("I am interested in software and web development");
    System.out.println("I am looking for a career in the IT industry");
  }
}`;

const skills = `public class MySkills {
    public void Java(){
      System.out.println("My primary language is Java.");
    }
    def Python():
      print("I am also a capable python programmer.")
    public void HTML() extends CSS{
      System.out.println("I have experience using HTML and CSS.");
    }
    public void JavaScript(){
      System.out.println("I also have used JavaScript.");
      System.out.println("I have used React and Node.js (to build this)");
    }
    List<String> toolsUsed = new ArrayList<String>();
    toolsUsed.add("AWS");
    toolsUsed.add("Docker");
    toolsUsed.add("Figma");
    toolsUsed.add("FindBugs");
    toolsUsed.add("Firebase");
    toolsUsed.add("Godot");
    toolsUsed.add("Git");
    toolsUsed.add("JUnit")
    toolsUsed.add("Linux");
    toolsUsed.add("Unreal Engine");
    toolsUsed.add("Visual Studio Code");
}`;

// Header component
const Header = () => {
  return (
    <header>
      <div className="profile-image">
        <img src={profileImage} alt="Profile" />
      </div>
      <h1>Taylor Dallimore</h1>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
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
      <p>
      <ul><SyntaxHighlighter language="java" style={a11yDark}>
        {aboutme}
      </SyntaxHighlighter> </ul>
      </p>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact">
      <ul><SyntaxHighlighter language="java" style={a11yDark}>
        {contact}
      </SyntaxHighlighter> </ul>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills"> 
      <ul>
          <SyntaxHighlighter language="java" style={a11yDark}>
        {skills}
      </SyntaxHighlighter>
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
          <h3>WHAT ELSE HAVE I DONE
          </h3>
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
      <Contact />
      <Projects />
      </div>
    </div>
  );
};

export default App;
