import './App.css';
import About from './components/AboutMe';
import Project from './components/Project';
import Work from './components/Work';
import { useRef } from "react";
import ScrollToTop from './components/ScrollToTop';
import useTypingEffect from './components/typing-effect';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function App() {
  const about = useRef(null);
  const project = useRef(null);
  const work = useRef(null);
  const name = useTypingEffect("Shinta Karolina Bek", 100);
  const bio = useTypingEffect("Aspiring Frontend Developer", 100);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth"
    })
  }

  return (
    <div className="App">
      <ScrollToTop/>
      <div className="main">
        <ul>
          <li onClick={()=>scrollToSection(about)} className="link">About Me</li>
          <li onClick={()=>scrollToSection(project)} className="link">Project Experience</li>
          <li onClick={()=>scrollToSection(work)} className="link">Work Experience</li>
        </ul>
        <div className='imgcircle'>
          <div className='content'>
            <img src={require('./profile_image.jpeg')} alt='profilepicture'/>
          </div>
        </div>
        <h1>{name}</h1>
        <h3><i>{bio}</i></h3>
        <div>
          <ul>
            <li className="socials-link"><a href='https://github.com/francescaaaaa' target='to_blank'><FaGithub size={30}/></a></li>
            <li className="socials-link"><a href='https://www.linkedin.com/in/shintabek/' target='to_blank'><FaLinkedin size={30}/></a></li>
            <li className="socials-link"><a href='mailto:shintabek@gmail.com'><FaEnvelope size={30}/></a></li>
          </ul>
        </div>
      </div>
      <section ref={about} className="about-section">
        <About/>
      </section>
      <section ref={project} className="project-section">
        <Project/>
      </section>
      <section ref={work} className="work-section">
        <Work/>
      </section>
    </div>
  );
}

export default App;
