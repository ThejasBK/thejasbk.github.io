// src/App.jsx
import React from 'react';
import About from './components/about';
import Experience from './components/experience';
import Education from './components/education';
import Skills from './components/skills';
import Projects from './components/projects';

function App() {
  return (
    <>
      <header>
        <h1>Thejas Balenahalli Kiran</h1>
        <p>Data Scientist</p> {/* We can refine this later if needed */}
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#publications">Publications</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <div className="container">
        <About /> {/* Use the About component here */}
        <Experience /> {/* Use the Experience component here */}
        <Education /> {/* Use the Education component here */}
        <Skills /> {/* Use the Skills component here */}
        <Projects /> {/* Use the Projects component here */}
        
        <section id="publications">
          <h2>Publications</h2>
          {/* Publications content will go here */}
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>Email: <a href="mailto:thejaskiran99@gmail.com">thejaskiran99@gmail.com</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/thejasbk" target="_blank" rel="noopener noreferrer">linkedin.com/in/thejasbk</a> </p>
          <p>Location: Bentonville, AR </p>
        </section>
      </div>

      <footer>
        <p>&copy; {new Date().getFullYear()} Thejas Balenahalli Kiran</p>
      </footer>
    </>
  );
}

export default App;